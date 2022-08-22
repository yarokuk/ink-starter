# `ink-starter`

This is a starter project for [`ink`](https://github.com/vadimdemedes/ink).

## Usage

To use this starter for your new `ink` project, run the following command (replacing `your-app-name`):

```
npx degit yarokuk/ink-starter your-app-name
```

Then you can just `cd` into the created directory and run `yarn` (or `npm install`):

```
cd your-app-name
yarn
```

## Scripts

This starter comes with several npm scripts, here are the main ones:

- `build`: Build the app for production using [`esbuild`](https://esbuild.github.io/). A typecheck of the source code will be done before the build.
- `checks`: Run all the checks (typecheck, lint, prettier, and tests).
- `dev`: Run your app for development using `ts-node-dev`. If your app waits for user input, it will be restarted every time you make a change to your code. Otherwise, the app will exit after completion.
- `dev:hang`: Same as `dev` but will hang once the app exits. This is useful if your app exits after completion and you don't want to re-run it every time, but instead you want it to hang and restart after you make a change to your code.
- `dev:clear`: Same as `dev` but will clear the terminal every time your app is run.
- `dev:clear:hang`: Same as `dev:clear` and `dev:hang` combined.
- `lint`: Lint your code with [ESLint](https://eslint.org/).
- `prettier:check`: Check the formatting of your code with [Prettier](https://prettier.io/).
- `prettier`: Format your code with Prettier.
- `start`: Start the production app that was built with the `build` script.
- `test`: Run tests with [Jest](https://jestjs.io/).
- `typecheck`: Typecheck your source code and tests with [TypeScript](https://www.typescriptlang.org/).
