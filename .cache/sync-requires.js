const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-pages-contact-js": hot(preferDefault(require("/Users/israelagyeman-prempeh/Dev-Ops/wedding-website/src/pages/contact.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/israelagyeman-prempeh/Dev-Ops/wedding-website/src/pages/index.js"))),
  "component---src-pages-watch-js": hot(preferDefault(require("/Users/israelagyeman-prempeh/Dev-Ops/wedding-website/src/pages/watch.js")))
}

