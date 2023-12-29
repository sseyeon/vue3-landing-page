<template>
  <div class="w-screen h-screen flex">
    <!-- Side bar -->
    <Sidebar />
    <div class="w-full h-full bg-gray-400">
      <Header titleText="뉴스 게시판 관리" />
      <div class="h-[calc(100vh-50px)] bg-white p-6 overflow-auto">
        <div
          class="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-screen-lg mt-4 mb-4"
        >
          <div
            class="bg-white rounded-lg border border-[#e4e4e5] mb-4 relative overflow-hidden"
          >
            <div class="w-full flex justify-center items-center">
              <img src="https://picsum.photos/200/300" />
            </div>
          </div>
          <div
            class="bg-white rounded-lg border border-[#e4e4e5] mb-4 relative overflow-hidden"
          >
            <div class="w-full flex justify-center items-center">
              <img src="https://picsum.photos/200/300" />
            </div>
          </div>
        </div>
        <NewsEditor />

        <div class="flex justify-between items-center mb-4">
          <p>
            <font-awesome-icon
              :icon="['fas', 'fa-paper-plane']"
              class="text-blue-700 mr-2"
            />
            News 페이지의 컨텐츠를 관리할 수 있습니다.
          </p>
          <button class="btn btn-outline-primary btn-sm">+ 뉴스 추가</button>
        </div>
        <table class="min-w-full bg-white border border-gray-300 table-auto">
          <thead class="bg-gray-100">
            <tr>
              <th class="px-4 py-2 text-left text-gray-600">ID</th>
              <th class="px-4 py-2 text-left text-gray-600">카테고리</th>
              <th class="px-4 py-2 text-left text-gray-600">타이틀</th>
              <th class="px-4 py-2 text-left text-gray-600">컨텐츠</th>
              <th class="px-4 py-2 text-left text-gray-600">날짜</th>
              <th class="px-4 py-2 text-left text-gray-600">관리</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="news in newsData" :key="news.id">
              <td class="border px-3 py-1">{{ news.id }}</td>
              <td class="border px-3 py-1">{{ news.category }}</td>
              <td class="border px-3 py-1">{{ news.title }}</td>
              <td class="border px-3 py-1">
                {{ truncateText(news.content, 20) }}
              </td>
              <td class="border px-3 py-1">{{ news.createdAt }}</td>
              <td class="border px-3 py-1">
                <button
                  class="btn btn-sm btn-primary mr-2"
                  @click="editNews(news.id)"
                >
                  수정
                </button>
                <button
                  class="btn btn-sm btn-danger"
                  @click="deleteNews(news.id)"
                >
                  삭제
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
  
  <script>
import Sidebar from "@/components/layout/admin/Sidebar.vue";
import Header from "@/components/layout/admin/Header.vue";
import NewsEditor from "./NewsEditor.vue";
export default {
  name: "NewsManagement",
  components: {
    Sidebar,
    Header,
    // NewsEditor,
  },
  data() {
    return {
      // 실제 데이터로 대체해야 합니다.
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
      activeCategory: "all", // 현재 선택된 카테고리
    };
  },
  methods: {
    // 텍스트를 일정 길이로 자르는 메소드
    truncateText(text, maxLength) {
      if (text.length > maxLength) {
        return text.slice(0, maxLength) + "...";
      }
      return text;
    },
    async editNews(id) {
      // Logic to call PUT API
      const response = await fetch(`http://localhost:3000/news/${id}`, {
        method: "PUT",
        // Additional request configurations (headers, body, etc.)
      });
      // Handle the response
    },
    async deleteNews(id) {
      // Logic to call DELETE API
      const response = await fetch(`http://localhost:3000/news/${id}`, {
        method: "DELETE",
        // Additional request configurations (headers, body, etc.)
      });
      // Handle the response
    },
  },
};
</script>
  
  <style>
</style>