<#< repository.name >#>-web

## Live preview mode

Live previewing of content changes is available to you on http://localhost:8000 while you are running `npm run dev` from the root folder. The sanity source plugin for Gatsby is set up with a read token and it renders all changes to your content in draft mode. This will not work for the deployed frontend at <#<deployments.web.url>#> however. That frontend is statically built from the published documents in your dataset, behaving like a static production website.

In order to have live previewing available outside of the `npm run dev` cycle you will have to set it up in one of several possible ways.

The easiest way would be to utilize [Gatsby Cloud](https://www.gatsbyjs.com/dashboard/sites/create). This will give you a deployment of the Gatsby web app set up to provide the same live preview as you have locally. A guide for setting this up can be found at https://www.gatsbyjs.com/docs/sanity/getting-started/. Note that this is a paid service from Gatsby.

A more involved way would be to containerize the Gatsby application and run that as `gatsby develop` either at a hosting provider like Google Kubernetes Engine or on your own infrastructure. An example Dockerfile is included in the web subfolder.

For the 'Web preview' tabs in the Studio editors to work with a remote live preview instance, please remember to update the `baseUrl` value in `studio/resolvePreviewUrl.js`.
