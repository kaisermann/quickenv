const { resolve, dirname } = require('path')
const { existsSync, readFileSync } = require('fs')
const findUp = require('find-up')

/** Defaults process.env.NODE_ENV to 'development */
process.env.NODE_ENV = process.env.NODE_ENV || 'development'

const PKGS_CACHE = new Map()

module.exports = {
  fromCwd: (...paths) => resolve(process.cwd(), ...paths),
  getPkg: ({ path = process.cwd(), force = false, traverse = true } = {}) => {
    if (!PKGS_CACHE.has(path) || force) {
      const pkgPath = traverse
        ? findUp.sync('package.json', { cwd: path })
        : resolve(path, 'package.json')

      if (!existsSync(pkgPath)) {
        return null
      }

      const pkgData = JSON.parse(readFileSync(pkgPath))
      pkgData.rootDir = dirname(pkgPath)
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
