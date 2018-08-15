# quickenv

> Does this even make sense? ¯\\_(ツ)_/¯

Quick common build workflow related environment data

```js
const {
  /** Quick helper for resolving paths from the cwd */
  fromCwd(...paths),
  /**
   * Get a path's package.json content (defaults to cwd).
   *
   * force:true - overwrites the cache
   * traverse: false - prevent search in parent directories
   *
   * It appends a "rootDir" to the returned object which contains the
   * directory path of the found package.json file.
   * */
  getPkg({ path, force, traverse }),
  /** Check for a production environment */
  IS_PROD(),
  /** Check for a test environment */
  IS_TEST(),
  /** Check for a development environment */
  IS_DEV(),
  /** Check for a watch flag Watching for common build tools */
  IS_WATCHING()
} = require('quickenv')
```
