import { resolve } from 'path';
import { defineConfig } from 'vite';

// We need to read process.env since vite doesn't read
// env files before processing this ocnfig file and the
// meta variables are not available
const buildEnv = process.env.VLABS_BUILD_ENV || 'TEST';

const viteConfig = {
  PROD: {
    // plugins: [dts()],
    build: {
      lib: {
        entry: resolve(__dirname, './lib/main.js'),
        name: 'viteLibTemplate`',
        fileName: `vite-lib-template`
      }
    }
  },
  TEST: {
    // plugins: [dts()],
    build: {
      lib: {
        entry: resolve(__dirname, './lib/main.js'),
        name: 'viteLibTemplate`',
        fileName: `vite-lib-template`,
        base: '/vite-lib-template'
      }
    }
  },
  LOCAL: {
    // plugins: [dts()],
    build: {
      lib: {
        entry: resolve(__dirname, './lib/main.js'),
        name: 'viteLibTemplate`',
        fileName: `vite-lib-template`
      }
    }
  },
};

const currentConfig = viteConfig[buildEnv] || viteConfig['TEST'];

export default defineConfig(currentConfig);