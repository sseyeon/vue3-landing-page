<!-- src/view/IntershipDetail.vue -->
<template>
  <Header />
  <div class="container max-w-screen-lg mt-10 mb-12" v-if="project">
    <section class="mt-20">
      <!-- Heading -->
      <div class="container text-center">
        <h1 class="text-gray-400 font-semibold text-base">
          {{ project.partner }}
        </h1>
        <h1 class="mt-4 font-semibold text-3xl">
          {{ project.project }}
        </h1>
        <div class="mt-10 mb-12 text-center">
          <font-awesome-icon :icon="['fas', 'link']" />
        </div>
      </div>
      <div class="container mb-4">
        <div v-if="project.additional_content1">
          <img
            :src="getImgSrc(project.additional_content1)"
            class="w-auto h-auto items-center rounded-lg mx-auto"
          />
        </div>
        <div v-if="project.additional_content2">
          <img
            :src="getImgSrc(project.additional_content2)"
            class="w-auto h-auto items-center rounded-lg mx-auto"
          />
        </div>
      </div>
    </section>
  </div>
  <Footer />
</template>
  
  <script>
import Header from "@/components/layout/Header.vue"
import Footer from "@/components/layout/Footer.vue"
export default {
  name: "InternshipDetail",
  components: {
    Header,
    Footer,
  },
  data() {
    return {
      project: {}, // 프로젝트 데이터를 저장할 속성
    }
  },
  created() {
    this.fetchProjectData()
  },
  methods: {
    async fetchProjectData() {
      const projectId = this.$route.params.id // URL에서 id 파라미터를 가져옴
      try {
        const response = await fetch(
          `http://localhost:3000/project/${projectId}`
        )
        // if (!response.ok) throw new Error("Failed to fetch project data")
        this.project = await response.json()
      } catch (error) {
        console.error("Error fetching project data:", error)
      }
    },
    getImgSrc(path) {
      return require(`@/assets/images/${path}`)
    },
  },
}
</script>
  
  <style>
</style>