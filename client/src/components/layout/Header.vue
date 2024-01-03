<!-- src/components/Header.vue -->
<template>
  <header
    class="border-b border-gray-300 sticky top-0 bg-white w-full z-10 transition-all"
  >
    <nav class="container flex items-start py-4 mt-2 md:mt-3">
      <div class="flex-1">
        <router-link to="/" class="inline-flex text-2xl font-bold text-gray-800"
          ><img class="h-8" src="@/assets/images/logon_bl.png"
        /></router-link>
      </div>
      <div class="hidden md:flex text-right">
        <MenuItem
          v-for="item in menuItems"
          :key="item.to"
          :to="item.to"
          :label="item.label"
          :submenu="item.submenu"
        />
      </div>
      <div class="flex md:hidden">
        <button
          @click="toggleMobileMenu"
          class="flex items-center px-2 py-2 rounded-full hover:bg-gray-200"
        >
          <svg
            class="fill-current h-4 w-4"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" fill="#000" />
          </svg>
        </button>
        <MobileMenu
          :menu-items="menuItems"
          v-if="mobileMenuOpen"
          @close="toggleMobileMenu"
        />
      </div>
    </nav>
  </header>
</template>

<script>
import MenuItem from "@/components/layout/MenuItem.vue"
import MobileMenu from "@/components/layout/MobileMenu.vue"

export default {
  name: "Header",
  data() {
    return {
      mobileMenuOpen: false,
      menuItems: [
        {
          to: "",
          label: "About BIGLEADER",
          submenu: [
            { to: "/about", label: "빅리더 소개" },
            { to: "/news", label: "뉴스" },
            { to: "/faq", label: "FAQ" },
          ],
        },
        { to: "/internship", label: "INTERNSHIP" },
        { to: "/projects", label: "PROJECT" },
        { to: "/instructors", label: "INSTRUCTOR" },
        { to: "/review", label: "REVIEW" },
        { to: "/apply", label: "APPLY" },
        { to: "", label: "LMS" },
      ],
    }
  },
  methods: {
    toggleMobileMenu() {
      this.mobileMenuOpen = !this.mobileMenuOpen
    },
  },
  components: {
    MenuItem,
    MobileMenu,
  },
}
</script>
