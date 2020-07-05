const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/israelagyeman-prempeh/Dev-Ops/wedding-website/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/israelagyeman-prempeh/Dev-Ops/wedding-website/src/pages/404.js"))),
  "component---src-pages-app-js": hot(preferDefault(require("/Users/israelagyeman-prempeh/Dev-Ops/wedding-website/src/pages/app.js"))),
  "component---src-pages-contact-js": hot(preferDefault(require("/Users/israelagyeman-prempeh/Dev-Ops/wedding-website/src/pages/contact.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/israelagyeman-prempeh/Dev-Ops/wedding-website/src/pages/index.js"))),
  "component---src-pages-thanks-js": hot(preferDefault(require("/Users/israelagyeman-prempeh/Dev-Ops/wedding-website/src/pages/thanks.js"))),
  "component---src-pages-watch-js": hot(preferDefault(require("/Users/israelagyeman-prempeh/Dev-Ops/wedding-website/src/pages/watch.js")))
}

