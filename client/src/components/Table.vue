<template>
  <table class="min-w-full bg-white border border-gray-300 table-auto">
    <thead class="bg-gray-100">
      <tr>
        <th
          v-for="(header, index) in theadData"
          :key="index"
          class="px-4 py-2 text-left text-gray-600"
        >
          {{ header }}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-if="paginatedData.length === 0">
        <td :colspan="theadData.length + 1" class="py-2 px-4 text-center">
          등록된 데이터가 없습니다.
        </td>
      </tr>
      <tr v-else v-for="item in paginatedData" :key="item.id">
        <td v-for="key in displayedKeys" :key="key" class="border px-3 py-1">
          {{ item[key] }}
        </td>
        <td class="border px-3 py-1">
          <slot name="manage" :item="item"></slot>
        </td>
      </tr>
    </tbody>
  </table>
  <!-- 페이징 컨트롤 -->
  <div class="flex justify-center mt-4">
    <button
      v-for="page in pageCount"
      :key="page"
      class="px-3 py-1 rounded-full mx-1 font-thin"
      :class="{ 'bg-gray-100': page === currentPage }"
      @click="currentPage = page"
    >
      {{ page }}
    </button>
  </div>
</template>
  
<script>
export default {
  props: {
    theadData: {
      type: Array,
      required: true,
    },
    tbodyData: {
      type: Array,
      required: true,
    },
    displayedKeys: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      currentPage: 1,
      itemsPerPage: 10,
    };
  },
  computed: {
    paginatedData() {
      const start = (this.currentPage - 1) * this.itemsPerPage;
      const end = start + this.itemsPerPage;
      return this.tbodyData.slice(start, end);
    },
    pageCount() {
      return Math.ceil(this.tbodyData.length / this.itemsPerPage);
    },
  },
};
</script>

<style>
</style>