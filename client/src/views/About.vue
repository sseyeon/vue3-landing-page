<!-- src/views/About.vue -->
<template>
  <div>
    <Header />
    <TitleComponent titleText="Introduce" subText="" />
    <div
      class="mt-4 mb-8 z-10"
      :class="{
        'sticky top-[77px]  bg-white opacity-75 justify-center w-full':
          isActive,
      }"
    >
      <!-- <div class="flex justify-center space-x-4">
        <button
          @click="changeCategory('sec01')"
          :class="{ 'text-blue-500 ': activeCategory === 'sec01' }"
        >
          추진배경
        </button>
        <button
          @click="changeCategory('sec02')"
          :class="{ 'text-blue-500 ': activeCategory === 'sec02' }"
        >
          핵심추진전략
        </button>
        <button
          @click="changeCategory('sec03')"
          :class="{ 'text-blue-500 ': activeCategory === 'sec03' }"
        >
          혁신가드닝
        </button>
        <button
          @click="changeCategory('sec04')"
          :class="{
            'text-blue-500 ': activeCategory === 'sec04',
          }"
        >
          성과
        </button>
      </div> -->
    </div>
    <div class="mt-20">
      <section ref="sec01" id="#sec01">
        <div
          class="relative mt-20 sm:w-3/4 lg:w-9/12 mx-auto border-b flex flex-col justify-center items-center"
        >
          <img src="@/assets/images/logon_bl.png" class="mt-20" />
          <p class="text-center text-2xl mt-4 mb-40 font-semibold">
            더할 나위 없는 강력한 성장
          </p>
        </div>
        <div class="relative mt-20 sm:w-3/4 lg:w-9/12 mx-auto border-b">
          <div
            class="container flex flex-col lg:flex-row items-center justify-center gap-x-24 mb-24"
          >
            <!-- Image -->
            <div class="flex flex-1 justify-center z-0 mb-10 lg:mb-0">
              <img
                class="w-5/6 h-5/6 sm:w-3/4 sm:h-3/4 md:w-full md:h-full rounded-full"
                src="@/assets/images/grape.png"
                alt=""
              />
            </div>
            <!-- Content -->
            <div class="flex flex-1 flex-col items-center lg:items-start">
              <h1 class="text-3xl font-semibold">Ordinary to Extraordinary</h1>
              <p
                class="text-lg my-4 text-center lg:text-left sm:w-3/4 lg:w-full"
              >
                <font-awesome-icon
                  :icon="['fas', 'quote-left']"
                  class="text-blue-300"
                />
                선한 영향력과 혁신으로 세상을 이롭게 하라
                <font-awesome-icon
                  :icon="['fas', 'quote-right']"
                  class="text-blue-300"
                />
              </p>
              <p
                class="text-gray-600 my-4 text-center lg:text-left sm:w-3/4 lg:w-full"
              >
                빅리더는 <br />
                새로운 가치 창출 및 사회적 선을 위한 <br />
                선순환의 혁신 성장을 이루고자 합니다.
              </p>
            </div>
          </div>
        </div>
        <div class="relative sm:w-3/4 lg:w-10/12 mx-auto mb-8 border-b">
          <div class="container bg-white py-24 sm:py-32">
            <div class="mx-auto max-w-7xl px-6 lg:px-8">
              <div class="mx-auto max-w-2xl">
                <p
                  class="mt-2 text-3xl lg:text-center font-bold tracking-tight text-gray-900 sm:text-4xl"
                >
                  우리의 비전
                </p>
                <p class="mt-6 text-lg leading-8 text-gray-600">
                  <!-- 인공지능과 데이터, 온오프라인 교육, 몰입환경을 통해,
                  지역소멸과 인구감소에 선제적으로 대응하는 실질적인 솔루션을
                  제공하고 지역사회에 기여합니다. 더불어, DNA 생태계를 형성하여
                  데이터, 네트워크, 인공지능이 조화롭게 통합되는 새로운 환경을
                  창출합니다. -->
                  기업문제, 사회문제, 환경문제, 지역문제 등에서 새로운 기회를
                  찾아내 청년들의 실천적 지식학습 역량 강화와 분야별 국내 최고의
                  공공기관과 선도 기업등과 협업하여 Co-Creation 프로젝트를 통해
                  지속 가능한 성장을 할 수 있는 혁신서비스 구현으로 청년들의
                  사회진출에 결정적 기여합니다.
                </p>
              </div>
              <div
                class="flex justify-center mt-8 text-gray-600 my-4 text-center lg:text-left sm:w-3/4 lg:w-full"
              >
                <img
                  src="@/assets/images/bigleader-guiding.png"
                  class="rounded-lg w-2/3"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section ref="sec03" id="#sec03">
        <div class="relative mt-20 sm:w-3/4 lg:w-9/12 mx-auto mb-12 border-b">
          <div
            class="container flex flex-col lg:flex-row-reverse items-center justify-center gap-x-16 mb-24"
          >
            <!-- Content -->
            <div class="flex flex-1 flex-col items-center lg:items-start">
              <h1 class="text-3xl font-semibold mb-2">
                <font-awesome-icon
                  :icon="['fas', 'quote-left']"
                  class="text-blue-300"
                />
                빅리더의 혁신 가드닝 HUB
                <font-awesome-icon
                  :icon="['fas', 'quote-right']"
                  class="text-blue-300"
                />
              </h1>
              <div
                class="text-gray-600 text-lg my-4 leading-8 text-center lg:text-left sm:w-3/4 lg:w-full"
              >
                빅리더의 혁신 가드닝 Hub은 다양한 이해관계자들 간의 유기적인
                협력을 통해 지역 및 국제적인 혁신을 촉진하고 인재 양성에
                기여하는 중심적인 역할을 합니다.<br /><br />
                <img
                  src="@/assets/images/bigleader-hub-03.png"
                  class="rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section ref="sec02" id="#sec02" class="mt-24">
        <!-- Feature #1 -->
        <div class="relative mt-20 sm:w-3/4 lg:w-9/12 mx-auto mb-12 border-b">
          <div
            class="container flex flex-col lg:flex-row-reverse items-center justify-center gap-x-16 mb-24"
          >
            <!-- Image -->
            <div class="flex flex-1 justify-center z-0 mb-10 lg:mb-0">
              <img
                class="w-5/6 h-5/6 sm:w-3/4 sm:h-3/4 md:w-full md:h-full"
                src="@/assets/images/bigleader-growth.png"
                alt=""
              />
            </div>
            <!-- Content -->
            <div class="flex flex-1 flex-col items-center lg:items-start">
              <h1 class="text-3xl font-semibold">Growth를 통한 가치 창출</h1>
              <p
                class="text-gray-600 my-4 text-lg leading-8 text-center lg:text-left sm:w-3/4 lg:w-full"
              >
                성장은 우리가 추구하는 목표입니다. <br />Growth를 통해 얻을 수
                있는 <br />자신감, 연결성, 자주성, 그리고 희망성장사다리를 통해
                우리는 더 나은 미래를 창출하고, 더 많은 사람들이 기술 혁신의
                혜택을 쉽게 누릴 수 있는 세상을 만들어갑니다.
              </p>
            </div>
          </div>
        </div>
        <!-- Feature #2 -->
        <div class="relative mt-20 sm:w-3/4 lg:w-9/12 mx-auto">
          <div
            class="container flex flex-col lg:flex-row items-center justify-center gap-x-24 mb-24"
          >
            <!-- Image -->
            <div class="flex flex-1 justify-center z-0 mb-10 lg:mb-0">
              <img
                class="w-1/2 h-1/2 lg:w-2/3 lg:h-full"
                src="@/assets/images/4g-triangle-01.png"
                alt=""
              />
            </div>
            <!-- Content -->
            <div class="flex flex-1 flex-col items-center lg:items-start">
              <h1 class="text-3xl font-bold">격이 다른 커리큘럼</h1>
              <p
                class="text-lg my-4 text-center lg:text-left sm:w-3/4 lg:w-full"
              >
                <font-awesome-icon
                  :icon="['fas', 'quote-left']"
                  class="text-blue-300"
                />
                사전 교육부터, 현장 프로젝트까지 함께.
                <font-awesome-icon
                  :icon="['fas', 'quote-right']"
                  class="text-blue-300"
                />
              </p>
              <p
                class="text-gray-600 my-4 leading-8 text-center lg:text-left sm:w-3/4 lg:w-full"
              >
                선순환 가치 창출 시스템을 통해, 우리는 다양한 층위의
                참여자들에게 변화와 성장의 기회를 제공합니다. 이를 위한 우리의
                주요 지향점은 다음과 같습니다:
              </p>
            </div>
          </div>
        </div>
        <!-- Feature #3 -->
        <div class="relative mt-20 sm:w-3/4 lg:w-9/12 mx-auto mb-12 border-b">
          <div
            class="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-screen-lg mt-4 mb-16"
          >
            <div
              class="bg-gray-100 flex flex-col items-center text-center rounded-lg p-4"
            >
              <div class="m-2 font-bold text-xl text-blue-700">01</div>
              <span class="text-xl m-2"
                ><font-awesome-icon :icon="['fas', 'user']"
              /></span>
              <h3 class="mb-2 text-lg font-semibold">전국 단위 학생 선발</h3>
              <p class="text-gray-600">
                뛰어난 학생들을 발굴하고 육성하기 위한 광범위한 선택 과정을
                통해, 청년들에게 새로운 기회와 도전을 제공합니다.
              </p>
            </div>
            <div
              class="bg-blue-100 flex flex-col items-center text-center rounded-lg p-4"
            >
              <div class="m-2 font-bold text-xl">02</div>
              <span class="text-xl m-2"
                ><font-awesome-icon :icon="['far', 'pen-to-square']"
              /></span>
              <h3 class="mb-2 text-lg font-semibold">
                실천적 지식학습역량 강화
              </h3>
              <p class="text-gray-600">
                온·오프라인 교육, 몰입환경, 동기부여, 팀 스터디, LMS 등을 통해
                실천적인 지식학습 역량을 강화합니다.
              </p>
            </div>
            <div
              class="bg-gray-100 flex flex-col items-center text-center rounded-lg p-4"
            >
              <div class="m-2 font-bold text-xl text-blue-700">03</div>
              <span class="text-xl m-2"
                ><font-awesome-icon :icon="['fas', 'fa-folder-open']"
              /></span>
              <h3 class="mb-2 text-lg font-semibold">Co-Creation Project</h3>
              <p class="text-gray-600">
                Collective Mentoring을 통해 실질적인 업무 경험을 얻고, 현장 파견
                프로젝트를 통해 전문 지식을 심화시킵니다.
              </p>
            </div>
            <div
              class="bg-blue-100 flex flex-col items-center text-center rounded-lg p-4"
            >
              <div class="m-2 font-bold text-xl">04</div>
              <span class="text-xl m-2"
                ><font-awesome-icon :icon="['fas', 'fa-chart-line']"
              /></span>
              <h3 class="mb-2 text-lg font-semibold">
                경험 강화를 통한 Growth
              </h3>
              <p class="text-gray-600">
                선순환 가치 창출 시스템을 통한 Growth는 파트너와의 협력, 현장
                적용 서비스화, 특허 출원, 창업, SCI 논문 등 다양한 방식을 통해
                이루어집니다.
              </p>
            </div>
          </div>
        </div>
        <!-- Feature #4 -->
        <div class="relative mt-20 sm:w-3/4 lg:w-9/12 mx-auto mb-12 border-b">
          <AboutValue />
        </div>
      </section>

      <section ref="sec04" id="#sec04">
        <div
          class="relative mt-24 sm:w-3/4 lg:w-9/12 mx-auto border-b flex flex-col justify-center items-center"
        >
          <h1 class="text-center text-4xl mb-20">
            이미 <span class="font-extrabold">102</span>개의 기업이 함께 하고
            있습니다.
          </h1>
          <EnterpriseList />
        </div>
      </section>
      <section ref="sec05" id="#sec05">
        <div
          class="relative sm:w-3/4 lg:w-9/12 mx-auto border-b flex flex-col justify-center items-center"
        >
          <CompanyReviewCard />
        </div>
      </section>
      <section ref="sec06" id="#sec06">
        <div class="bg-white py-28">
          <div class="mx-auto max-w-7xl px-6 lg:px-8">
            <div class="mx-auto max-w-2xl lg:text-center">
              <p
                class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
              >
                우수사례 소개
              </p>
              <p class="mt-6 text-lg leading-8 text-gray-600">
                빅리더 프로그램은 학생들이 평소 접하기 어려운 국내 최고의
                공공기관 및 기업들과 협업하는 프로젝트입니다. 전국에서 선발된
                청년들이 경쟁과 협력을 통해 소통하고 성장하며, 이는 그들에게
                잊을 수 없는 인생의 전환점이자 사회진출에 결정적인 역할을 하는
                경험이 됩니다.
              </p>
            </div>
          </div>
        </div>
        <div class="container lg:w-10/12 mb-48">
          <swiper
            :modules="swiperModules"
            :slides-per-view="4"
            :space-between="16"
            :loop="true"
            :pagination="{ clickable: true }"
            :autoplay="{ delay: 2000, disableOnInteraction: false }"
            @swiper="onSwiper"
          >
            <swiper-slide
              v-for="outcomeItem in outcomeData"
              :key="outcomeItem.id"
            >
              <OutcomeCard :outcome="outcomeItem" />
            </swiper-slide>
          </swiper>
        </div>
      </section>
      <!-- Contact Us -->
      <section class="bg-blue-100 py-20">
        <div class="container">
          <div class="sm:w-3/4 lg:w-2/4 mx-auto">
            <p class="font-light uppercase text-center mb-8">
              100+ 기업 및 공공기관이 함께하고 있습니다.
            </p>
            <h1 class="text-3xl text-center font-semibold">
              Join us in what we're doing!
            </h1>
            <div class="flex flex-col sm:flex-row gap-6 mt-8">
              <input
                type="text"
                placeholder="Enter your email address"
                class="flex-1 px-2 py-3 rounded-md text-black"
              />
              <button type="button" class="btn btn-primary">Contact Us</button>
            </div>
          </div>
        </div>
      </section>
    </div>
    <Footer />
  </div>
</template>
    
    <script>
import Header from "@/components/layout/Header.vue"
import Footer from "@/components/layout/Footer.vue"
import EnterpriseList from "@/components/EnterpriseList.vue"
import TitleComponent from "@/components/TitleComponent.vue"
import CompanyReviewCard from "@/components/CompanyReviewCard.vue"
import AboutValue from "@/components/AboutValue.vue"

// Import Swiper core and required modules
import { Swiper, SwiperSlide } from "swiper/vue"
import {
  Navigation,
  Pagination,
  Scrollbar,
  Autoplay,
  A11y,
} from "swiper/modules"
import OutcomeCard from "@/components/OutcomeCard.vue"

export default {
  name: "About",
  components: {
    Header,
    Footer,
    TitleComponent,
    EnterpriseList,
    CompanyReviewCard,
    AboutValue,
    Swiper,
    SwiperSlide,
    OutcomeCard,
  },
  data() {
    return {
      activeCategory: "sec01",
      isActive: false,
      outcomeData: [
        {
          id: 1,
          imgSrc: require("@/assets/images/bigleader-outcome/outcome-01.png"),
        },
        {
          id: 2,
          imgSrc: require("@/assets/images/bigleader-outcome/outcome-02.png"),
        },
        {
          id: 3,
          imgSrc: require("@/assets/images/bigleader-outcome/outcome-03.png"),
        },
        {
          id: 4,
          imgSrc: require("@/assets/images/bigleader-outcome/outcome-04.png"),
        },
        {
          id: 5,
          imgSrc: require("@/assets/images/bigleader-outcome/outcome-05.png"),
        },
        {
          id: 6,
          imgSrc: require("@/assets/images/bigleader-outcome/outcome-06.png"),
        },
        {
          id: 7,
          imgSrc: require("@/assets/images/bigleader-outcome/outcome-07.png"),
        },
        {
          id: 8,
          imgSrc: require("@/assets/images/bigleader-outcome/outcome-08.png"),
        },
      ],
      swiperModules: [Navigation, Pagination, Scrollbar, Autoplay, A11y],
    }
  },
  methods: {
    changeCategory(category) {
      const sectionRef = this.$refs[category]
      sectionRef.scrollIntoView({ behavior: "smooth" })
      this.activeCategory = category
    },
    handleScroll() {
      this.isActive = window.scrollY > 100
    },
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll)
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll)
  },
}
</script>