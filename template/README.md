# Sanity Demo

_Fully customizable page builder and blog with a React.js front-end._

Deployed from [sanity.io/create](https://www.sanity.io/create?template=sanity-io%2Fsanity-template-kitchen-sink).

## What you have

- A blazing frontend of landing pages and a blog with [Gatsby.js](https://gatsbyjs.org)
- Structured content using [Sanity.io](https://www.sanity.io)
- Global deployment on [Netlify](https://netlify.com)

## Quick start

1. Clone this repository
2. `npm install` in the project root folder on local
3. `npm run dev` to start the studio and frontend locally
   - Your studio should be running on [http://localhost:3333](http://localhost:3333)
   - Your frontend should be running on [http://localhost:8000](http://localhost:8000)
4. `npm run build` to build to production locally

## Enable real-time content preview on development

1. Go to your [project’s API settings on manage.sanity.io](https://manage.sanity.io/projects/<#< sanity.projectId >#>/settings/api) and create a token with read rights.
2. Rename `.env.development.template` to `.env.development` and paste in the token: `SANITY_READ_TOKEN="yourTokenHere"`.
3. Restart the development server (`ctrl + C` and `npm run dev`).

If you want to turn off preview you can set `watchMode: false` in gatsby-config.js. If you just want to preview published changes you can set `overlayDrafts: false` in gatsby-config.js.

## Enable real-time preview outside of development

In order to have live previewing available outside of the `npm run dev` cycle you will have to set it up in one of several possible ways.

The easiest way would be to utilize [Gatsby Cloud](https://www.gatsbyjs.com/dashboard/sites/create). This will give you a deployment of the Gatsby web app set up to provide the same live preview as you have locally. A guide for setting this up can be found at https://www.gatsbyjs.com/docs/sanity/getting-started/. Note that this is a paid service from Gatsby.

A more involved way would be to containerize the Gatsby application and run that as `gatsby develop` either at a hosting provider like Google Kubernetes Engine or on your own infrastructure. An example Dockerfile is included in the web/ subfolder.

For the 'Web preview' tabs in the Studio editors to work with a remote live preview instance, please remember to update the `baseUrl` value in `studio/resolvePreviewUrl.js`.

## Deploy changes

Netlify automatically deploys new changes commited to master on GitHub. If you want to change deployment branch, do so in [build & deploy settings on Netlify](https://www.netlify.com/docs/continuous-deployment/#branches-deploys).

## Stuck? Get help

[![Slack Community Button](https://slack.sanity.io/badge.svg)](https://slack.sanity.io/)

Join [Sanity’s developer community](https://slack.sanity.io) or ping us [on twitter](https://twitter.com/sanity_io).
