const { resolve } = require('path')
const { existsSync, readFileSync } = require('fs')

/** Defaults process.env.NODE_ENV to 'development */
const NODE_ENV = (process.env.NODE_ENV = process.env.NODE_ENV || 'development')
const CWD = process.cwd()

let PKG = resolve(CWD, 'package.json')
PKG = existsSync(PKG) ? JSON.parse(readFileSync(PKG)) : null

module.exports = {
  CWD,
  fromCwd: (...paths) => resolve(CWD, ...paths),
  PKG,
  IS_PROD: NODE_ENV === 'production',
  IS_TEST: NODE_ENV === 'test',
  IS_DEV: NODE_ENV === 'development',
  IS_WATCHING: !!(
    /** Catches rollup */
    process.env.ROLLUP_WATCH ||
    /** Catches webpack-dev-server and webpack-serve */
    require.main.filename.match(/webpack(-dev)?-server?/)
  )
}
