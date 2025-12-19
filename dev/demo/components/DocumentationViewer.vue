<template>
  <div class="documentation-viewer">
    <b-row>
      <!-- Sidebar con índice y búsqueda -->
      <b-col md="3" class="docs-sidebar">
        <div class="sticky-top" style="top: 20px;">
          <b-input-group class="mb-3">
            <b-form-input 
              v-model="searchQuery" 
              placeholder="Buscar en documentación..."
              @input="handleSearch"
            />
            <b-input-group-append>
              <b-button variant="outline-secondary" @click="clearSearch">
              <template v-if="searchQuery">×</template>
              <template v-else>🔍</template>
              </b-button>
            </b-input-group-append>
          </b-input-group>
          
          <nav class="docs-toc" v-if="tableOfContents.length > 0">
            <h6 class="toc-title">Índice</h6>
            <ul class="toc-list">
              <li 
                v-for="item in filteredTOC" 
                :key="item.id"
                :class="['toc-item', `toc-level-${item.level}`, { 'active': item.active, 'highlight': item.highlight }]"
              >
                <a 
                  :href="`#${item.id}`" 
                  @click.prevent="scrollToSection(item.id)"
                  class="toc-link"
                >
                  {{ item.text }}
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </b-col>
      
      <!-- Contenido principal -->
      <b-col md="9">
        <div 
          v-if="loading"
          class="text-center py-5"
        >
          <b-spinner variant="primary"></b-spinner>
          <p class="mt-2">Cargando documentación...</p>
        </div>
        
        <div 
          v-else
          class="docs-content" 
          v-html="renderedMarkdown"
          ref="content"
        />
        
        <div v-if="searchQuery && filteredTOC.length === 0" class="text-center py-5">
          <b-alert variant="info" show>
            No se encontraron resultados para "{{ searchQuery }}"
          </b-alert>
        </div>
      </b-col>
    </b-row>
  </div>
</template>

<script>
// Importar marked - requerido para renderizar markdown
import { marked } from 'marked';
import { documentationContent } from '../data/documentationContent.js';

export default {
  name: 'DocumentationViewer',
  data() {
    return {
      loading: true,
      markdownContent: '',
      renderedMarkdown: '',
      searchQuery: '',
      tableOfContents: [],
      activeSection: null,
      observer: null
    };
  },
  computed: {
    filteredTOC() {
      if (!this.searchQuery) {
        return this.tableOfContents;
      }
      
      const query = this.searchQuery.toLowerCase();
      return this.tableOfContents.filter(item => {
        // Buscar en el texto del encabezado
        if (item.text.toLowerCase().includes(query)) {
          return true;
        }
        
        // Buscar en el contenido de la sección
        const section = document.getElementById(item.id);
        if (section) {
          const sectionText = section.textContent.toLowerCase();
          if (sectionText.includes(query)) {
            item.highlight = true;
            return true;
          }
        }
        
        return false;
      });
    }
  },
  mounted() {
    this.loadDocumentation();
  },
  beforeDestroy() {
    if (this.observer) {
      this.observer.disconnect();
    }
  },
  methods: {
    async loadDocumentation() {
      try {
        this.loading = true;
        
        // Usar el contenido importado directamente
        this.markdownContent = documentationContent;
        
        // Configurar marked con opciones
        marked.setOptions({
          breaks: true,
          gfm: true,
          headerIds: true,
          headerPrefix: ''
        });
        
        // Renderizar markdown
        this.renderedMarkdown = marked(this.markdownContent);
        
        // Esperar a que Vue actualice el DOM
        await this.$nextTick();
        
        // Generar tabla de contenidos y agregar IDs a los encabezados
        this.generateTableOfContents();
        
        // Esperar un poco más para que el DOM esté completamente renderizado
        await this.$nextTick();
        
        // Esperar un poco más para que el DOM esté completamente renderizado
        await this.$nextTick();
        
        // Configurar scroll spy
        this.setupScrollSpy();
        
        // Configurar click listeners para enlaces internos
        this.setupInternalLinks();
        
        // Si hay un hash en la URL, navegar a esa sección
        if (window.location.hash) {
          const hash = window.location.hash.substring(1);
          setTimeout(() => {
            this.scrollToSection(hash);
          }, 300);
        }
        
        this.loading = false;
      } catch (error) {
        console.error('Error al cargar documentación:', error);
        this.loading = false;
      }
    },
    
    generateTableOfContents() {
      const content = this.$refs.content;
      if (!content) return;
      
      const headings = content.querySelectorAll('h1, h2, h3, h4');
      this.tableOfContents = [];
      
      headings.forEach((heading, index) => {
        // Generar ID único basado en el texto del encabezado
        const text = heading.textContent.trim();
        const id = this.slugify(text);
        
        // Si el heading ya tiene un ID (del markdown), usarlo
        const existingId = heading.id || id;
        heading.id = existingId;
        
        // Determinar el nivel del encabezado
        const level = parseInt(heading.tagName.charAt(1));
        
        this.tableOfContents.push({
          id: existingId,
          text: text,
          level: level,
          active: false,
          highlight: false
        });
      });
    },
    
    slugify(text) {
      return text
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '') // Eliminar acentos
        .replace(/[^\w\s-]/g, '') // Eliminar caracteres especiales
        .replace(/\s+/g, '-') // Reemplazar espacios con guiones
        .replace(/-+/g, '-') // Reemplazar múltiples guiones con uno solo
        .trim();
    },
    
    setupScrollSpy() {
      if (!window.IntersectionObserver) {
        // Fallback para navegadores que no soportan IntersectionObserver
        window.addEventListener('scroll', this.handleScroll);
        return;
      }
      
      // Crear observer para detectar qué sección está visible
      const options = {
        root: null,
        rootMargin: '-100px 0px -66%',
        threshold: 0
      };
      
      this.observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            this.setActiveSection(id);
          }
        });
      }, options);
      
      // Observar todos los encabezados
      this.$nextTick(() => {
        const content = this.$refs.content;
        if (content) {
          const headings = content.querySelectorAll('h1, h2, h3, h4');
          headings.forEach(heading => {
            this.observer.observe(heading);
          });
        }
      });
    },
    
    handleScroll() {
      const content = this.$refs.content;
      if (!content) return;
      
      const headings = Array.from(content.querySelectorAll('h1, h2, h3, h4'));
      const scrollPosition = window.scrollY + 200;
      
      let currentSection = null;
      
      for (let i = headings.length - 1; i >= 0; i--) {
        const heading = headings[i];
        const offsetTop = heading.offsetTop;
        
        if (scrollPosition >= offsetTop) {
          currentSection = heading.id;
          break;
        }
      }
      
      if (currentSection) {
        this.setActiveSection(currentSection);
      }
    },
    
    setActiveSection(id) {
      this.activeSection = id;
      
      // Actualizar estado activo en la tabla de contenidos
      this.tableOfContents.forEach(item => {
        item.active = item.id === id;
      });
    },
    
    scrollToSection(id) {
      const element = document.getElementById(id);
      if (element) {
        const offset = 100; // Offset para compensar navbar/sticky
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
        
        // Actualizar URL sin recargar
        window.history.pushState(null, '', `#${id}`);
      }
    },
    
    setupInternalLinks() {
      const content = this.$refs.content;
      if (!content) return;
      
      // Encontrar todos los enlaces internos (que empiecen con #)
      const links = content.querySelectorAll('a[href^="#"]');
      links.forEach(link => {
        link.addEventListener('click', (e) => {
          const href = link.getAttribute('href');
          if (href && href.startsWith('#')) {
            e.preventDefault();
            const id = href.substring(1);
            this.scrollToSection(id);
          }
        });
      });
    },
    
    handleSearch() {
      // La búsqueda se maneja mediante el computed filteredTOC
      // Los highlights se manejan mediante CSS y el estado highlight en los items
      if (this.searchQuery) {
        this.$nextTick(() => {
          // Scroll al primer resultado si hay búsqueda
          const firstResult = this.filteredTOC[0];
          if (firstResult) {
            this.scrollToSection(firstResult.id);
          }
        });
      }
    },
    
    clearSearch() {
      this.searchQuery = '';
      this.tableOfContents.forEach(item => {
        item.highlight = false;
      });
    }
  }
};
</script>

<style scoped>
.documentation-viewer {
  padding: 1rem 0;
}

.docs-sidebar {
  border-right: 1px solid #dee2e6;
  padding-right: 1.5rem;
}

.docs-toc {
  max-height: calc(100vh - 200px);
  overflow-y: auto;
  padding-right: 0.5rem;
}

.toc-title {
  font-size: 0.875rem;
  font-weight: 600;
  text-transform: uppercase;
  color: #6c757d;
  margin-bottom: 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid #dee2e6;
}

.toc-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.toc-item {
  margin-bottom: 0.25rem;
  line-height: 1.5;
}

.toc-link {
  display: block;
  padding: 0.375rem 0.75rem;
  color: #495057;
  text-decoration: none;
  border-radius: 0.25rem;
  font-size: 0.875rem;
  transition: all 0.2s ease;
  border-left: 3px solid transparent;
}

.toc-link:hover {
  color: #007bff;
  background-color: #f8f9fa;
  text-decoration: none;
  border-left-color: #007bff;
}

.toc-item.active .toc-link {
  color: #007bff;
  background-color: #e7f3ff;
  border-left-color: #007bff;
  font-weight: 500;
}

.toc-item.highlight .toc-link {
  background-color: #fff3cd;
}

.toc-level-1 .toc-link {
  font-weight: 600;
  padding-left: 0.75rem;
}

.toc-level-2 .toc-link {
  padding-left: 1.5rem;
  font-size: 0.875rem;
}

.toc-level-3 .toc-link {
  padding-left: 2.25rem;
  font-size: 0.8125rem;
  color: #6c757d;
}

.toc-level-4 .toc-link {
  padding-left: 3rem;
  font-size: 0.75rem;
  color: #6c757d;
}

.docs-content {
  padding: 0 1rem;
  max-width: 100%;
}

/* Estilos para el contenido markdown renderizado */
.docs-content ::v-deep h1 {
  font-size: 2rem;
  font-weight: 600;
  margin-top: 2rem;
  margin-bottom: 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid #dee2e6;
  color: #212529;
}

.docs-content ::v-deep h2 {
  font-size: 1.75rem;
  font-weight: 600;
  margin-top: 2rem;
  margin-bottom: 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid #dee2e6;
  color: #212529;
}

.docs-content ::v-deep h3 {
  font-size: 1.5rem;
  font-weight: 600;
  margin-top: 1.5rem;
  margin-bottom: 0.75rem;
  color: #495057;
}

.docs-content ::v-deep h4 {
  font-size: 1.25rem;
  font-weight: 600;
  margin-top: 1.25rem;
  margin-bottom: 0.5rem;
  color: #495057;
}

.docs-content ::v-deep p {
  margin-bottom: 1rem;
  line-height: 1.6;
  color: #212529;
}

.docs-content ::v-deep ul,
.docs-content ::v-deep ol {
  margin-bottom: 1rem;
  padding-left: 2rem;
}

.docs-content ::v-deep li {
  margin-bottom: 0.5rem;
  line-height: 1.6;
}

.docs-content ::v-deep code {
  background-color: #f8f9fa;
  border: 1px solid #e9ecef;
  border-radius: 0.25rem;
  padding: 0.125rem 0.375rem;
  font-size: 0.875em;
  font-family: 'Courier New', Courier, monospace;
  color: #e83e8c;
}

.docs-content ::v-deep pre {
  background-color: #f8f9fa;
  border: 1px solid #e9ecef;
  border-radius: 0.375rem;
  padding: 1rem;
  overflow-x: auto;
  margin-bottom: 1rem;
}

.docs-content ::v-deep pre code {
  background-color: transparent;
  border: none;
  padding: 0;
  color: #212529;
  font-size: 0.875rem;
  line-height: 1.6;
}

.docs-content ::v-deep blockquote {
  border-left: 4px solid #007bff;
  padding-left: 1rem;
  margin-left: 0;
  margin-bottom: 1rem;
  color: #6c757d;
  font-style: italic;
}

.docs-content ::v-deep table {
  width: 100%;
  margin-bottom: 1rem;
  border-collapse: collapse;
}

.docs-content ::v-deep table th,
.docs-content ::v-deep table td {
  padding: 0.75rem;
  border: 1px solid #dee2e6;
}

.docs-content ::v-deep table th {
  background-color: #f8f9fa;
  font-weight: 600;
  text-align: left;
}

.docs-content ::v-deep table tr:nth-child(even) {
  background-color: #f8f9fa;
}

.docs-content ::v-deep a {
  color: #007bff;
  text-decoration: none;
}

.docs-content ::v-deep a:hover {
  text-decoration: underline;
}

.docs-content ::v-deep hr {
  margin: 2rem 0;
  border: none;
  border-top: 1px solid #dee2e6;
}

.docs-content ::v-deep strong {
  font-weight: 600;
  color: #212529;
}

.docs-content ::v-deep em {
  font-style: italic;
}

.docs-content ::v-deep .search-highlight {
  background-color: #fff3cd;
  padding: 0.125rem 0.25rem;
  border-radius: 0.25rem;
  font-weight: 500;
}

/* Scrollbar personalizado para el TOC */
.docs-toc::-webkit-scrollbar {
  width: 6px;
}

.docs-toc::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 3px;
}

.docs-toc::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 3px;
}

.docs-toc::-webkit-scrollbar-thumb:hover {
  background: #555;
}

/* Responsive */
@media (max-width: 767.98px) {
  .docs-sidebar {
    border-right: none;
    border-bottom: 1px solid #dee2e6;
    padding-right: 0;
    padding-bottom: 1rem;
    margin-bottom: 1rem;
  }
  
  .docs-toc {
    max-height: 300px;
  }
  
  .docs-content {
    padding: 0;
  }
}
</style>

