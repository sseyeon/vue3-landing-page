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
      newsData: [
        {
          id: 1,
          category: "press",
          createdAt: "2021-09-23",
          title: "창원시, 창원대·경남대와 빅데이터 상생발전 협약 체결",
          content:
            "창원시는 23일 오전 시청 접견실에서 창원대학교, 경남대학교와 ‘빅데이터 기반 지역 상생 발전을 위한 협약’을 체결했다. 이는 최근 4차 산업혁명시대의 도래와 인공지능(AI) 및 빅데이터에 대한 사회적 관심이 높아지고 있는 데 따른 것이다.",
          image:
            "https://www.gnnews.co.kr/news/photo/202108/481467_268480_4052.jpg",
          link: "https://example.com/news1",
        },
        {
          id: 2,
          category: "press",
          createdAt: "2021-09-23",
          title:
            "전국의 혁신 인재 창원에 모여, AI 기술로 다양한 분야 문제 해결",
          content:
            "창원시는 지난 8월 30일 한려해상생태탐방원에서 경남대학교와 ‘빅 챌린지 경연 대회’를 개최하고 산업 전반의 혁신을 주도하고 국가 경쟁력의 원천이 될 데이터 청년 인재 양성을 위해 추진한 ‘창원 빅리더 AI 아카데미’를 마무리했다.",
          image:
            "http://www.gndomin.com/news/photo/202109/287757_281159_4834.jpg",
          link: "http://www.gndomin.com/news/photo/202109/287757_281159_4834.jpg",
        },
        {
          id: 3,
          category: "announcement",
          createdAt: "2021-09-23",
          title: "2024 빅리더 모집",
          content: "[모집공고] 2024년 창원시 빅리더 아카데미 2기 모집 안내",
          image: "https://i.ytimg.com/vi/RdlyNIsoyVs/maxresdefault.jpg",
          link: "http://www.gndomin.com/news/photo/202109/287757_281159_4834.jpg",
        },
      ],
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
        const response = await fetch(`${process.env.VUE_APP_API_URL}/news`)
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
        `${process.env.VUE_APP_API_URL}/news/${id}`,
        {
          method: "PUT",
          // Additional request configurations (headers, body, etc.)
        }
      )
      // Handle the response
    },
    async deleteNews(id) {
      // Logic to call DELETE API
      const response = await fetch(
        `${process.env.VUE_APP_API_URL}/news/${id}`,
        {
          method: "DELETE",
          // Additional request configurations (headers, body, etc.)
        }
      )
      // Handle the response
    },
  },
}
</script>
  
  <style>
</style>