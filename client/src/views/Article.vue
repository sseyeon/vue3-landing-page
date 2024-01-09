<!-- src/views/Article.vue -->
<template>
  <div>
    <Header />
    <div class="container lg:w-9/12">
      <ArticleComponent :articleData="article" />
    </div>
    <Footer />
  </div>
</template>
        
        <script>
import Header from "@/components/layout/Header.vue"
import Footer from "@/components/layout/Footer.vue"
import ArticleComponent from "@/components/ArticleComponent.vue"

export default {
  name: "Article",
  components: {
    Header,
    Footer,
    ArticleComponent,
  },
  data() {
    return {
      article: {}, // 프로젝트 데이터를 저장할 속성
    }
  },
  created() {
    this.fetchArticleData()
  },
  methods: {
    async fetchArticleData() {
      const articleId = this.$route.params.id // URL에서 id 파라미터를 가져옴
      try {
        const response = await fetch(
          `${process.env.VUE_APP_API_URL}/article/${articleId}`
        )
        // if (!response.ok) throw new Error("Failed to fetch article data")
        this.article = await response.json()
      } catch (error) {
        console.error("Error fetching article data:", error)
      }
    },
    getImgSrc(path) {
      return require(`@/assets/images/${path}`)
    },
  },
}
</script>
        