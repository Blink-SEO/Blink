[![Netlify Status](https://api.netlify.com/api/v1/badges/5e3669ec-24fb-45bd-a60e-f53c8d6e2c1f/deploy-status)](https://app.netlify.com/sites/blinkseo/deploys)

# Blink SEO site
Gatsby build with headless WordPress backend.

CI with GitHub, the master branch controlling the live deployment.

## Getting started
Pull the master branch down to your dev environment and checkout a new branch called 'dev'.

## Developing with Gatsby
Move into the gatsby directory `cd gatsby`

Make sure your localhost is running and add your graphql url to the `WPGRAPHQL_URL` in your `.env.development` file.  There is a fallback to `http://localhost/Blink/blinksite/wp/graphql` in case you forget this step.

Run `npm install` to install the dependencies.

* `npm run develop` - starts development with hot reloading on localhost:8000
* `npm run clean` - clears the local cache etc.
* `npm run build` - builds the files locally
* `npm run serve` - will serve a production build of the site locally on localhost:9000
* `npm run clean-develop` - clears the local cache and starts local development
* `npm run clean-build` - clears the local cache and builds the site