# Blink SEO site
Gatsby build with headless WordPress backend.

CI with GitHub, the master branch controlling the live deployment.

## Getting started
You will need to have a local WordPress install setup as well as the wp-gatsby and wp-graphql plugins installed.

Make sure to have node 14 installed

If you have `nvm` install run

```bash
nvm use
```

to change it over to the correct version.

## Developing with Gatsby
Make sure you are in the Gatsby directory, that your localhost is running WordPress and add your graphql url to the `WPGRAPHQL_URL` in your `.env.development` file.  There is a fallback to `http://localhost/Blink/blinksite/wp/graphql` in case you forget this step.

Run `npm install` to install the dependencies.

* `npm run develop` - starts development with hot reloading on localhost:8000
* `npm run clean` - clears the local cache etc.
* `npm run build` - builds the files locally
* `npm run serve` - will serve a production build of the site locally on localhost:9000
* `npm run clean-develop` - clears the local cache and starts local development
* `npm run clean-build` - clears the local cache and builds the site

## Deploying to Netlify

To start with make sure to have the [Netlify cli](https://docs.netlify.com/cli/get-started/) installed

Move into the `/gatsby` directory

```bash
cd gatsby
```

Run

```bash
npm run build
```

or 

```bash
npm run clean-build
```

Then run 

```bash
netlify deploy
```

To generate a deploy preview that might look something like this:
<img width="564" alt="image" src="https://user-images.githubusercontent.com/23461173/165534930-73ef1729-f092-4bab-9f6c-702a9462f238.png">

If you are happy then run 

```bash
netlify deploy --prod
```

Which will push the updates to the live site.

