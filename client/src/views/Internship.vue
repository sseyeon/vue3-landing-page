<!-- src/views/Internship.vue -->
<template>
  <div>
    <Header />
    <TitleComponent
      titleText="Internship"
      subText="빅리더와 함께한 <br />공공기관 인턴십 프로젝트를 소개합니다."
    />
    <!-- <Search /> -->
    <div class="container max-w-screen-lg mt-10 mb-4">
      <InternshipCard
        v-for="projectItem in projectData"
        :key="projectItem.id"
        :project="projectItem"
        @internship-click="redirectToInternship"
        data-aos="fade-up"
        data-aos-duration="1000"
      />
    </div>
    <Footer />
  </div>
</template>
      
      <script>
import Header from "@/components/layout/Header.vue"
import TitleComponent from "@/components/TitleComponent.vue"
import InternshipCard from "@/components/InternshipCard.vue"
import Search from "@/components/Search.vue"
import Footer from "@/components/layout/Footer.vue"

export default {
  name: "Internship",
  components: {
    Header,
    TitleComponent,
    InternshipCard,
    Search,
    Footer,
  },
  data() {
    return {
      projectData: [
        {
          id: 1,
          partner: "한국사회보장정보원",
          year: "2023",
          award: "",
          project:
            "생성형 AI를 활용한 나에게 힘이 되는 AI 복지 서비스 개발 프로젝트",
          imgSrc: require("@/assets/images/partners/Korea_Social_Security_Administration.png"),
          link: "https://example.com/news1",
          thumbnail_url: "",
          additional_content1: require("@/assets/images/2023-internship/panel/Korea_Social_Security_Administration_1.jpg"),
          additional_content2: require("@/assets/images/2023-internship/panel/Korea_Social_Security_Administration_2.jpg"),
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
          additional_content1: require("@/assets/images/2023-internship/panel/KOTRA_1.jpg"),
          additional_content2: require("@/assets/images/2023-internship/panel/KOTRA_2.jpg"),
          display_on_main: true,
        },
        {
          id: 3,
          partner: "대상(주)",
          year: "2023",
          award: "",
          project:
            "간장 제조 Cost 절감을 위한 인사이트 도출 및 품질 예측 서비스 개발 프로젝트",
          imgSrc: require("@/assets/images/partners/daesang.png"),
          link: "https://example.com/news1",
          thumbnail_url: "",
          additional_content1: require("@/assets/images/2023-internship/panel/daesang_1.jpg"),
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
          additional_content1: require("@/assets/images/2023-internship/panel/kodata_1.jpg"),
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
          additional_content1: require("@/assets/images/2023-internship/panel/Korea_Employment_Information_Center_1.jpg"),
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
          additional_content1: require("@/assets/images/2023-internship/panel/Korea_Water_Resources_Corporation_1.jpg"),
          additional_content2: require("@/assets/images/2023-internship/panel/Korea_Water_Resources_Corporation_2.jpg"),
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
          additional_content1: require("@/assets/images/2023-internship/panel/Korea_Industrial_Complex_Corporation_1.jpg"),
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
          additional_content1: require("@/assets/images/2023-internship/panel/Ceabestil_1.jpg"),
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
          additional_content1: require("@/assets/images/2023-internship/panel/Ceabestil_2.jpg"),
          additional_content2: require("@/assets/images/2023-internship/panel/Ceabestil_3.jpg"),
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
          additional_content1: require("@/assets/images/2023-internship/panel/Seachangwon_Specialty_Course_1.jpg"),
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
          additional_content1: require("@/assets/images/2023-internship/panel/Seachangwon_Specialty_Course_2.jpg"),
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
          additional_content1: require("@/assets/images/2023-internship/panel/Social_Security_Administration_1.jpg"),
          additional_content2: require("@/assets/images/2023-internship/panel/Social_Security_Administration_2.jpg"),
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
          additional_content1: require("@/assets/images/2023-internship/panel/Social_Security_Administration_3.jpg"),
          additional_content2: require("@/assets/images/2023-internship/panel/Social_Security_Administration_4.jpg"),
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
          additional_content1: require("@/assets/images/2023-internship/panel/Health_Insurance_1.jpg"),
          additional_content2: require("@/assets/images/2023-internship/panel/Health_Insurance_2.jpg"),
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
          additional_content1: require("@/assets/images/2023-internship/panel/National_Parks_1.jpg"),
          additional_content2: require("@/assets/images/2023-internship/panel/National_Parks_2.jpg"),
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
          additional_content1: require("@/assets/images/2023-internship/panel/National_Parks_3.jpg"),
          additional_content2: "",
          display_on_main: true,
        },
      ],
    }
  },
  methods: {
    // 리다이렉션을 처리할 메서드 추가
    redirectToInternship(id) {
      this.$router.push({ path: `/internship/${id}` })
    },
  },
}
</script>
      