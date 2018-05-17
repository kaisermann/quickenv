const { resolve } = require('path')
const { existsSync, readFileSync } = require('fs')

/** Defaults process.env.NODE_ENV to 'development */
process.env.NODE_ENV = process.env.NODE_ENV || 'development'
const CWD = process.cwd()

module.exports = {
  CWD,
  fromCwd: (...paths) => resolve(CWD, ...paths),
  getPkg: (dir = CWD) => {
    let PKG = resolve(dir, 'package.json')
    return existsSync(PKG) ? JSON.parse(readFileSync(PKG)) : null
  },
  IS_PROD: () => process.env.NODE_ENV === 'production',
  IS_TEST: () =>
    process.env.NODE_ENV === 'test' ||
    process.env.NODE_ENV === 'testing' ||
    process.env.TEST,
  IS_DEV: () => process.env.NODE_ENV === 'development',
  IS_WATCHING: () =>
    !!(
      process.env.ROLLUP_WATCH ||
      require.main.filename.match(/webpack(-dev)?-server?/)
    )
}
