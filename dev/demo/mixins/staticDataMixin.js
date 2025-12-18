// Mixin para usar datos locales en modo estático (GitHub Pages)
import { isStaticMode } from '../utils/staticMode.js';
import { generateMockData } from '../data/mockData.js';

export default {
  data() {
    const staticMode = isStaticMode();
    const modelName = this.$options.modelName || 'users';
    
    return {
      _staticMode: staticMode,
      _localData: staticMode ? generateMockData(modelName, 20) : [],
      _ajax: !staticMode,
      _apiUrl: staticMode ? "" : (this.$options.apiUrl || "http://localhost:3001/api")
    };
  },
  computed: {
    localData() {
      return this._localData;
    },
    ajax() {
      return this._ajax;
    },
    apiUrl() {
      return this._apiUrl;
    }
  }
};

