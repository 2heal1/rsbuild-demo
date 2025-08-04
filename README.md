# Incorrect Source Map

## reproduce steps

1. `pnpm i`
2. pnpm run build:bug

see dist/static/js/lib-router[hash].map file, the `sources` is `:["webpack://project/../history.ts","webpack://project/../utils.ts","webpack://project/./node_modules/.pnpm/react-router@6.30.1_react@19.1.1/node_modules/react-router/dist/index.js","webpack://project/./node_modules/.pnpm/react-router-dom@6.30.1_react-dom@19.1.1_react@19.1.1__react@19.1.1/node_modules/react-router-dom/dist/index.js","webpack://project/../router.ts"]`

3. pnpm run build:normal

see dist/static/js/lib-router[hash].map file, the `sources` is correct, includes the `node_modules` path