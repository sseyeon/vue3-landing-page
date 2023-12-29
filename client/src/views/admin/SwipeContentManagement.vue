<template>
  <div class="w-screen h-screen flex">
    <!-- Side bar -->
    <Sidebar />
    <div class="w-full h-full bg-gray-400">
      <Header titleText="스와이프 컨텐츠 관리" />
      <div class="h-[calc(100vh-50px)] bg-white p-6">menu</div>
    </div>
  </div>
</template>
    
    <script>
import Sidebar from "@/components/layout/admin/Sidebar.vue";
import Header from "@/components/layout/admin/Header.vue";
export default {
  name: "SwipeContentManagement",
  components: {
    Sidebar,
    Header,
  },
};
</script>
    
    <style>
</style>