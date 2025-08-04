import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';

const include = process.env.ADD_INCLUDE==='true' ? [/node_modules\/@remix-run\/router/] : [];


export default defineConfig({
  plugins: [pluginReact()],
  output:{
    sourceMap: true
  },
  source:{
    include
  }
});
