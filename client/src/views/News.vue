<!-- src/views/News.vue -->
<template>
  <div>
    <Header />
    <TitleComponent
      titleText="News"
      subText=" 빠르게 전하는 정보, <br />빅리더의 소식을 놓치지 마세요!"
    />
    <Search />
    <!-- Tabs for different categories -->
    <div class="container mt-4 mb-8">
      <div class="flex justify-center space-x-4">
        <button
          @click="changeCategory('all')"
          :class="{ 'text-blue-500 ': activeCategory === 'all' }"
        >
          전체
        </button>
        <button
          @click="changeCategory('press')"
          :class="{ 'text-blue-500 ': activeCategory === 'press' }"
        >
          보도자료
        </button>
        <button
          @click="changeCategory('announcement')"
          :class="{
            'text-blue-500 ': activeCategory === 'announcement',
          }"
        >
          공지사항
        </button>
      </div>
    </div>
    <!-- Display news based on the selected category -->
    <div
      class="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-16 max-w-screen-lg mt-4 mb-16"
    >
      <PreviewCard
        v-for="newsItem in filteredNews"
        :key="newsItem.id"
        :news="newsItem"
        @article-click="redirectToArticle"
      />
    </div>
    <!-- Show message if there are no news for the selected category -->
    <div v-if="filteredNews.length === 0" class="container min-h-screen mt-16">
      <p class="text-center text-gray-600">등록된 글이 없습니다.</p>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/layout/Header.vue";
import TitleComponent from "@/components/TitleComponent.vue";
import Search from "@/components/Search.vue";
import Footer from "@/components/layout/Footer.vue";
import PreviewCard from "@/components/PreviewCard.vue";

export default {
  name: "News",
  components: {
    Header,
    TitleComponent,
    Search,
    Footer,
    PreviewCard,
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
  computed: {
    // 필터된 뉴스 데이터를 반환합니다.
    filteredNews() {
      if (this.activeCategory === "all") {
        return this.newsData;
      } else {
        // 선택된 카테고리에 따라 뉴스를 필터링합니다.
        return this.newsData.filter(
          (news) => news.category === this.activeCategory
        );
      }
    },
  },
  methods: {
    // 카테고리 변경 메서드
    changeCategory(category) {
      this.activeCategory = category;
    },
    // 리다이렉션을 처리할 메서드 추가
    redirectToArticle(newsId) {
      // Vue Router를 사용하여 해당 아티클 페이지로 이동합니다
      this.$router.push(`/article/${newsId}`);
    },
  },
};
</script>
<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>