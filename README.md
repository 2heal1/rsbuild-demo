## How to reproduce

Install the dependencies:

```bash
pnpm install
```

build

```bash
pnpm build
```

And the terminal will print the error message:
```
error   [@rsbuild/plugin-check-syntax] Find some syntax that does not match "ecmaVersion <= 2017":

  ERROR 1
  source:  /dist/static/js/cc.ee2631e0.js:1320:16
  reason:  'import' and 'export' may only appear at the top level (1320:16)
  code:    (!remoteEntryExports) {
                import(/* webpackIgnore: true */ entry).
```