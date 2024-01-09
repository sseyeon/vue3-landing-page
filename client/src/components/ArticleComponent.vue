<template>
  <section class="mt-20">
    <!-- Heading -->
    <div class="container text-center" v-if="articleData">
      <h1 class="text-gray-400 font-semibold text-base">
        {{ categoryName }} | {{ articleData.createdAt }} |
        {{ articleData.createdAt }}
      </h1>
      <h1 class="mt-4 font-semibold text-3xl">
        {{ articleData.title }}
      </h1>
      <div class="mt-10 mb-12 text-center">
        <font-awesome-icon :icon="['fas', 'link']" />
      </div>
    </div>
    <div class="container mb-4">
      {{ articleData.content }}
      <!-- <img
        src="@/assets/images/2023-posters/2023_Poster_1.jpg"
        class="w-auto h-auto items-center rounded-lg mx-auto"
      /> -->
      <!-- <div class="mt-9 mb-9 space-y-4">
        <p>
          창원시는 23일 오전 시청 접견실에서 창원대학교, 경남대학교와 ‘빅데이터
          기반 지역 상생 발전을 위한 협약’을 체결했다. 이는 최근 4차
          산업혁명시대의 도래와 인공지능(AI) 및 빅데이터에 대한 사회적 관심이
          높아지고 있는 데 따른 것이다.
        </p>
        <p>
          협약식에는 허성무 시장, 이호영 창원대 총장, 강재관 경남대 산학부총장이
          참석했으며, 3개 기관이 손잡고 인재양성, 데이터 구축, 국비확보를 위한
          긴밀한 협력 관계를 구축하기로 약속했다.
        </p>
      </div> -->
    </div>
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
      if (this.articleData.category === "press") {
        return "보도자료"
      } else if (this.articleData.category === "announcement") {
        return "공지사항"
      }
      return "" // 혹은 기본값
    },
  },
}
</script>

<style>
</style>