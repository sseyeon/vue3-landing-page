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
    <div
      class="container mt-4 mb-8"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
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
      class="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 max-w-screen-lg mt-4 mb-16"
    >
      <PreviewCard
        v-for="newsItem in filteredNews"
        :key="newsItem.id"
        :news="newsItem"
        @article-click="redirectToArticle"
      />
    </div>
    <!-- Show message if there are no news for the selected category -->
    <div
      v-if="filteredNews.length === 0"
      class="container min-h-screen mt-16"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <p class="text-center text-gray-600">등록된 글이 없습니다.</p>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/layout/Header.vue"
import TitleComponent from "@/components/TitleComponent.vue"
import Search from "@/components/Search.vue"
import Footer from "@/components/layout/Footer.vue"
import PreviewCard from "@/components/PreviewCard.vue"

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
      newsData: [], // 뉴스 데이터를 저장할 속성
      activeCategory: "all", // 현재 선택된 카테고리
    }
  },
  computed: {
    // 필터된 뉴스 데이터를 반환합니다.
    filteredNews() {
      if (this.activeCategory === "all") {
        return this.newsData
      } else {
        // 선택된 카테고리에 따라 뉴스를 필터링합니다.
        return this.newsData.filter(
          news => news.category === this.activeCategory
        )
      }
    },
  },
  mounted() {
    this.fetchNewsData()
  },
  methods: {
    async fetchNewsData() {
      try {
        const response = await fetch(`${process.env.VUE_APP_API_URL}/article`)
        if (response.ok) {
          const data = await response.json()
          this.newsData = data // 데이터를 newsData에 저장합니다.
        } else {
          console.error("Error fetching news data:", response)
        }
      } catch (error) {
        console.error("Fetch error:", error)
      }
    },
    // 카테고리 변경 메서드
    changeCategory(category) {
      this.activeCategory = category
    },
    // 리다이렉션을 처리할 메서드 추가
    redirectToArticle(newsId) {
      // Vue Router를 사용하여 해당 아티클 페이지로 이동합니다
      this.$router.push(`/article/${newsId}`)
    },
  },
}
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