import { getAssetFromKV, mapRequestToAsset } from '@cloudflare/kv-asset-handler'

const DEBUG = 'DEBUG' in process.env ? process.env.DEBUG : false
const defaultOptions = {
  cacheControl: {
    // Skip caching on the edge if we are in DEBUG
    bypassCache: DEBUG
  }
}

addEventListener('fetch', event => {
  try {
    event.respondWith(handleEvent(event))
  } catch (e) {
    if (DEBUG) {
      return event.respondWith(
        new Response(e.message || e.toString(), {
          status: 500
        })
      )
    }
    event.respondWith(new Response('Internal Error', { status: 500 }))
  }
})

async function handleEvent(event) {
  const options = Object.assign({}, defaultOptions, {
    // All requests for html should go to the SPA in our case
    mapRequestToAsset: req => {
      req = mapRequestToAsset(req)
      if (req.url.endsWith('/index.html')) {
        return new Request(`${new URL(req.url).origin}/index.html`, req)
      }
      return req
    }
  })

  try {
    return await getAssetFromKV(event, options)
  } catch (e) {
    // if an error is thrown try to serve the asset at 404.html
    if (!DEBUG) {
      try {
        let notFoundResponse = await getAssetFromKV(event, {
          mapRequestToAsset: req => new Request(`${new URL(req.url).origin}/404.html`, req)
        })

        return new Response(notFoundResponse.body, { ...notFoundResponse, status: 404 })
      } catch (e) {}
    }

    return new Response(e.message || e.toString(), { status: 500 })
  }
}
