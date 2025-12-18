<template>
  <div class="code-snippet-container">
    <b-card class="mt-4">
      <b-card-header class="d-flex justify-content-between align-items-center">
        <h6 class="mb-0">Código de Ejemplo</h6>
        <b-button 
          variant="outline-primary" 
          size="sm" 
          @click="copyToClipboard"
          :disabled="copied"
        >
          <b-icon-clipboard v-if="!copied"></b-icon-clipboard>
          <b-icon-check v-else></b-icon-check>
          {{ copied ? 'Copiado!' : 'Copiar' }}
        </b-button>
      </b-card-header>
      <b-card-body class="p-0">
        <pre class="code-block"><code ref="codeElement">{{ code }}</code></pre>
      </b-card-body>
    </b-card>
  </div>
</template>

<script>
export default {
  name: 'CodeSnippet',
  props: {
    code: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      copied: false
    };
  },
  methods: {
    async copyToClipboard() {
      try {
        await navigator.clipboard.writeText(this.code);
        this.copied = true;
        setTimeout(() => {
          this.copied = false;
        }, 2000);
      } catch (err) {
        // Fallback para navegadores que no soportan clipboard API
        const textArea = document.createElement('textarea');
        textArea.value = this.code;
        textArea.style.position = 'fixed';
        textArea.style.left = '-999999px';
        document.body.appendChild(textArea);
        textArea.select();
        try {
          document.execCommand('copy');
          this.copied = true;
          setTimeout(() => {
            this.copied = false;
          }, 2000);
        } catch (err) {
          console.error('Error al copiar:', err);
        }
        document.body.removeChild(textArea);
      }
    }
  }
};
</script>

<style scoped>
.code-snippet-container {
  margin-top: 1rem;
}

.code-block {
  margin: 0;
  padding: 1rem;
  background-color: #f8f9fa;
  border: 1px solid #dee2e6;
  border-radius: 0.25rem;
  overflow-x: auto;
  max-height: 600px;
  overflow-y: auto;
  font-family: 'Courier New', Courier, monospace;
  font-size: 0.875rem;
  line-height: 1.5;
  white-space: pre;
  word-wrap: normal;
}

.code-block code {
  color: #212529;
  background: transparent;
  padding: 0;
  font-size: inherit;
}

.card-header {
  background-color: #f8f9fa;
  border-bottom: 1px solid #dee2e6;
}
</style>

