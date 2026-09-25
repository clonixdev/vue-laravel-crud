import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig(({ mode }) => ({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  // GitHub Pages usa el path del repositorio en producción
  base: mode === 'production' ? '/vue-laravel-crud/' : '/',
  build: {
    outDir: '../../docs',
    emptyOutDir: true,
    assetsDir: 'static',
    sourcemap: false,
  },
}));