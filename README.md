# Blink SEO site
Gatsby build with headless WordPress backend.

CI with GitHub, the master branch controlling the live deployment.

## Getting started
You will need to have a local WordPress install setup as well as the wp-gatsby and wp-graphql plugins installed.

## Developing with Gatsby
Make sure you are in the Gatsby directory, that your localhost is running WordPress and add your graphql url to the `WPGRAPHQL_URL` in your `.env.development` file.  There is a fallback to `http://localhost/Blink/blinksite/wp/graphql` in case you forget this step.

Run `npm install` to install the dependencies.

* `npm run develop` - starts development with hot reloading on localhost:8000
* `npm run clean` - clears the local cache etc.
* `npm run build` - builds the files locally
* `npm run serve` - will serve a production build of the site locally on localhost:9000
* `npm run clean-develop` - clears the local cache and starts local development
* `npm run clean-build` - clears the local cache and builds the site
