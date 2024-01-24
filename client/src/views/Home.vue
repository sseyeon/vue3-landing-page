<!-- src/views/Home.vue -->
<template>
  <div>
    <Header />
    <section class="section">
      <div
        class="h-screen w-full flex items-center justify-center bg-zinc-900/50 text-white"
        :style="{ height: `calc(100vh - ${headerHeight}px)` }"
      >
        <div class="text-center">
          <div
            class="flex justify-center flex-wrap gap-4 mb-6 border-bottom-center"
          >
            BIG LEADER
          </div>
          <h1 class="text-5xl font-semibold mb-4">평범에서 비범으로</h1>
          <p class="mb-4">선한 영향력과 혁신으로 세상을 이롭게 합니다.</p>
        </div>
      </div>
    </section>
    <section class="section">
      <div
        class="h-screen w-full flex items-center justify-center bg-zinc-900/70 text-white"
        data-aos="fade-up"
        data-aos-duration="1000"
        :style="{
          height: `calc(100vh - ${headerHeight}px)`,
          backgroundImage:
            'url(' + require('@/assets/images/main-business-01.jpg') + ')',
          backgroundSize: 'cover', // 또는 'contain'에 따라
          backgroundPosition: 'center', // 필요에 따라 조정
          opacity: 0.5,
          zIndex: -1,
        }"
      >
        <div class="text-center">
          <div
            class="flex justify-center flex-wrap gap-4 mb-6 border-bottom-center uppercase"
          >
            Business
          </div>
          <h1 class="text-5xl font-semibold mb-4">빅리더의 혁신 가드닝 HUB</h1>
          <p class="mb-4">
            빅리더는 다양한 이해관계자들 간의 유기적인 협력을<br />
            잇(IT)는 혁신 가드닝 허브 역할을 제공합니다.
          </p>
          <div
            class="flex justify-center flex-wrap mt-16 gap-10"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <div>
              <span class="text-3xl m-2"
                ><font-awesome-icon :icon="['fas', 'user']"
              /></span>
              <h3 class="mb-2 text-lg mt-2">
                청년에게는<br />
                변화와 성장을
              </h3>
            </div>
            <div>
              <span class="text-3xl m-2"
                ><font-awesome-icon :icon="['fas', 'building']"
              /></span>
              <h3 class="mb-2 text-lg mt-2">기업에게는<br />성과를</h3>
            </div>
            <div>
              <span class="text-3xl m-2"
                ><font-awesome-icon :icon="['fas', 'graduation-cap']"
              /></span>
              <h3 class="mb-2 text-lg mt-2">대학에게는<br />실적과 역량을</h3>
            </div>
            <div>
              <span class="text-3xl m-2"
                ><font-awesome-icon :icon="['fas', 'location-dot']"
              /></span>
              <h3 class="mb-2 text-lg mt-2">지자체에는<br />성공 모델을</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="section">
      <div
        class="h-screen w-full flex items-center justify-center text-black"
        data-aos="fade-up"
        data-aos-duration="1000"
        :style="{
          height: `calc(100vh - ${headerHeight}px)`,
          backgroundImage:
            'url(' + require('@/assets/images/main-esg-02.jpg') + ')',
          backgroundSize: 'cover', // 또는 'contain'에 따라
          backgroundPosition: 'center', // 필요에 따라 조정
          opacity: 0.5,
          zIndex: -1,
        }"
      >
        <div class="text-center">
          <div
            class="flex justify-center flex-wrap gap-4 mb-6 border-bottom-center"
          >
            ESG
          </div>
          <h1 class="text-5xl font-semibold mb-4">
            지역 특화 AI 혁신 생태계 조성
          </h1>
          <p class="text-lg mb-4">
            2022년 최우수 동반성장 기업으로,<br />지역소멸 인구감소에 대한
            실질적인 솔루션을 제공하고 지역 특화 AI 혁신생태계 조성에
            기여합니다.
          </p>
        </div>
      </div>
    </section>
    <section class="section">
      <div
        class="h-screen w-full flex items-center justify-center text-white"
        data-aos="fade-up"
        data-aos-duration="1000"
        :style="{
          height: `calc(100vh - ${headerHeight}px)`,
          backgroundImage: 'url(' + require('@/assets/images/sub-1.jpg') + ')',
        }"
      >
        <div class="text-center">
          <div
            class="flex justify-center flex-wrap gap-4 mb-6 border-bottom-center"
          >
            MEDIA
          </div>
          <h1 class="text-5xl font-semibold mb-4">
            빅리더의 새로운 소식을 만나보세요.
          </h1>
          <div
            class="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-4 max-w-screen-lg mt-12"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <div>
              <span class="text-3xl m-2"
                ><font-awesome-icon :icon="['far', 'pen-to-square']"
              /></span>
              <h3 class="mb-2 text-lg mt-2">자주 묻는 질문</h3>
            </div>
            <div>
              <span class="text-3xl m-2"
                ><font-awesome-icon :icon="['far', 'pen-to-square']"
              /></span>
              <h3 class="mb-2 text-lg mt-2">새소식<br />보러가기</h3>
            </div>
            <div>
              <span class="text-3xl m-2"
                ><font-awesome-icon :icon="['far', 'pen-to-square']"
              /></span>
              <h3 class="mb-2 text-lg mt-2">지원하기</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
    <Footer />
  </div>
</template>
  
  <script>
import Header from "@/components/layout/Header.vue"
import Main from "@/components/Main.vue"
import VideoList from "@/components/VideoList.vue"
import Enterprise from "@/components/EnterpriseCard.vue"
import EnterPriseList from "@/components/EnterpriseList.vue"
import ReviewVideoCard from "@/components/ReviewVideoCard.vue"
import ScheduleCard from "@/components/ScheduleCard.vue"
import EductionProgram from "@/components/EductionProgram.vue"
import FAQ from "@/components/FAQ.vue"
import Footer from "@/components/layout/Footer.vue"
import Swiper from "swiper/bundle"
export default {
  name: "Home",
  components: {
    Header,
    Main,
    Swiper,
    VideoList,
    Enterprise,
    EnterPriseList,
    ReviewVideoCard,
    ScheduleCard,
    EductionProgram,
    FAQ,
    Footer,
  },
  setup() {
    const headerHeight = 70.5 // Replace this with the actual header height
    return {
      headerHeight,
    }
  },
}
</script>