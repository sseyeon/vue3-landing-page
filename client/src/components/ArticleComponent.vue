<template>
  <section class="mt-20">
    <!-- Heading -->
    <div class="container text-center" v-if="articleData">
      <h1 class="text-gray-400 font-semibold text-base">
        {{ categoryName }} | {{ formattedCreatedAt }}
      </h1>
      <h1 class="mt-4 font-semibold text-3xl">
        {{ articleData.title }}
      </h1>
      <div class="mt-10 mb-12 text-center space-x-4 text-gray-600">
        <a :href="articleData.sourceLink" target="_blank"
          ><font-awesome-icon :icon="['fas', 'link']" /> 원문보기</a
        >
        <span class="cursor-pointer" @click="copyToClipboard"
          ><font-awesome-icon :icon="['fas', 'share-alt']" /> 공유하기</span
        >
      </div>
    </div>
    <div class="container mb-4" v-html="articleData.content"></div>
  </section>
</template>

<script>
export default {
  props: {
    articleData: {
      type: Object,
      required: true,
    },
  },
  computed: {
    categoryName() {
      // articleData.category에 의존하는 계산된 속성
      if (this.articleData.category === "press") {
        return "보도자료"
      } else if (this.articleData.category === "announcement") {
        return "공지사항"
      }
      return "" // 혹은 기본값
    },
    formattedCreatedAt() {
      if (this.articleData.createdAt) {
        const date = new Date(this.articleData.createdAt)
        const year = date.getFullYear()
        const month = ("0" + (date.getMonth() + 1)).slice(-2)
        const day = ("0" + date.getDate()).slice(-2)
        return `${year}.${month}.${day}`
      }
      return ""
    },
  },
  methods: {
    copyToClipboard() {
      const currentUrl = window.location.href
      navigator.clipboard
        .writeText(currentUrl)
        .then(() => {
          alert("주소가 복사되었습니다.")
        })
        .catch(err => {
          console.error("주소 복사에 실패했습니다:", err)
          alert("주소를 복사하는데 실패했습니다.")
        })
    },
  },
}
</script>
