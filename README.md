# Invalid CSS SourceMap

## Reproduce steps

1. install deps
```bash
pnpm install
```

2. build project
```bash
pnpm build
```

3. validate css source map
```bash
pnpm validate-css # It will throw error  Error parsing mappings (code 1): the mappings contained a negative line, column, source index, or name index
```

4. validate js source map
```bash
pnpm validate-js # works as expected
```
