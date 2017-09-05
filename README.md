# eslint-config-gnat

[![npm version](https://badge.fury.io/js/eslint-config-gnat.svg)](http://badge.fury.io/js/eslint-config-gnat)

This package provides .eslintrc of Gnat-service as an extensible shared config. It bases on Airbnb's .eslintrc.

## Usage

### eslint-config-gnat

Our default export contains all of our ESLint rules, including ECMAScript 6+ and React. It requires `eslint`, `eslint-plugin-import`, `eslint-plugin-react`, and `eslint-plugin-jsx-a11y`.

If you use yarn, run `yarn add --dev eslint-plugin-import eslint-plugin-react eslint-plugin-jsx-a11y`, and see below for npm instructions.

1. Install the correct versions of each package, which are listed by the command:

  ```sh
  npm info "eslint-config-gnat@latest" peerDependencies
  ```

  Linux/OSX users can run

  ```sh
  (
    export PKG=eslint-config-gnat;
    npm info "$PKG@latest" peerDependencies --json | command sed 's/[\{\},]//g ; s/: /@/g' | xargs npm install --save-dev "$PKG@latest"
  )
  ```

  Which produces and runs a command like:

  ```sh
  npm install --save-dev eslint-config-gnat eslint@^#.#.# eslint-plugin-jsx-a11y@^#.#.# eslint-plugin-import@^#.#.# eslint-plugin-react@^#.#.#
  ```

  Windows users can either install all the peer dependencies manually, or use the [install-peerdeps](https://github.com/nathanhleung/install-peerdeps) cli tool.

  ```sh
  npm install -g install-peerdeps
  install-peerdeps --dev eslint-config-gnat
  ```

  The cli will produce and run a command like:

  ```sh
  npm install --save-dev eslint-config-gnat eslint@^#.#.# eslint-plugin-jsx-a11y@^#.#.# eslint-plugin-import@^#.#.# eslint-plugin-react@^#.#.#
  ```

2. Add `"extends": "gnat"` to your .eslintrc
