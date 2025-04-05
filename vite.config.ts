import react from '@vitejs/plugin-react';
import analyze from 'rollup-plugin-analyzer';
import {defineConfig} from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/',
  build: {
    rollupOptions: {
      plugins: [],
    },
    sourcemap: true,
    outDir: 'dist',
    assetsDir: 'assets',
  },
  plugins: [react(), tsconfigPaths()],
  server: {
    headers: {
      'Content-Type': 'application/javascript',
    },
  },
});
