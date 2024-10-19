<template>
  <div class="pagination-container">
    <div class="pagination-md">
      <a href="#" class="pagination-arrow" @click="newPage(pages.prev)">
        &#60;
      </a>

      <p class="pagination-text">Page {{ currentPage }} of {{ maxPages }}</p>

      <a href="#" class="pagination-arrow" @click="newPage(pages.next)">
        &#62;
      </a>
    </div>

    <div class="pagination-lg">
      <nav aria-label="Pagination" class="pagination">
        <a href="#" class="pagination-arrow" @click="newPage(pages.prev)">
          <div class="pagination-gap">
            &#60;
          </div>
        </a>
        <div class="pagination-button-container">
          <span v-for="(n, i) in pages?.items" :key="i">
            <a href="#" class="pagination-page" :class="{ 'pagination-active': current === n }" @click="newPage(n)">
              {{ n }}
            </a>
          </span>
        </div>

        <a href="#" class="pagination-arrow" @click="newPage(pages.next)">
          <div class="pagination-gap">
            &#62;
          </div>
        </a>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    currentPage: {
      type: Number,
      default: 1,
    },
    totalRecords: {
      type: Number,
      required: true,
    },
    perPage: {
      type: Number,
      default: 20,
    },
  },
  data() {
    return {
      from: 1,
      to: this.perPage,
      current: this.currentPage,
      maxPages: Math.ceil(this.totalRecords / this.perPage),
      pages: {},
    };
  },
  watch: {
    currentPage(val) {
      this.current = val;
      this.setPage(); // No need to recalculate maxPages here
    },
    totalRecords(val) {
      this.maxPages = Math.ceil(val / this.perPage);
      this.setPage();
    },
    perPage(val) {
      this.maxPages = Math.ceil(this.totalRecords / val);
      this.setPage();
    },
  },
  mounted() {
    setTimeout(() => {
      this.newPage(1);
    }, 100);
  },
  methods: {
    newPage(page) {
      if (page > 0 && page <= this.maxPages) {
        this.current = page;
        this.$emit('onchange', page);
        this.setPage();
      }
    },
    setPage() {
      this.from = this.perPage * (this.current - 1) + 1;
      const to = this.from + this.perPage - 1;
      this.to = to > this.totalRecords ? this.totalRecords : to;
      this.pages = this.paginate();
    },
    paginate() {
      const current = this.current;
      const max = this.maxPages;

      if (!current || !max) return null;

      let prev = current === 1 ? null : current - 1;
      let next = current === max ? null : current + 1;
      let items = [];

      // Always show the first page
      items.push(1);

      // If current page is greater than 4, show ellipsis after the first page
      if (current > 4) {
        items.push('…');
      }

      // Add pages around the current page, showing up to 2 pages before and after
      let rangeStart = Math.max(2, current - 2);
      let rangeEnd = Math.min(max - 1, current + 2);

      for (let i = rangeStart; i <= rangeEnd; i++) {
        items.push(i);
      }

      // If there's a gap between the last range and the max page, add ellipsis
      if (rangeEnd < max - 1) {
        items.push('…');
      }

      // Always show the last page if there's more than one page
      if (max > 1) {
        items.push(max);
      }

      return { current, prev, next, items };
    },
  },
};
</script>

<style scoped>
.pagination {
  display: flex;
}

.pagination-container {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.pagination-button-container {
  display: flex;
}

.pagination-md {
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.pagination-arrow {
  background-color: white;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 8px;
  text-decoration: none;
  margin: 0 8px;
}

.pagination-text {
  color: #344054;
  margin: 0 16px;
}

.pagination-lg {
  display: none;
}

.pagination-gap {
  display: flex;
  gap: 8px;
}

.pagination-page {
  display: block;
  padding: 5px 10px;
  /* margin: 10px 4px 0 4px; */
  margin-top: 4px;
  text-decoration: none;
  color: #344054;
  border-radius: 8px;
}

.pagination-active {
  background-color: #624cf5;
  color: white;
}

@media (min-width: 768px) {
  .pagination-md {
    display: none;
  }

  .pagination-lg {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
