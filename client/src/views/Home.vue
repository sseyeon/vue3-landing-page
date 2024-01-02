<!-- src/views/Home.vue -->
<template>
  <div>
    <Header />
    <!-- 메인 섹션 -->
    <Main class="z-0" />
    <!-- 기업 프로젝트 섹션 -->
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
      <!-- 기업 목록 섹션 -->
      <div
        class="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-screen-lg mt-16"
      >
        <!-- 기업 목록을 페이징하여 보여주기 -->
        <Enterprise
          v-for="enterpriseItem in paginatedprojectData"
          :key="enterpriseItem.id"
          :enterprise="enterpriseItem"
        />
      </div>
      <!-- 페이징 컨트롤 -->
      <div class="flex justify-center mt-8 text-gray-500">
        <button
          @click="previousPage"
          :disabled="currentPage === 1"
          class="hover:text-gray-700 cursor-pointer"
        >
          <font-awesome-icon :icon="['fas', 'circle-chevron-left']" />
        </button>
        <span class="mx-4">{{ currentPage }} / 3</span>
        <button
          @click="nextPage"
          :disabled="currentPage === totalPages"
          class="hover:text-gray-700 cursor-pointer"
        >
          <font-awesome-icon :icon="['fas', 'circle-chevron-right']" />
        </button>
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
        <router-link to="review" class="text-gray-400 hover:text-gray-500">
          더 많은 후기 보기
          <font-awesome-icon :icon="['fas', 'circle-chevron-right']" />
        </router-link>
      </div>
      <div
        class="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 max-w-screen-lg mt-10 mb-4"
      >
        <ReviewVideoCard
          v-for="videoItem in videoData"
          :key="videoItem.id"
          :video="videoItem"
        />
      </div>
    </section>
    <!-- 빅리더 선순환 시스템 섹션 -->
    <section class="py-20 mt-10">
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
          <router-link to="/about" class="text-gray-400 hover:text-gray-500">
            자세히 보기
            <font-awesome-icon :icon="['fas', 'circle-chevron-right']" />
          </router-link>
        </div>

        <p class="mb-12">
          <img src="../assets/images/bigleader-growth.png" alt="" />
        </p>
      </div>
    </section>
    <!-- 교육 프로그램 섹션 -->
    <section class="bg-gray-50 py-20 mt-10">
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
    <section class="py-20">
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
        <div class="flex justify-center flex-wrap gap-2 mt-2">
          <router-link to="faq" class="text-gray-400 hover:text-gray-500">
            더 보기
            <font-awesome-icon :icon="['fas', 'circle-chevron-right']" />
          </router-link>
        </div>
        <FAQ :faqs="faqs" />
      </div>
    </section>
    <!-- 기업 리스트 -->
    <section class="bg-gray-50 py-20">
      <div class="container">
        <!-- Heading -->
        <div
          class="relative mt-4 sm:w-3/4 lg:w-9/12 mx-auto flex flex-col justify-center items-center"
        >
          <h1 class="text-blue-700 font-semibold text-3xl text-center">
            아직도 망설여지시나요?
          </h1>
          <p class="text-center text-gray-600 mt-4 mb-10">
            이미 102개의 기업이 함께 하고 있습니다.
          </p>
          <EnterPriseList />
        </div>
      </div>
    </section>
    <section>
      <div
        class="h-[420px] relative mt-24 mb-24 sm:w-3/4 lg:w-9/12 mx-auto flex flex-col justify-center items-center"
      >
        <h1 class="text-center text-4xl font-medium mb-6">
          모든 것을 바꿀 수 있는 능력, <br />
          빅리더와 함께 시작하세요.
        </h1>
        <div class="flex justify-center flex-wrap gap-2">
          <router-link to="apply" class="btn btn-outline-primary">
            지원하기
            <font-awesome-icon :icon="['fas', 'fa-paper-plane']" />
          </router-link>
          <!-- <button type="button" class="btn btn-outline-primary">
            지원하기
            <font-awesome-icon :icon="['fas', 'fa-paper-plane']" />
          </button> -->
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
import EnterPriseList from "@/components/EnterpriseList.vue";
import ReviewVideoCard from "@/components/ReviewVideoCard.vue";
import ScheduleCard from "@/components/ScheduleCard.vue";
import EductionProgram from "@/components/EductionProgram.vue";
import FAQ from "@/components/FAQ.vue";
import Footer from "@/components/layout/Footer.vue";
import Swiper from "swiper/bundle";
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
  data() {
    return {
      itemsPerPage: 6, // 페이지당 표시할 항목 수
      currentPage: 1, // 현재 페이지
      // 실제 데이터로 대체해야 합니다.
      videoData: [
        {
          id: 1,
          title: "지식이 남들보다 뒤쳐지는 상황에서!",
          year: "빅리더 9기",
          name: "김빅리더",
          vid: "Tr_uhyAi-Lw",
          link: "https://www.youtube.com/watch?v=Tr_uhyAi",
        },
        {
          id: 2,
          title: "흔치 않은 기회에요.",
          year: "빅리더 9기",
          name: "김예은",
          vid: "3IbVYqZ5vts",
          link: "https://www.youtube.com/watch?v=3IbVYqZ5vts",
        },
        {
          id: 3,
          title: "오직 프로젝트에 집중했어요!",
          year: "빅리더 9기",
          name: "문현석",
          vid: "V_dFzf2VtQM",
          link: "https://example.com/news1",
        },
        {
          id: 4,
          title: "면접에서 어필 할 수 있는 방법",
          year: "빅리더 9기",
          name: "최가영",
          vid: "Sv-IPnEU5AY",
          link: "https://www.youtube.com/watch?v=Tr_uhyAi",
        },
        {
          id: 5,
          title: "밤 낮으로 매진했어요",
          year: "빅리더 9기",
          name: "최은정",
          vid: "e6nPhvUgfF4",
          link: "https://www.youtube.com/watch?v=3IbVYqZ5vts",
        },
        {
          id: 6,
          title: "나만의 무기를 갖는 법",
          year: "빅리더 9기",
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
      projectData: [
        {
          id: 1,
          partner: "한국사회보장정보원",
          year: "2023",
          award: "",
          project:
            "생성형 Al를 활용한 나에게 힘이 되는 AI 복지 서비스 개발 프로젝트",
          imgSrc: require("@/assets/images/partners/Korea_Social_Security_Administration.png"),
          link: "https://example.com/news1",
          thumbnail_url: "",
          additional_content1: "",
          additional_content2: "",
          display_on_main: true,
        },
        {
          id: 2,
          partner: "KOTRA",
          year: "2023",
          award: "",
          project:
            "무역 생태계 활성화를 위한 양방향 HS CODE 매칭 서비스 개발 프로젝트",
          imgSrc: require("@/assets/images/partners/kotra_1.png"),
          link: "https://example.com/news1",
          thumbnail_url: "",
          additional_content1: "",
          additional_content2: "",
          display_on_main: true,
        },
        {
          id: 3,
          partner: "(주)대상",
          year: "2023",
          award: "",
          project:
            "간장 제조 Cost 절감을 위한 인사이트 도출 및 품질 예측 서비스 개발 프로젝트",
          imgSrc: require("@/assets/images/partners/daesang.png"),
          link: "https://example.com/news1",
          thumbnail_url: "",
          additional_content1: "",
          additional_content2: "",
          display_on_main: true,
        },
        {
          id: 4,
          partner: "(주)코데이터솔루션",
          year: "2023",
          award: "",
          project:
            "ESG 진단지표를 활용한 생성형 AI 기반 ESG 컨설팅 서비스 개발 프로젝트",
          imgSrc: require("@/assets/images/partners/kodata.png"),
          link: "https://example.com/news1",
          thumbnail_url: "",
          additional_content1: "",
          additional_content2: "",
          display_on_main: true,
        },
        {
          id: 5,
          partner: "한국고용정보원",
          year: "2023",
          award: "",
          project: "청년 정책 혜택 알리미 맞춤형 서비스 개발 프로젝트",
          imgSrc: require("@/assets/images/partners/Korea_Employment_Information_Center.png"),
          link: "https://example.com/news1",
          thumbnail_url: "",
          additional_content1: "",
          additional_content2: "",
          display_on_main: true,
        },
        {
          id: 6,
          partner: "한국수자원공사",
          year: "2023",
          award: "",
          project: "수처리 약품 주입 최적화 모델링 서비스 개발 프로젝트",
          imgSrc: require("@/assets/images/partners/Korea_Water_Resources_Corporation_1.png"),
          link: "https://example.com/news1",
          thumbnail_url: "",
          additional_content1: "",
          additional_content2: "",
          display_on_main: true,
        },
        {
          id: 7,
          partner: "한국산업단지공단",
          year: "2023",
          award: "",
          project:
            "한국산업단지공단 입주기업 ESG 경영시급도 모델링 및 현황 모니터링 대시보드 개발 프로젝트",
          imgSrc: require("@/assets/images/partners/Korea_Industrial_Complex_Corporation_1.png"),
          link: "https://example.com/news1",
          thumbnail_url: "",
          additional_content1: "",
          additional_content2: "",
          display_on_main: true,
        },
        {
          id: 8,
          partner: "(주)세아베스틸",
          year: "2023",
          award: "",
          project:
            "생성형 AI를 활용한 수주규격 검토 자동화 서비스 개발 프로젝트",
          imgSrc: require("@/assets/images/partners/Ceabestil.png"),
          link: "https://example.com/news1",
          thumbnail_url: "",
          additional_content1: "",
          additional_content2: "",
          display_on_main: true,
        },
        {
          id: 9,
          partner: "(주)세아베스틸",
          year: "2023",
          award: "",
          project:
            "대형 압연 Hot Saw Burr 이미지 비전 판독 기술 서비스 개발 프로젝트",
          imgSrc: require("@/assets/images/partners/Ceabestil.png"),
          link: "https://example.com/news1",
          thumbnail_url: "",
          additional_content1: "",
          additional_content2: "",
          display_on_main: true,
        },
        {
          id: 10,
          partner: "(주)세아창원특수강",
          year: "2023",
          award: "",
          project: "스테인리스 선재(Wire Rod) 물성 예측 서비스 개발 프로젝트",
          imgSrc: require("@/assets/images/partners/Seachangwon_Specialty_Course.png"),
          link: "https://example.com/news1",
          thumbnail_url: "",
          additional_content1: "",
          additional_content2: "",
          display_on_main: true,
        },
        {
          id: 11,
          partner: "(주)세아창원특수강",
          year: "2023",
          award: "",
          project: "스테인리스 봉강(Round Bar) 물성예측 서비스 개발 프로젝트",
          imgSrc: require("@/assets/images/partners/Seachangwon_Specialty_Course.png"),
          link: "https://example.com/news1",
          thumbnail_url: "",
          additional_content1: "",
          additional_content2: "",
          display_on_main: true,
        },
        {
          id: 12,
          partner: "근로복지공단",
          year: "2023",
          award: "",
          project:
            "신속한 사고 처리를 위한 AI 기반 업무상 재해 처리 지원 서비스 개발 프로젝트",
          imgSrc: require("@/assets/images/partners/Social_Security_Administration.png"),
          link: "https://example.com/news1",
          thumbnail_url: "",
          additional_content1: "",
          additional_content2: "",
          display_on_main: true,
        },
        {
          id: 13,
          partner: "근로복지공단",
          year: "2023",
          award: "",
          project:
            "재해조사 담당자의 업무 효율화를 위한 유사 판정서 추천 서비스 개발 프로젝트",
          imgSrc: require("@/assets/images/partners/Social_Security_Administration.png"),
          link: "https://example.com/news1",
          thumbnail_url: "",
          additional_content1: "",
          additional_content2: "",
          display_on_main: true,
        },
        {
          id: 14,
          partner: "건강보험심사평가원",
          year: "2023",
          award: "",
          project:
            "만성질환자 (당뇨병, 고혈압) 선제대응 예측 및 내 주변 우수병원 추천 AI서비스 개발 프로젝트",
          imgSrc: require("@/assets/images/partners/Health_Insurance.png"),
          link: "https://example.com/news1",
          thumbnail_url: "",
          additional_content1: "",
          additional_content2: "",
          display_on_main: true,
        },
        {
          id: 15,
          partner: "국립공원공단",
          year: "2023",
          award: "",
          project: "누리호 위성 데이터를 활용한 변화탐지 서비스 개발 프로젝트",
          imgSrc: require("@/assets/images/partners/National_Parks.png"),
          link: "https://example.com/news1",
          thumbnail_url: "",
          additional_content1: "",
          additional_content2: "",
          display_on_main: true,
        },
        {
          id: 16,
          partner: "국립공원공단",
          year: "2023",
          award: "",
          project: "생성형 AI 활용국립공원 탐방 서비스 개발 프로젝트",
          imgSrc: require("@/assets/images/partners/National_Parks.png"),
          link: "https://example.com/news1",
          thumbnail_url: "",
          additional_content1: "",
          additional_content2: "",
          display_on_main: true,
        },
      ],
    };
  },
  computed: {
    paginatedprojectData() {
      // 현재 페이지에 맞게 기업 데이터를 페이징하여 반환
      const startIndex = (this.currentPage - 1) * this.itemsPerPage;
      const endIndex = startIndex + this.itemsPerPage;
      return this.projectData.slice(startIndex, endIndex);
    },
    totalPages() {
      // 전체 페이지 수 계산
      return Math.ceil(this.projectData.length / this.itemsPerPage);
    },
    // 기타 필요한 계산된 속성들
  },
  methods: {
    previousPage() {
      // 이전 페이지로 이동하는 메서드
      if (this.currentPage > 1) {
        this.currentPage -= 1;
      }
    },
    nextPage() {
      // 다음 페이지로 이동하는 메서드
      if (this.currentPage < this.totalPages) {
        this.currentPage += 1;
      }
    },
    // 기타 필요한 메서드들
  },
};
</script>
  