<template>
  <div
    class="relative max-w-xs overflow-hidden rounded-2xl shadow-lg group cursor-pointer"
  >
    <img
      class="transition-transform group-hover:scale-110 duration-200"
      :src="'https://img.youtube.com/vi/' + review.vid + '/0.jpg'"
      alt=""
    />
    <div
      class="absolute inset-0 flex items-end bg-gradient-to-t from-black/60 to-transparent"
    >
      <div class="p-4 text-white">
        <div class="text-xl">
          {{ review.name }} <span class="text-sm">빅리더 9기</span>
        </div>
        <span class="font-bold">{{ review.title }}</span>
      </div>
    </div>
  </div>
</template>
  
  <script>
import CustomIconButtonVue from "./CustomIconButton.vue";

export default {
  name: "ReviewCard",
  components: {
    CustomIconButton: CustomIconButtonVue,
  },
  props: {
    review: Object, // 리뷰 정보를 받는 프로퍼티
  },
};
</script>
  
  <style scoped>
/* 추가적인 스타일링을 원하는 경우 여기에 작성하세요. */
</style>
  