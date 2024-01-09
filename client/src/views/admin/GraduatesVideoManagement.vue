<template>
  <div class="w-screen h-screen flex">
    <!-- Side bar -->
    <Sidebar />
    <div class="w-full h-full bg-gray-400">
      <Header titleText="수료생 후기 관리(수기)" />
      <div class="h-[calc(100vh-50px)] bg-white p-6 overflow-auto">
        <div class="container grid grid-cols-1 max-w-screen-lg mt-4 mb-4">
          <div
            class="bg-white rounded-lg border border-[#e4e4e5] mb-4 relative overflow-hidden"
          >
            <div class="w-full h-full flex justify-center items-center">
              <img
                src="@/assets/images/bigleader-admin/review-video.png"
                class="max-h-full object-cover"
              />
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
            수료생 후기를 관리할 수 있습니다.
          </p>
          <button class="btn btn-outline-primary btn-sm">+ 후기 추가</button>
        </div>
        <Table
          :theadData="theadData"
          :tbodyData="videoData"
          :displayedKeys="displayedKeys"
        >
          <template v-slot:manage="{ videoData }">
            <button
              class="btn btn-sm btn-primary mr-2"
              @click="editNews(videoData.id)"
            >
              수정
            </button>
            <button
              class="btn btn-sm btn-danger"
              @click="deleteNews(videoData.id)"
            >
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
export default {
  name: "GraduatesVideoManagement",
  components: {
    Sidebar,
    Header,
    Table,
  },
  data() {
    return {
      theadData: ["ID", "이름", "기수", "제목", "vid", "관리"],
      videoData: [
        {
          id: 1,
          title: "지식이 남들보다 뒤쳐지는 상황에서!",
          year: "빅리더 9기",
          name: "공희배",
          vid: "Tr_uhyAi-Lw",
          link: "https://www.youtube.com/watch?v=Tr_uhyAi",
        },
        {
          id: 2,
          title: "흔치 않은 기회에요.",
          year: "빅리더 9기",
          name: "김예은",
          vid: "3IbVYqZ5vts",
          link: "https://www.youtube.com/watch?v=3IbVYqZ5vts",
        },
        {
          id: 3,
          title: "오직 프로젝트에 집중했어요!",
          year: "빅리더 9기",
          name: "문현석",
          vid: "V_dFzf2VtQM",
          link: "https://example.com/news1",
        },
        {
          id: 4,
          title: "면접에서 어필 할 수 있는 방법",
          year: "빅리더 9기",
          name: "최가영",
          vid: "Sv-IPnEU5AY",
          link: "https://www.youtube.com/watch?v=Tr_uhyAi",
        },
        {
          id: 5,
          title: "밤 낮으로 매진했어요",
          year: "빅리더 9기",
          name: "최은정",
          vid: "e6nPhvUgfF4",
          link: "https://www.youtube.com/watch?v=3IbVYqZ5vts",
        },
        {
          id: 6,
          title: "나만의 무기를 갖는 법",
          year: "빅리더 9기",
          name: "주세현",
          vid: "kP8fxMZFeGc",
          link: "https://example.com/news1",
        },
      ],
      displayedKeys: ["id", "name", "year", "title", "vid"],
    }
  },

  methods: {
    async editItem(id) {
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
    async deleteItem(id) {
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