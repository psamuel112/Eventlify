<template>
  <div class="pagination-container">
    <div class="pagination-md">
      <a href="#" class="pagination-arrow" @click="newPage(pages.prev)">
        <img src="@/assets/svg/caret-left-black.svg" alt="" />
      </a>

      <p class="pagination-text">Page {{ currentPage }} of {{ maxPages }}</p>

      <a href="#" class="pagination-arrow" @click="newPage(pages.next)">
        <img src="@/assets/images/svg/caret-right-black.svg" alt="" />
      </a>
    </div>

    <div class="pagination-lg">
      <nav aria-label="Pagination" class="pagination">
        <a href="#" class="pagination-arrow" @click="newPage(pages.prev)">
          <div class="pagination-gap">
            <img src="@/assets/images/svg/caret-left-black.svg" alt="" />
          </div>
        </a>

        <div class="pagination-button-container">
          <span v-for="(n, i) in pages?.items" :key="i">
            <a
              href="#"
              class="pagination-page"
              :class="{ 'pagination-active': current === n }"
              @click="newPage(n)"
            >
              {{ n }}
            </a>
          </span>
        </div>

        <a href="#" class="pagination-arrow" @click="newPage(pages.next)">
          <div class="pagination-gap">
            <img src="@/assets/images/svg/caret-right-black.svg" alt="" />
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
      this.maxPages = Math.ceil(val / this.perPage);
      this.setPage();
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
      let items = [1];

      if (current === 1 && max === 1) return { current, prev, next, items };
      if (current > 4) items.push('…');

      let r = 2,
        r1 = current - r,
        r2 = current + r;

      for (let i = r1 > 2 ? r1 : 2; i <= Math.min(max, r2); i++) items.push(i);

      if (r2 + 1 < max) items.push('…');
      if (r2 < max) items.push(max);

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
