<!-- src/componets/ReviewCard.vue  -->
<template>
  <section class="flex flex-col justify-center pt-4">
    <article
      class="flex md:flex-inherit rounded-lg relative overflow-hidden mb-8 flex-row my-custom-font"
    >
      <a class="contents relative max-w-xs overflow-hidden">
        <img
          :class="[
            'h-auto object-cover rounded-lg border-b-8 border-r-8 max-w-[170px] max-h-[170px]',
            {
              'border-[#C5E1DE]': review.id % 3 === 0,
              'border-gray-300': review.id % 3 === 1,
              'border-[#F5F5DC]': review.id % 3 === 2,
            },
          ]"
          :src="review.imgSrc"
          alt="review Image"
        />
      </a>
      <div class="relative flex flex-col p-4">
        <h1 class="text-xl font-semibold mb-1 max-w-fit border-b-2">
          {{ review.name }}
          <span class="text-base">{{ review.year }}</span>
        </h1>
        <p class="text-gray-600 font-semibold mb-2">
          {{ review.expertise }}
        </p>
        <div class="text-justify text-sm lg:max-h-72 md:max-h-60 overflow-auto">
          <p v-html="review.content"></p>
        </div>
      </div>
    </article>
  </section>
</template>
    
    <script>
export default {
  props: {
    review: Object, // 리뷰 정보를 받는 프로퍼티
  },
};
</script>
    
    <style scoped>
/* 추가된 부분: 이미지가 크기에 상관없이 모두 보이도록 설정 */
.contents img {
  /* max-width: 100%; 이미지의 최대 너비를 부모 요소에 맞게 설정 */
  height: auto; /* 이미지의 높이를 자동으로 조절하여 가로세로 비율 유지 */
}
/* 추가된 부분: 모바일 화면에서만 flex-wrap 적용 */
@media (max-width: 767px) {
  .flex-row {
    flex-wrap: wrap;
  }
}
/* Google Fonts에서 가져온 글자체를 사용하는 클래스 */
.my-custom-font {
  font-family: "Hahmlet", sans-serif; /* Hahmlet 글자체 적용 */
}
</style>
   
  <style>
/* Google Fonts에서 가져온 글자체 스타일 직접 추가 */
@import url("https://fonts.googleapis.com/css2?family=Hahmlet:wght@200;300;400;500;600&family=Open+Sans:wght@300;400;500;600;700&display=swap");
</style>