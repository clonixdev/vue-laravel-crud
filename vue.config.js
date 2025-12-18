import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
  publicPath: process.env.NODE_ENV === 'production' 
    ? '/vue-laravel-crud/' // IMPORTANTE: Cambia esto por el nombre de tu repositorio en GitHub
    : '/',
  outputDir: 'docs', // GitHub Pages usa la carpeta 'docs'
  assetsDir: 'static',
  productionSourceMap: false,
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
      }
    }
  },
  chainWebpack: config => {
    // Configuración para GitHub Pages
    if (process.env.NODE_ENV === 'production') {
      config.plugin('html').tap(args => {
        args[0].title = 'Vue Laravel CRUD - Demo';
        return args;
      });
    }
  }
};
