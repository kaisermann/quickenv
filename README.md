# quickenv

> Does this even make sense? ¯\\_(ツ)_/¯

Quick common build workflow related environment data

```js
const {
  /** Current working directory */
  CWD,
  /** Quick helper for resolving paths from the cwd */
  fromCwd(...paths),
  /** Get a path's package.json content (defaults to cwd). force:true overwrites the cache */
  getPkg({path, force}),
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
