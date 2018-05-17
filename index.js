const { resolve } = require('path')
const { existsSync, readFileSync } = require('fs')

/** Defaults process.env.NODE_ENV to 'development */
process.env.NODE_ENV = process.env.NODE_ENV || 'development'

const CWD = process.cwd()
const PKGS_CACHE = new Map()

module.exports = {
  CWD,
  fromCwd: (...paths) => resolve(CWD, ...paths),
  getPkg: ({ path = CWD, force = false } = {}) => {
    if (!PKGS_CACHE.has(path) || force) {
      const pkgPath = resolve(path, 'package.json')
      if (!existsSync(pkgPath)) {
        return null
      }
      const pkgData = JSON.parse(readFileSync(pkgPath))
      PKGS_CACHE.set(path, pkgData)
    }
    return PKGS_CACHE.get(path)
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
