import { defineConfig } from 'vite';
import svgr from '@svgr/rollup';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    svgr({ defaultExport: 'component', icon: true }),
    react({
      babel: {
        plugins: [
          '@emotion/babel-plugin',
          [
            '@emotion/babel-plugin-jsx-pragmatic',
            {
              export: 'jsx',
              import: '__cssprop',
              module: '@emotion/react',
            },
          ],
          'babel-plugin-twin',
          'babel-plugin-macros',
        ],
      },
      jsxImportSource: '@emotion/react',
    }),
  ],
  optimizeDeps: {
    esbuildOptions: {
      target: 'es2020',
      loader: {
        '.js': 'jsx',
        '.ts': 'tsx',
      },
    },
  },
  esbuild: {
    // https://github.com/vitejs/vite/issues/8644#issuecomment-1159308803
    logOverride: { 'this-is-undefined-in-esm': 'silent' },
  },
  build: {
    outDir: 'build',
  },
});
