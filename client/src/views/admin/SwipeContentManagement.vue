<template>
  <div class="w-screen h-screen flex">
    <!-- Side bar -->
    <Sidebar />
    <div class="w-full h-full bg-gray-400">
      <Header titleText="스와이프 컨텐츠 관리" />
      <div class="h-[calc(100vh-50px)] bg-white p-6 overflow-auto">
        <div class="container grid grid-cols-1 max-w-screen-lg mt-4 mb-4">
          <div
            class="bg-white rounded-lg border border-[#e4e4e5] mb-4 relative overflow-hidden"
          >
            <div class="w-full flex justify-center items-center">
              <img src="@/assets/images/bigleader-admin/swipe.png" />
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
            Main 페이지의 스와이프 컨텐츠를 관리할 수 있습니다.
          </p>
          <button class="btn btn-outline-primary btn-sm">+ 컨텐츠 추가</button>
        </div>
        <Table
          :theadData="theadData"
          :tbodyData="truncatedItems"
          :displayedKeys="displayedKeys"
        >
          <template v-slot:manage="{ item }">
            <button
              class="btn btn-sm btn-primary mr-2"
              @click="editItem(item.id)"
            >
              수정
            </button>
            <button class="btn btn-sm btn-danger" @click="deleteItem(item.id)">
              삭제
            </button>
          </template>
        </Table>
      </div>
    </div>
  </div>
</template>
    
    <script>
import Sidebar from "@/components/layout/admin/Sidebar.vue";
import Header from "@/components/layout/admin/Header.vue";
import Table from "@/components/Table.vue";
export default {
  name: "SwipeContentManagement",
  components: {
    Sidebar,
    Header,
    Table,
  },
  data() {
    return {
      theadData: [
        "ID",
        "타이틀",
        "소제목",
        "버튼 텍스트",
        "컨텐츠 링크",
        "배경 이미지",
        "관리",
      ],
      items: [
        {
          id: 1,
          image: require("@/assets/images/swipe-img-01.jpg"),
          title: "한국고용정보원, <br />‘빅리더 프로젝트 인턴십 프로그램’ 진행",
          description: "실무 중심 프로젝트로 경력개발 준비까지",
          buttonText: "보도자료 보기",
          link: "https://www.econonews.co.kr/news/articleView.html?idxno=302495",
        },
        {
          id: 2,
          image: require("@/assets/images/swipe-img-02.jpg"),
          title: "2023 빅리더 프로젝트 인턴십",
          description:
            "빅리더를 통해 전공자 뿐만 아니라  <br />비전공자인 문과생도 AI 분야에 원하는 좋은 취업을 하는 방법 🏄🏻‍♂️",
          buttonText: "영상 보기",
          link: "https://www.youtube.com/watch?v=RdlyNIsoyVs",
        },
        {
          id: 3,
          image: require("@/assets/images/swipe-img-03.jpg"),
          title: "AI 취업 A to Z : 평범에서 비범으로",
          description: "2023 빅리더 토크콘서트",
          buttonText: "자세히 보기",
          link: "https://www.youtube.com/watch?v=Ag2ratMpkdo",
        },
      ],
      displayedKeys: [
        "id",
        "title",
        "description",
        "buttonText",
        "link",
        "image",
      ],
    };
  },
  computed: {
    truncatedItems() {
      return this.items.map((item) => ({
        ...item,
        title: this.truncateText(item.title, 20),
        description: this.truncateText(item.description, 20),
      }));
    },
  },

  methods: {
    // 텍스트를 일정 길이로 자르는 메소드
    truncateText(text, maxLength) {
      if (text.length > maxLength) {
        return text.slice(0, maxLength) + "...";
      }
      return text;
    },
    async editItem(id) {
      // Logic to call PUT API
      const response = await fetch(`http://localhost:3000/news/${id}`, {
        method: "PUT",
        // Additional request configurations (headers, body, etc.)
      });
      // Handle the response
    },
    async deleteItem(id) {
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