const fs = require('fs')
const pkg = require('./package.json')
const svelte = require('rollup-plugin-svelte')
const postcss = require('postcss')
const customProperties = require('postcss-custom-properties')
const styleVars = require('./style-vars.json')

module.exports = {
  filename: '[name][suffix].modern.js',
  js: false,
  plugin: [
    svelte({
      css: handleCss
    })
  ]
}

function handleCss({ code, map }) {
  postcss({
    plugins: [
      customProperties({
        variables: styleVars,
        appendVariables: true
      })
    ]
  })
    .process(code, {
      from: false,
      map: {
        prev: map
      }
    })
    .then(({ css, map }) => {
      fs.writeFileSync(`dist/${pkg.name}.css`, css)
      fs.writeFileSync(`dist/${pkg.name}.css.map`, map)
    })
}
