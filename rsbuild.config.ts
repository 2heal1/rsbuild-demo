import { defineConfig } from '@rsbuild/core';

export default defineConfig({
  output:{
    sourceMap:true,
    filename:{
      css:'index.css',
      js:'index.js'
    }
  },
});
