const pkg = require('./package.json')
const svelte = require('rollup-plugin-svelte')

const banner = `/*!
 * ${pkg.name} v${pkg.version}
 * ${pkg.homepage}
 *
 * @license
 * Copyright (c) 2018 ${pkg.author}
 * Released under the MIT license
 */`

module.exports = {
  moduleName: 'CalendarSet',
  banner,
  plugin: [svelte()]
}
