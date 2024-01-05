<template>
  <div class="w-screen h-screen flex">
    <!-- Side bar -->
    <Sidebar />
    <div class="w-full h-full bg-gray-400">
      <Header titleText="신규 뉴스/공지사항 등록" />
      <div class="h-[calc(100vh-50px)] bg-white overflow-auto">
        <NewsEditor />
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from "@/components/layout/admin/Sidebar.vue"
import Header from "@/components/layout/admin/Header.vue"
import NewsEditor from "@/components/NewsEditor.vue"

export default {
  name: "NewsAdd",
  components: {
    Sidebar,
    Header,
    NewsEditor,
  },
}
</script>

<style>
</style>