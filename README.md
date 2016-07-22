# Standalone maintenance page with GDS style

## Dependencies

You will need:

- SASS
- Node.js & npm

## Setup

You need to install the dependencies:

```bash
npm install
```

## Build

To make a build and zip it ready for deployment, run: 

```bash
npm run build-zip
```

Now in the dist/ folder there will be standalone-maintenance.zip with all the assets.

If you want to check the build works, run:

```bash
npm run serve-dist
```

Now you can visit [127.0.0.1:3080](http://127.0.0.1:3080) to see the page


## Development

To create a build, run:

```bash
npm run build-dist
```

now to run it:

```bash
npm run serve-dev
```

Now you can visit [127.0.0.1:3080](http://127.0.0.1:3080) to see the page

In development it can be useful to have SASS watch the files for changes to build a new css file, simply run:

```bash
npm run sass-watch
```

## GOVUK Template

The GOVUK template will need to updated from time to time. Check [govuk_template](http://alphagov.github.io/govuk_template/) for the latest version. Have a look in package.json and see if "govuk-template-version" has a different version. If so, change the version and then run:

```bash
npm run check-template
```

The new template and assets will have been downloaded into govuk_template-<VERSION>. In that directory the html template will have been copied and prepared. Simply copy this file to src and update the content to match the current file: src/index.html
