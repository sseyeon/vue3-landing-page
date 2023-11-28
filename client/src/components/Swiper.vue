<template>
  <div>
    <swiper :options="swiperOptions">
      <swiper-slide v-for="(item, index) in items" :key="index">
        {{ item }}
      </swiper-slide>
      <!-- Add more slides as needed -->
    </swiper>
  </div>
</template>
  
  <script>
import { Swiper, SwiperSlide } from "swiper/vue";

// Swiper core styles
import "swiper/swiper-bundle.css";

// Import Swiper styles
import "swiper/css";

// Swiper modules
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper/core";

// Install Swiper modules
SwiperCore.use([Navigation, Pagination, Autoplay]);

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      items: ["Slide 1", "Slide 2", "Slide 3"],
      swiperOptions: {
        // Swiper 옵션 설정
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        autoplay: {
          delay: 3000,
        },
      },
    };
  },
};
</script>
  
  <style>
/* 스타일링은 필요에 따라 추가할 수 있습니다. */
</style>
  