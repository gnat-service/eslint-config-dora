# eslint-config-dora

[![npm version](https://badge.fury.io/js/eslint-config-dora.svg)](http://badge.fury.io/js/eslint-config-dora)

This package provides .eslintrc of Dora's Dream as an extensible shared config. It bases on Airbnb's .eslintrc.

## Usage

### eslint-config-dora

Our default export contains all of our ESLint rules, including ECMAScript 6+ and React. It requires `eslint`, `eslint-plugin-import`, `eslint-plugin-react`, and `eslint-plugin-jsx-a11y`.

If you use yarn, run `yarn add --dev eslint-plugin-import eslint-plugin-react eslint-plugin-jsx-a11y`, and see below for npm instructions.

1. Install the correct versions of each package, which are listed by the command:

  ```sh
  npm info "eslint-config-dora@latest" peerDependencies
  ```

  Linux/OSX users can run

  ```sh
  (
    export PKG=eslint-config-dora;
    npm info "$PKG@latest" peerDependencies --json | command sed 's/[\{\},]//g ; s/: /@/g' | xargs npm install --save-dev "$PKG@latest"
  )
  ```

  Which produces and runs a command like:

  ```sh
  npm install --save-dev eslint-config-dora eslint@^#.#.# eslint-plugin-jsx-a11y@^#.#.# eslint-plugin-import@^#.#.# eslint-plugin-react@^#.#.#
  ```

  Windows users can either install all the peer dependencies manually, or use the [install-peerdeps](https://github.com/nathanhleung/install-peerdeps) cli tool.

  ```sh
  npm install -g install-peerdeps
  install-peerdeps --dev eslint-config-dora
  ```

  The cli will produce and run a command like:

  ```sh
  npm install --save-dev eslint-config-dora eslint@^#.#.# eslint-plugin-jsx-a11y@^#.#.# eslint-plugin-import@^#.#.# eslint-plugin-react@^#.#.#
  ```

2. Add `"extends": "dora"` to your .eslintrc
