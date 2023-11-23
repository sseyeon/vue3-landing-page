<!-- src/components/Header.vue -->
<template>
  <header>
    <nav class="container flex items-start py-4 mt-2 sm:mt-3">
      <div class="flex-1">
        <router-link to="/" class="text-2xl font-bold text-gray-800"
          ><img class="h-8" src="../assets/images/logon_bl.png"
        /></router-link>
      </div>
      <div class="hidden sm:flex text-right">
        <MenuItem
          v-for="item in menuItems"
          :key="item.to"
          :to="item.to"
          :label="item.label"
        />
      </div>
      <div class="flex sm:hidden">
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
import MenuItem from "./MenuItem.vue";
import MobileMenu from "./MobileMenu.vue";

export default {
  name: "Header",
  data() {
    return {
      mobileMenuOpen: false,
      menuItems: [
        { to: "/about", label: "About BIGLEADER" },
        { to: "/projects", label: "PROJECT" },
        { to: "/instructors", label: "TEACHING" },
        { to: "/review", label: "REVIEW" },
        { to: "/apply", label: "APPLY" },
        { to: "/lms", label: "LMS" },
      ],
    };
  },
  methods: {
    toggleMobileMenu() {
      this.mobileMenuOpen = !this.mobileMenuOpen;
    },
  },
  components: {
    MenuItem,
    MobileMenu,
  },
};
</script>
