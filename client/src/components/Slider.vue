<template>
  <div class="slider">
    <swiper :options="swiperOptions">
      <swiper-slide v-for="(item, index) in items" :key="index">
        <SlideItem
          :imageSrc="item.imageSrc"
          :title="item.title"
          :description="item.description"
        />
      </swiper-slide>
    </swiper>
  </div>
</template>
  
  <script>
import { Swiper, SwiperSlide } from "swiper/vue";
import SwiperCore, { Navigation, Pagination } from "swiper/core";
import SlideItem from "./SlideItem.vue";

// Swiper core styles
import "swiper/core/style";

// Navigation, Pagination styles
import "swiper/core/components/navigation/navigation.min.css";
import "swiper/core/components/pagination/pagination.min.css";

SwiperCore.use([Navigation, Pagination]);

export default {
  name: "Slider",
  components: {
    Swiper,
    SwiperSlide,
    SlideItem,
  },
  data() {
    return {
      items: [
        {
          imageSrc: require("@/assets/images/swipe-img-01.jpg"),
          title: "Slide 1",
          description: "This is the first slide.",
        },
        {
          imageSrc: require("@/assets/images/swipe-img-01.jpg"),
          title: "Slide 2",
          description: "This is the second slide.",
        },
        // Add more items as needed
      ],
      swiperOptions: {
        navigation: true,
        pagination: {
          clickable: true,
        },
      },
    };
  },
};
</script>
  
  <style scoped>
/* Add custom styles for your slider if needed */
</style>
  