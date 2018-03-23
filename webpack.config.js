const path = require('path')
const glob = require('glob')

const examplesBase = path.resolve(__dirname, 'examples')

function collectEntries() {
  const files = glob.sync('**/main.js', { cwd: examplesBase })
  const res = {}
  for (const file of files) {
    const dir = path.dirname(file)
    res[dir] = './' + file
  }
  return res
}

module.exports = {
  mode: 'development',
  context: examplesBase,
  entry: collectEntries(),
  output: {
    path: examplesBase,
    filename: '[name]/__build__.js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        loader: 'svelte-loader',
        options: {
          hotReload: true
        }
      }
    ]
  },
  devServer: {
    contentBase: examplesBase
  }
}
