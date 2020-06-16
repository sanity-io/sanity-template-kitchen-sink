const env = process.env.NODE_ENV || 'development'

const hasSlug = document => {
  return document.slug && document.slug.current
}

export default function resolvePreviewUrl(document) {
  const baseUrl = env === 'development' ? 'http://localhost:8000' : '<#<deployments.web.url>#>'
  switch (document._type) {
    case 'route':
      if (!hasSlug(document)) {
        return baseUrl
      }
      return `${baseUrl}/${document.slug.current}`
    case 'post':
      if (!hasSlug(document)) {
        return null
      }
      return `${baseUrl}/blog/${document.slug.current}`
    case 'siteSettings':
      return baseUrl
    case 'page':
      if (document._id === 'frontpage' || document._id === 'drafts.frontpage') {
        return baseUrl
      }
      return null
    default:
      return null
  }
}
