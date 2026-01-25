<template>
  <nav :aria-label="ariaLabel">
    <ul :class="paginationClasses">
      <li v-if="showFirst" class="page-item" :class="{ disabled: currentPage === 1 }">
        <a class="page-link" href="#" @click.prevent="goToPage(1)">{{ firstText }}</a>
      </li>
      <li class="page-item" :class="{ disabled: currentPage === 1 }">
        <a class="page-link" href="#" @click.prevent="goToPage(currentPage - 1)">{{ prevText }}</a>
      </li>
      
      <li
        v-for="page in pages"
        :key="page"
        class="page-item"
        :class="{ active: page === currentPage, disabled: page === '...' }"
      >
        <a
          v-if="page !== '...'"
          class="page-link"
          href="#"
          @click.prevent="goToPage(page)"
        >
          {{ page }}
        </a>
        <span v-else class="page-link">{{ page }}</span>
      </li>
      
      <li class="page-item" :class="{ disabled: currentPage === totalPages }">
        <a class="page-link" href="#" @click.prevent="goToPage(currentPage + 1)">{{ nextText }}</a>
      </li>
      <li v-if="showLast" class="page-item" :class="{ disabled: currentPage === totalPages }">
        <a class="page-link" href="#" @click.prevent="goToPage(totalPages)">{{ lastText }}</a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'BPagination',
  props: {
    value: {
      type: Number,
      default: 1
    },
    totalRows: {
      type: Number,
      required: true
    },
    perPage: {
      type: Number,
      default: 10
    },
    limit: {
      type: Number,
      default: 5
    },
    firstText: {
      type: String,
      default: 'First'
    },
    prevText: {
      type: String,
      default: 'Prev'
    },
    nextText: {
      type: String,
      default: 'Next'
    },
    lastText: {
      type: String,
      default: 'Last'
    },
    showFirst: {
      type: Boolean,
      default: false
    },
    showLast: {
      type: Boolean,
      default: false
    },
    ariaLabel: {
      type: String,
      default: 'Pagination'
    },
    size: {
      type: String,
      default: null,
      validator: (value) => !value || ['sm', 'lg'].includes(value)
    },
    align: {
      type: String,
      default: null,
      validator: (value) => !value || ['left', 'center', 'right'].includes(value)
    }
  },
  computed: {
    currentPage: {
      get() {
        return this.value;
      },
      set(val) {
        this.$emit('input', val);
        this.$emit('change', val);
      }
    },
    totalPages() {
      return Math.ceil(this.totalRows / this.perPage);
    },
    paginationClasses() {
      const classes = ['pagination'];
      
      if (this.size) {
        classes.push(`pagination-${this.size}`);
      }
      
      if (this.align === 'center') {
        classes.push('justify-content-center');
      } else if (this.align === 'right') {
        classes.push('justify-content-end');
      }
      
      return classes.join(' ');
    },
    pages() {
      const pages = [];
      const total = this.totalPages;
      const current = this.currentPage;
      const limit = this.limit;
      
      if (total <= limit) {
        for (let i = 1; i <= total; i++) {
          pages.push(i);
        }
      } else {
        let start = Math.max(1, current - Math.floor(limit / 2));
        let end = Math.min(total, start + limit - 1);
        
        if (end - start < limit - 1) {
          start = Math.max(1, end - limit + 1);
        }
        
        if (start > 1) {
          pages.push(1);
          if (start > 2) {
            pages.push('...');
          }
        }
        
        for (let i = start; i <= end; i++) {
          pages.push(i);
        }
        
        if (end < total) {
          if (end < total - 1) {
            pages.push('...');
          }
          pages.push(total);
        }
      }
      
      return pages;
    }
  },
  methods: {
    goToPage(page) {
      if (page >= 1 && page <= this.totalPages && page !== this.currentPage) {
        this.currentPage = page;
      }
    }
  }
};
</script>
