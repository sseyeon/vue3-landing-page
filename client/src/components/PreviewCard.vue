<!-- NewsPreview.vue -->

<template>
  <div
    class="bg-white p-6 rounded-md border border-[#e4e4e5] group transition"
    @click="redirectToArticle"
  >
    <div class="group-hover:scale-105 transition duration-300 cursor-pointer">
      <!-- 기사 이미지 (예시: 이미지 주소를 실제 데이터로 대체해야 합니다) -->
      <img
        v-if="news.image"
        :src="news.image"
        alt="News Image"
        class="w-full h-40 object-cover mb-4 rounded-md"
      />

      <!-- 기사 제목 -->
      <h2 class="text-xl font-semibold text-gray-800 mb-2">{{ news.title }}</h2>

      <!-- 기사 내용 (예시: 내용이 너무 길면 적절히 자르거나 요약해야 합니다) -->
      <p class="text-gray-600 mb-4">{{ truncateText(news.content, 64) }}</p>

      <!-- 기사 링크 (예시: 기사의 실제 링크로 대체해야 합니다) -->
      <div class="flex justify-between flex-wrap gap-2 mb-2">
        <span class="text-gray-400">
          {{ news.category === "press" ? "보도자료" : "공지사항"
          }}<font-awesome-icon class="ml-2" :icon="['far', 'calendar']" />
          {{ news.createdAt }}
        </span>
      </div>
    </div>
  </div>
</template>
  
  <script>
export default {
  props: {
    news: {
      type: Object,
      required: true,
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
    redirectToArticle() {
      this.$emit("article-click", this.news.id);
    },
  },
};
</script>
  
  <style scoped>
/* 추가적인 스타일링이 필요하면 여기에 작성합니다. */
</style>
  