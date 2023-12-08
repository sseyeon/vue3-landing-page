<!-- src/views/About.vue -->
<template>
  <div>
    <Header />
    <TitleComponent titleText="Introduce" subText="빅리더 혁신 가드닝" />
    <div
      class="mt-4 mb-8 z-10"
      :class="{
        'sticky top-[77px]  bg-white opacity-75 justify-center w-full':
          isActive,
      }"
    >
      <div class="flex justify-center space-x-4">
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
      </div>
    </div>
    <div class="container mt-20">
      <section ref="sec01" id="#sec01">
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
              <h1 class="text-3xl font-medium">Making Social Good Tree</h1>
              <p
                class="text-lg text-gray-600 my-4 text-center lg:text-left sm:w-3/4 lg:w-full"
              >
                <font-awesome-icon
                  :icon="['fas', 'quote-left']"
                  class="text-gray-400"
                />
                선한 영향력과 혁신으로 세상을 이롭게 하라
                <font-awesome-icon
                  :icon="['fas', 'quote-right']"
                  class="text-gray-400"
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
        <div class="relative mt-20 sm:w-3/4 lg:w-10/12 mx-auto mb-12 border-b">
          <div
            class="container flex flex-col lg:flex-row items-center justify-center gap-x-6 mb-24"
          >
            <!-- Image -->
            <div class="flex flex-1 justify-center z-0 mb-10 lg:mb-0">
              <h1 class="text-3xl font-semibold">우리의 비전</h1>
            </div>
            <!-- Content -->
            <div class="flex flex-1 flex-col items-center lg:items-start">
              <p
                class="text-gray-600 my-4 text-center lg:text-left sm:w-3/4 lg:w-full"
              >
                인공지능과 데이터, 온오프라인 교육, 몰입환경을 통해,
                <br />우리는 지역소멸과 인구감소에 선제적으로 대응하는 실질적인
                솔루션을 제공하고 지역사회에 기여합니다. <br />더불어, DNA
                생태계를 형성하여 데이터, 네트워크, 인공지능이 조화롭게 통합되는
                새로운 환경을 창출합니다.
              </p>
            </div>
          </div>
        </div>
        <div class="relative mt-20 sm:w-3/4 lg:w-9/12 mx-auto mb-12 border-b">
          <img src="@/assets/images/swipe-img-01.jpg" class="rounded-lg" />
        </div>
      </section>
      <section ref="sec02" id="#sec02" class="mt-24">
        <!-- Feature #2 -->
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
              <h1 class="text-3xl font-medium">Growth를 통한 가치 창출</h1>
              <p
                class="text-gray-600 my-4 text-center lg:text-left sm:w-3/4 lg:w-full"
              >
                성장은 우리가 추구하는 목표입니다. <br />Growth를 통해 얻을 수
                있는 <br />자신감, 연결성, 자주성, 그리고 희망성장사다리를 통해
                우리는 더 나은 미래를 창출하고, 더 많은 사람들이 기술 혁신의
                혜택을 쉽게 누릴 수 있는 세상을 만들어갑니다.
              </p>
            </div>
          </div>
        </div>
        <div class="relative mt-20 sm:w-3/4 lg:w-9/12 mx-auto">
          <div
            class="container flex flex-col lg:flex-row items-center justify-center gap-x-24 mb-24"
          >
            <!-- Image -->
            <div class="flex flex-1 justify-center z-0 mb-10 lg:mb-0">
              <img
                class="w-5/6 h-5/6 sm:w-3/4 sm:h-3/4 md:w-full md:h-full"
                src="@/assets/images/4g-triangle-01.png"
                alt=""
              />
            </div>
            <!-- Content -->
            <div class="flex flex-1 flex-col items-center lg:items-start">
              <h1 class="text-3xl font-medium">우리의 가치 창출 철학</h1>
              <p
                class="text-lg text-gray-600 my-4 text-center lg:text-left sm:w-3/4 lg:w-full"
              >
                <font-awesome-icon
                  :icon="['fas', 'quote-left']"
                  class="text-gray-400"
                />
                4차 산업혁명 시대에 적합한 인재를 창출하고, <br />
                선순환 가치 창출 시스템
                <font-awesome-icon
                  :icon="['fas', 'quote-right']"
                  class="text-gray-400"
                />
              </p>
              <p
                class="text-gray-600 my-4 text-center lg:text-left sm:w-3/4 lg:w-full"
              >
                선순환 가치 창출 시스템을 통해, 우리는 다양한 층위의
                참여자들에게 변화와 성장을 제공합니다. 이를 위해 우리는 다음과
                같은 핵심 원칙을 가지고 있습니다:
              </p>
            </div>
          </div>
        </div>
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
              <h3 class="mb-2 text-lg font-semibold">
                전국 단위 <br />
                학생 모집
              </h3>
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
                Co-Creation Project를 통해 실무 경험을 쌓고, 현장파견 프로젝트와
                집단 교육을 통한 Collective Mentoring을 제공합니다.
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
      </section>
      <section ref="sec03" id="#sec03">
        <div class="h-screen">섹션3</div>
      </section>
      <section ref="sec04" id="#sec04">
        <div class="h-screen">섹션4</div>
      </section>
    </div>

    <Footer />
  </div>
</template>
    
    <script>
import Header from "@/components/layout/Header.vue";
import Footer from "@/components/layout/Footer.vue";
import TitleComponent from "@/components/TitleComponent.vue";

export default {
  name: "About",
  components: {
    Header,
    Footer,
    TitleComponent,
  },
  data() {
    return {
      activeCategory: "sec01",
      isActive: false,
    };
  },
  methods: {
    changeCategory(category) {
      const sectionRef = this.$refs[category];
      sectionRef.scrollIntoView({ behavior: "smooth" });
      this.activeCategory = category;
    },
    handleScroll() {
      this.isActive = window.scrollY > 100;
    },
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  },
};
</script>