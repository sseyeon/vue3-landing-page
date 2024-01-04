<!-- src/components/MenuItem.vue -->
<template>
  <div
    class="relative"
    @click="handleMenuClick"
    v-click-outside="onClickOutside"
  >
    <router-link
      v-if="to && !submenu"
      :to="to"
      class="ml-4 px-2 py-1 text-gray-800 hover:text-blue-500"
      >{{ label }}</router-link
    >
    <span
      v-else
      class="ml-4 px-2 py-1 cursor-pointer text-gray-800 hover:text-blue-500"
      >{{ label }}</span
    >
    <div
      v-show="isSubmenuVisible"
      class="absolute top-full mt-2 bg-white border border-gray-300 rounded-lg z-10"
    >
      <!-- Submenu Content -->
      <router-link
        v-for="(subItem, subIndex) in submenu"
        :key="subIndex"
        :to="subItem.to"
        class="block py-2 px-4 text-gray-800 hover:text-blue-500 text-center"
      >
        {{ subItem.label }}
      </router-link>
    </div>
  </div>
</template>

<script>
import vClickOutside from "click-outside-vue3"

export default {
  props: {
    to: String,
    label: String,
    submenu: Array,
  },
  data() {
    return {
      isSubmenuVisible: false,
    }
  },
  directives: {
    clickOutside: vClickOutside.directive,
  },

  methods: {
    handleMenuClick() {
      if (this.label === "About BIGLEADER") {
        // About BIGLEADER 메뉴인 경우 드롭다운 토글
        this.isSubmenuVisible = !this.isSubmenuVisible
      } else if (this.label === "LMS") {
        // "LMS" 메뉴인 경우 naver.com으로 이동
        window.location.href = "https://bigleader.first10.co.kr/"
      } else if (this.to) {
        // 페이지 이동이 필요한 경우에만 페이지 이동
        this.$router.push(this.to)
      }
    },
    onClickOutside(event) {
      if (this.isSubmenuVisible) {
        this.isSubmenuVisible = false
      }
    },
  },
}
</script>
