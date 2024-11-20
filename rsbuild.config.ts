import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import {ModuleFederationPlugin} from '@module-federation/enhanced/rspack'
import { pluginCheckSyntax } from "@rsbuild/plugin-check-syntax";

export default defineConfig({
  plugins: [pluginReact(),pluginCheckSyntax()],
  tools:{
    rspack(config){
      config.optimization!.minimize= false;
      config.plugins!.push(new ModuleFederationPlugin({
        name:'cc',
        exposes:{
          '.':'./src/index.tsx'
        }
      }))
    }
  },
  source:{
    include:[/@module-federation\/runtime/]
  },
});
