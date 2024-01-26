<template>
  <div class="w-screen h-screen flex">
    <!-- Side bar -->
    <Sidebar />
    <div class="w-full h-full bg-gray-400">
      <Header titleText="뉴스 게시판 관리" />
      <div class="h-[calc(100vh-50px)] bg-white p-6 overflow-auto">
        <div class="container grid grid-cols-1 max-w-screen-lg mt-4 mb-4">
          <div
            class="bg-white rounded-lg border border-[#e4e4e5] mb-4 relative overflow-hidden"
          >
            <div class="w-full flex justify-center items-center">
              <img src="@/assets/images/bigleader-admin/news.png" />
            </div>
          </div>
        </div>
        <div class="flex justify-between items-center mb-4">
          <p>
            <font-awesome-icon
              :icon="['fas', 'fa-paper-plane']"
              class="text-blue-700 mr-2"
            />
            News 페이지의 컨텐츠를 관리할 수 있습니다.
          </p>
          <router-link to="/admin/news-management/add">
            <button class="btn btn-outline-primary btn-sm">+ 뉴스 추가</button>
          </router-link>
        </div>
        <Table
          :theadData="theadData"
          :tbodyData="truncatedNewsData"
          :displayedKeys="displayedKeys"
        >
          <template v-slot:manage="{ item }">
            <button
              class="btn btn-sm btn-primary mr-2"
              @click="editNews(item.id)"
            >
              수정
            </button>
            <button class="btn btn-sm btn-danger" @click="deleteNews(item.id)">
              삭제
            </button>
          </template>
        </Table>
      </div>
    </div>
  </div>
</template>
  
  <script>
import Sidebar from "@/components/layout/admin/Sidebar.vue"
import Header from "@/components/layout/admin/Header.vue"
import Table from "@/components/Table.vue"
import { truncateText } from "@/utils/utils.js"
// import Tiptap from "@/components/Tiptap.vue"
export default {
  name: "NewsManagement",
  components: {
    Sidebar,
    Header,
    Table,
    // Tiptap,
  },
  data() {
    return {
      theadData: ["ID", "카테고리", "타이틀", "컨텐츠", "날짜", "관리"],
      newsData: [],
      displayedKeys: ["id", "category", "title", "content", "createdAt"],
    }
  },
  computed: {
    truncatedNewsData() {
      return this.newsData.map(news => ({
        ...news,
        title: truncateText(news.content, 20), // 예시로 10글자로 제한
        content: truncateText(news.content, 30), // 예시로 100글자로 제한
      }))
    },
  },
  created() {
    this.fetchNewsData()
  },
  methods: {
    async fetchNewsData() {
      try {
        const response = await fetch(`${process.env.VUE_APP_API_URL}/article`)
        if (!response.ok) {
          throw new Error("Network response was not ok")
        }
        this.newsData = await response.json()
      } catch (error) {
        console.error("Fetch error:", error)
      }
    },
    // 텍스트를 일정 길이로 자르는 메소드
    truncateText(text, maxLength) {
      if (text.length > maxLength) {
        return text.slice(0, maxLength) + "..."
      }
      return text
    },
    async editNews(id) {
      // Logic to call PUT API
      const response = await fetch(
        `${process.env.VUE_APP_API_URL}/article/${id}`,
        {
          method: "PUT",
          // Additional request configurations (headers, body, etc.)
        }
      )
      // Handle the response
    },
    async deleteNews(id) {
      // Logic to call DELETE API
      try {
        const response = await fetch(
          `${process.env.VUE_APP_API_URL}/article/${id}`,
          {
            method: "DELETE",
            // Additional request configurations (headers, body, etc.)
          }
        )

        if (response.ok) {
          // 성공 처리
          alert("뉴스/공지사항이 성공적으로 삭제되었습니다.")
          window.location.reload()
          // 페이지 리디렉션 또는 상태 초기화 등
        } else {
          // 오류 처리
          alert("삭제에 실패했습니다: " + response.status)
        }
      } catch (error) {
        console.error("Fetch error:", error)
        alert("삭제 중 오류가 발생했습니다.")
      }
      // Handle the response
    },
  },
}
</script>
  
  <style>
</style>