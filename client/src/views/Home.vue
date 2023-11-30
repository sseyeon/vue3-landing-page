<!-- src/views/Home.vue -->
<template>
  <div>
    <Header />
    <!-- 메인 섹션 -->
    <Main class="z-0" />
    <!-- 빅리더 선순환 시스템 섹션 -->
    <section class="bg-gray-50 py-20">
      <!-- Heading -->
      <div class="sm:w-3/4 lg:w-5/12 mx-auto px-2 mt-12">
        <h1 class="text-blue-700 font-semibold text-3xl text-center mb-5">
          빅리더 선순환 가치창출 시스템
        </h1>
        <p class="text-center text-gray-600 mb-2">
          청년에게는 변화와 성장을, 참여기관 및 기업에게는 성과를, <br />
          참여대학에게는 실적을, 지자체에게는 성공모델을 <br />
          잇(IT)는 혁신 가드닝 허브 역할을 제공
        </p>
        <div class="flex justify-center flex-wrap gap-2 mb-4">
          <a href="#" class="text-gray-400 hover:text-gray-500">
            자세히 보기
            <font-awesome-icon :icon="['fas', 'circle-chevron-right']" />
          </a>
        </div>

        <p class="mb-12">
          <img src="../assets/images/bigleader-growth.png" alt="" />
        </p>
      </div>
    </section>
    <!-- 기업 소개 섹션 -->
    <section class="py-20 mt-10">
      <!-- Heading -->
      <div class="sm:w-3/4 lg:w-5/12 mx-auto px-2">
        <h1 class="text-blue-700 font-semibold text-3xl text-center">
          좋은 프로젝트가 <br />
          좋은 취업을 결정합니다.
        </h1>
        <p class="text-center text-gray-600 mt-4">
          국내 최고 공공기관, 대기업 및 미래산업 선도기업과 함께 진행하는 현장
          파견 프로젝트
        </p>
      </div>
      <div
        class="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 max-w-screen-lg mt-16"
      >
        <Enterprise />
        <Enterprise />
        <Enterprise />
        <Enterprise />
        <Enterprise />
        <Enterprise />
      </div>
    </section>
    <!-- REVIEW 섹션 -->
    <section class="bg-gray-50 py-20 mt-10">
      <!-- Heading -->
      <div class="sm:w-3/4 lg:w-5/12 mx-auto px-2">
        <h1 class="text-blue-700 font-semibold text-3xl text-center">
          수료생 후기
        </h1>
        <p class="text-center text-gray-600 mt-4">
          빅리더를 거쳐간 수료생들의 후기를 확인해보세요.
        </p>
      </div>
      <div class="flex justify-center flex-wrap gap-2 mt-2">
        <a href="#" class="text-gray-400 hover:text-gray-500">
          더 많은 후기 보기
          <font-awesome-icon :icon="['fas', 'circle-chevron-right']" />
        </a>
      </div>
      <div
        class="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 max-w-screen-lg mt-10 mb-4"
      >
        <ReviewCard
          v-for="reviewItem in reviewData"
          :key="reviewItem.id"
          :review="reviewItem"
        />
      </div>
    </section>
    <!-- 교육 프로그램 섹션 -->
    <section class="py-20 mt-10">
      <!-- Heading -->
      <div class="sm:w-3/4 lg:w-5/12 mx-auto px-2">
        <h1 class="text-blue-700 font-semibold text-3xl text-center">
          교육 프로그램
        </h1>
        <p class="text-center text-gray-600 mt-4">
          AI 개발 및 프로젝트 참여에 관심있는 분들은 필독!
        </p>
      </div>
      <div class="container max-w-screen-lg mt-12">
        <!-- <EductionProgram /> -->
        <ScheduleCard class="mt-8" />
      </div>
    </section>
    <!-- FAQ 섹션 -->
    <section class="bg-gray-50 py-20">
      <div class="container">
        <!-- Heading -->
        <div class="sm:w-3/4 lg:w-5/12 mx-auto px-2">
          <h1 class="text-blue-700 font-semibold text-3xl text-center">
            자주 묻는 질문
          </h1>
          <p class="text-center text-gray-600 mt-4">
            여러분이 자주 묻는 질문들을 모았습니다. <br />궁금한 점이 있으시다면
            언제든지 문의해주세요.
          </p>
        </div>
        <FAQ :faqs="faqs" />
        <div class="flex flex-col sm:w-3/4 lg:w-5/12 mx-auto">
          <button type="button" class="mt-12 flex self-center btn btn-primary">
            더보기
          </button>
        </div>
      </div>
    </section>
    <Footer />
  </div>
</template>
  
  <script>
import Header from "@/components/layout/Header.vue";
import Main from "@/components/Main.vue";
import VideoList from "@/components/VideoList.vue";
import Enterprise from "@/components/EnterpriseCard.vue";
import ReviewCard from "@/components/ReviewCard.vue";
import ScheduleCard from "@/components/ScheduleCard.vue";
import EductionProgram from "@/components/EductionProgram.vue";
import FAQ from "@/components/FAQ.vue";
import Footer from "@/components/layout/Footer.vue";
import Swiper from "@/components/Swiper.vue";
export default {
  name: "Home",
  components: {
    Header,
    Main,
    Swiper,
    VideoList,
    Enterprise,
    ReviewCard,
    ScheduleCard,
    EductionProgram,
    FAQ,
    Footer,
  },
  data() {
    return {
      // 실제 데이터로 대체해야 합니다.
      reviewData: [
        {
          id: 1,
          title: "지식이 남들보다 뒤쳐지는 상황에서!",
          content: "빅리더 9기",
          name: "김빅리더",
          vid: "Tr_uhyAi-Lw",
          link: "https://www.youtube.com/watch?v=Tr_uhyAi",
        },
        {
          id: 2,
          title: "흔치 않은 기회에요.",
          content: "빅리더 9기",
          name: "김예은",
          vid: "3IbVYqZ5vts",
          link: "https://www.youtube.com/watch?v=3IbVYqZ5vts",
        },
        {
          id: 3,
          title: "오직 프로젝트에 집중했어요!",
          content: "빅리더 9기",
          name: "문현석",
          vid: "V_dFzf2VtQM",
          link: "https://example.com/news1",
        },
        {
          id: 4,
          title: "면접에서 어필 할 수 있는 방법",
          content: "빅리더 9기",
          name: "최가영",
          vid: "Sv-IPnEU5AY",
          link: "https://www.youtube.com/watch?v=Tr_uhyAi",
        },
        {
          id: 5,
          title: "밤 낮으로 매진했어요",
          content: "빅리더 9기",
          name: "최은정",
          vid: "e6nPhvUgfF4",
          link: "https://www.youtube.com/watch?v=3IbVYqZ5vts",
        },
        {
          id: 6,
          title: "나만의 무기를 갖는 법",
          content: "빅리더 9기",
          name: "주세현",
          vid: "kP8fxMZFeGc",
          link: "https://example.com/news1",
        },
      ],
      faqs: [
        {
          id: 1,
          question: "신청 자격은 어떻게 되나요?",
          answer:
            "💡 만34세 이하의 대학 졸업예정자 및 졸업자, 휴학생 및 모든 청년들로 대학 졸업예정자는 2023년 6월까지 졸업이 가능하여야 합니다.",
          expanded: false,
        },
        {
          id: 2,
          question: "교육과정은 무료인가요?",
          answer:
            "💡 교육기간 동안 청년지원금 최대 월 60만원(청년지원비+숙박비+식비 포함)을 지원해드립니다.",
          expanded: false,
        },
        {
          id: 3,
          question: "선정은 어떤 절차로 이루어지나요?",
          answer:
            "💡 선정평가는 결격사유가 없는 신청자 중 서면 및 면접평가를 통해 선발합니다. 서면평가는 지원자의 지원 적격여부, 기본자질, 역량을 기준으로, 면접평가는 지원자의 지원동기 및 자기소개, 교육 및 취업 의지, 전문성 등을 기준으로 평가할 예정입니다.",
          expanded: false,
        },
        {
          id: 4,
          question: "수료 기준은 어떻게 되나요?",
          answer:
            "💡 전체 교육시간의 일정 시간 이상을 이수한 경우 수료로 인정하며, 교육 종료 후 수료증이 발급됩니다. 병결, 사고결석 등 부득이한 결석의 경우 승인을 얻어 결석일수에서 제외 가능합니다.",
          expanded: false,
        },
      ],
    };
  },
};
</script>
  