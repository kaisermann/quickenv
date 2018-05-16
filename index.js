const { resolve } = require('path')
const { existsSync } = require('fs')

/** Defaults process.env.NODE_ENV to 'development */
const NODE_ENV = (process.env.NODE_ENV = process.env.NODE_ENV || 'development')

const cwd = process.cwd()

let pkg = resolve(cwd, 'package.json')
pkg = existsSync(pkg) ? require(pkg) : null

module.exports = {
  CWD: cwd,
  fromCwd: (...paths) => resolve(cwd, ...paths),
  PKG: pkg,
  IS_PROD: NODE_ENV === 'production',
  IS_TEST: NODE_ENV === 'test',
  IS_DEV: NODE_ENV === 'development',
  IS_WATCHING:
    require.main.filename.includes('webpack-dev-server') ||
    require.main.filename.includes('webpack-serve') ||
    process.env.ROLLUP_WATCH
}
