# quickenv

> Does this even make sense? ¯\\_(ツ)_/¯

Quick common build workflow related environment data

```js
const {
  /** Current working directory */
  CWD,
  /** Quick helper for resolving paths from the cwd */
  fromCwd: (...paths) => resolve(CWD, ...paths),
  /** cwd's package.json */
  PKG,
  /** Production environment boolean */
  IS_PROD,
  /** Test environment boolean */
  IS_TEST,
  /** Development environment boolean */
  IS_DEV,
  /** Watching boolean for common build tools */
  IS_WATCHING
} = require('quickenv')

```
