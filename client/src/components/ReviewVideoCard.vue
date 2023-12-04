<template>
  <div
    class="relative max-w-xs overflow-hidden rounded-2xl shadow-lg group cursor-pointer"
    @click="openVideoPage"
  >
    <img
      class="transition-transform group-hover:scale-110 duration-200"
      :src="'https://img.youtube.com/vi/' + video.vid + '/0.jpg'"
      alt=""
    />
    <div
      class="absolute inset-0 flex items-end bg-gradient-to-t from-black/60 to-transparent"
    >
      <div class="p-4 text-white">
        <div class="text-xl">
          {{ video.name }}
          <span class="text-sm"> {{ video.year }}</span>
        </div>
        <span class="font-bold">{{ video.title }}</span>
      </div>
    </div>
  </div>
</template>
  
  <script>
import CustomIconButtonVue from "./CustomIconButton.vue";

export default {
  name: "videoCard",
  components: {
    CustomIconButton: CustomIconButtonVue,
  },
  props: {
    video: Object, // 리뷰 정보를 받는 프로퍼티
  },
  methods: {
    openVideoPage() {
      // video.id 대신 video.vid를 사용해야 합니다.
      const videoUrl = `https://www.youtube.com/watch?v=${this.video.vid}`;
      window.open(videoUrl, "_blank");
    },
  },
};
</script>
  
  <style scoped>
/* 추가적인 스타일링을 원하는 경우 여기에 작성하세요. */
</style>
  