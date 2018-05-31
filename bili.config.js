const pkg = require('./package.json')

const banner = `/*!
 * ${pkg.name} v${pkg.version}
 * ${pkg.homepage}
 *
 * @license
 * Copyright (c) 2018 ${pkg.author}
 * Released under the MIT license
 */`

module.exports = {
  input: `dist/${pkg.name}.es.modern.js`,
  moduleName: 'CalendarSet',
  banner
}
