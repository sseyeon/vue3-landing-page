<!-- src/components/Main.vue -->
<template>
  <section>
    <swiper
      :modules="modules"
      :slides-per-view="1"
      :space-between="0"
      :loop="true"
      :pagination="{ clickable: true }"
      :autoplay="{ delay: 3000, disableOnInteraction: false }"
      @swiper="onSwiper"
    >
      <swiper-slide v-for="(item, index) in items" :key="index">
        <!-- Slide Content -->
        <div
          class="h-screen w-full flex items-center justify-center bg-black text-white"
          :style="{ height: `calc(100vh - ${headerHeight}px)` }"
        >
          <div class="text-center">
            <h1 class="text-4xl font-bold mb-4" v-html="item.title"></h1>
            <p class="text-lg mb-4" v-html="item.description"></p>
            <div class="flex justify-center flex-wrap gap-2">
              <button type="button" class="btn btn-primary">
                {{ item.buttonText }}
              </button>
              <!-- <button type="button" class="btn btn-outline-primary">
                Review
              </button> -->
            </div>
          </div>
        </div>
      </swiper-slide>
    </swiper>
  </section>
</template>

<script>
// import Swiper core and required modules
import {
  Navigation,
  Pagination,
  Scrollbar,
  Autoplay,
  A11y,
} from "swiper/modules";

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";

export default {
  name: "Main",
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const onSwiper = (swiper) => {
      console.log(swiper);
    };
    const onSlideChange = () => {
      console.log("slide change");
    };

    // Assuming that headerHeight is a computed property or value that represents the header height
    const headerHeight = 60; // Replace this with the actual header height

    return {
      onSwiper,
      onSlideChange,
      headerHeight,
      modules: [Navigation, Pagination, Scrollbar, Autoplay, A11y],
    };
  },
  data() {
    return {
      items: [
        {
          image: require("@/assets/images/swipe-img-01.jpg"),
          title: "한국고용정보원, <br />‘빅리더 프로젝트 인턴십 프로그램’ 진행",
          description: "실무 중심 프로젝트로 경력개발 준비까지",
          buttonText: "보도자료 보기",
        },
        {
          image: require("@/assets/images/swipe-img-02.jpg"),
          title: "2023 빅리더 프로젝트 인턴십",
          description:
            "빅리더를 통해 전공자 뿐만 아니라  <br />비전공자인 문과생도 AI 분야에 원하는 좋은 취업을 하는 방법 🏄🏻‍♂️",
          buttonText: "영상 보기",
        },
        {
          image: require("@/assets/images/swipe-img-03.jpg"),
          title: "AI 취업 A to Z : 평범에서 비범으로",
          description: "2023 빅리더 토크콘서트",
          buttonText: "자세히 보기",
        },
      ],
    };
  },
};
</script>
