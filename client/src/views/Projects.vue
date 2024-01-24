<!-- src/views/Projects.vue -->
<template>
  <div>
    <Header />
    <TitleComponent
      titleText="Project"
      subText="빅리더 수료생들이 진행한 프로젝트를 소개합니다."
    />
    <div class="container max-w-screen-lg mb-4 mt-8">
      <SelectBox
        :options="selectOptions"
        v-model="selectedOption"
        @change="handleSelectChange"
        data-aos="fade-up"
        data-aos-duration="1000"
      />
    </div>
    <!-- Display news based on the selected category -->
    <div
      class="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-screen-lg mt-4 mb-16"
    >
      <ProjectCard
        v-for="previousProjectItem in filteredProjects"
        :key="previousProjectItem.id"
        :previousProject="previousProjectItem"
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
import SelectBox from "@/components/CustomSelectBox.vue"
import ProjectCard from "@/components/ProjectCard.vue"
import Footer from "@/components/layout/Footer.vue"

export default {
  name: "Projects",
  components: {
    Header,
    TitleComponent,
    SelectBox,
    ProjectCard,
    Footer,
  },
  data() {
    return {
      selectOptions: [
        { label: "2020년", value: "2020" },
        { label: "2021년", value: "2021" },
        { label: "2022년", value: "2022" },
      ],
      selectedOption: "2020",
      previousProjectData: [
        {
          id: 1,
          partner: "국립농산물품질관리원",
          year: "2020",
          project:
            "AI 기술을 활용한 GIS 기반의 농산물 원산지 표시 단속 추천 서비스",
          award: "대상 수상",
          imgSrc: require("@/assets/images/partners/National_Institute_of_Food_and_Agriculture.png"),
        },
        {
          id: 2,
          partner: "통영시청",
          year: "2020",
          project: "AR융합 기반의 지역화폐 활성화 서비스",
          award: "부사장상 표창",
          imgSrc: require("@/assets/images/partners/Tongyeong_City_Hall.png"),
        },
        {
          id: 3,
          partner: "GS칼텍스",
          year: "2020",
          project: "AI기반 폴리머 물성 예측 알고리즘을 통한 소재 개발 서비스",
          award: "부사장상 표창",
          imgSrc: require("@/assets/images/partners/GS_Caltex.png"),
        },
        {
          id: 4,
          partner: "한국인터넷진흥원",
          year: "2020",
          project: "웹 크롤링 및 자연어처리(NLP) 기반 정보주체 권리지킴 서비스",
          award: "부사장상 표창",
          imgSrc: require("@/assets/images/partners/Korea_Internet.png"),
        },
        {
          id: 5,
          partner: "KOTRA",
          year: "2020",
          project: "AI 기반 사용자 트렌드 분석을 통한 해외 시장 추천 서비스",
          award: "부사장상 표창",
          imgSrc: require("@/assets/images/partners/kotra_1.png"),
        },
        {
          id: 6,
          partner: "국립공원공단",
          year: "2020",
          project: "AI 딥러닝 기술을 활용한 국립공원 혼잡도 예측 서비스",
          award: "부사장상 표창",
          imgSrc: require("@/assets/images/partners/National_Parks.png"),
        },
        {
          id: 7,
          partner: "한국관광공사",
          year: "2020",
          project: "근로자 휴가지원을 위한 디지털변환 기반 공공캐시백 서비스",
          award: "부사장상 표창",
          imgSrc: require("@/assets/images/partners/Korea_Tourism_Organization.png"),
        },
        {
          id: 8,
          partner: "한국사회보장정보원",
          year: "2020",
          project: "AI와 자연어처리를 활용한 아동재학대 선제 예방 서비스",
          award: "부사장상 표창",
          imgSrc: require("@/assets/images/partners/Korea_Social_Security_Administration.png"),
        },
        {
          id: 9,
          partner: "한국관광공사",
          year: "2020",
          project:
            "OCR과 유사도 알고리즘을 활용한 서류 심사 프로세스 자동화 서비스",
          award: "부사장상 표창",
          imgSrc: require("@/assets/images/partners/Korea_Tourism_Organization.png"),
        },
        {
          id: 10,
          partner: "(주)트랭글",
          year: "2020",
          project: "AI기술을 활용한 GIS기반 안전하고 편리한 산행 추천 서비스",
          award: "부사장상 표창",
          imgSrc: require("@/assets/images/partners/Tranggle.png"),
        },
        {
          id: 11,
          partner: "한국에너지공단",
          year: "2020",
          project: "OCR 기반의 AI기술을 활용한 복합서류검토 자동화 서비스",
          award: "부사장상 표창",
          imgSrc: require("@/assets/images/partners/Korea_Energy_Agency.png"),
        },
        {
          id: 12,
          partner: "한국산업단지공단",
          year: "2020",
          project: "ESG 기반 수출위기 기업 모니터링 및 추천 서비스",
          award: "부사장상 표창",
          imgSrc: require("@/assets/images/partners/Korea_Industrial_Complex_Corporation_1.png"),
        },
        {
          id: 13,
          partner: "KOTRA",
          year: "2021",
          project: "AI를 활용한 HS 품목 분류 결정 및 추천 서비스",
          award: "부사장상 표창",
          imgSrc: require("@/assets/images/partners/kotra_1.png"),
        },
        {
          id: 14,
          partner: "건강보험심사평가원",
          year: "2021",
          project: "AI를 활용한 비급여 진료비 자가진단 서비스",
          award: "부사장상 표창",
          imgSrc: require("@/assets/images/partners/Health_Insurance.png"),
        },
        {
          id: 15,
          partner: "한국지능정보사회진흥원",
          year: "2021",
          project: "AI를 활용한 신장암 Segmentation 진단 보조 서비스",
          award: "부사장상 표창",
          imgSrc: require("@/assets/images/partners/nia.png"),
        },
        {
          id: 16,
          partner: "한국농수산식품유통공사",
          year: "2021",
          project: "AI를 활용한 농산물 종합정보 뉴스레터 구독 서비스",
          award: "부사장상 표창",
          imgSrc: require("@/assets/images/partners/Korea_Fisheries.png"),
        },
        {
          id: 17,
          partner: "울산항만공사",
          year: "2021",
          project: "AI를 활용한 차량 검수 작업 자동화 서비스",
          award: "부사장상 표창",
          imgSrc: require("@/assets/images/partners/Ulsan_Port_Authority.png"),
        },
        {
          id: 18,
          partner: "한국산업단지공단",
          year: "2021",
          project: "AI를 활용한 안전사고 예측 서비스",
          award: "부사장상 표창",
          imgSrc: require("@/assets/images/partners/Korea_Industrial_Complex_Corporation_1.png"),
        },
        {
          id: 19,
          partner: "경찰대학",
          year: "2021",
          project: "AI를 활용한 지역별 맞춤 치안지도 서비스",
          award: "부사장상 표창",
          imgSrc: require("@/assets/images/partners/Police_Academy.png"),
        },
        {
          id: 20,
          partner: "세아창원특수강",
          year: "2021",
          project: "AI를 통한 경도 예측 서비스",
          award: "부사장상 표창",
          imgSrc: require("@/assets/images/partners/Seachangwon_Specialty_Course.png"),
        },
        {
          id: 21,
          partner: "한국관광공사",
          year: "2021",
          project: "사용자 경험 기반 맞춤형 스마트 관광 추천 서비스",
          award: "부사장상 표창",
          imgSrc: require("@/assets/images/partners/Korea_Tourism_Organization.png"),
        },
        {
          id: 22,
          partner: "국립공원공단",
          year: "2021",
          project: "AI와 디지털트윈 기술을 활용한 코스 추천 서비스",
          award: "부사장상 표창",
          imgSrc: require("@/assets/images/partners/National_Parks.png"),
        },
        {
          id: 23,
          partner: "국립공원공단",
          year: "2021",
          project: "딥러닝을 활용한 멧돼지 피해 예방 서비스",
          award: "부사장상 표창",
          imgSrc: require("@/assets/images/partners/National_Parks.png"),
        },
        {
          id: 24,
          partner: "한국산업단지공단",
          year: "2021",
          project: "AI를 활용한 안전사고 예측 서비스",
          award: "부사장상 표창",
          imgSrc: require("@/assets/images/partners/Korea_Industrial_Complex_Corporation_1.png"),
        },
        {
          id: 25,
          partner: "한국고용정보원",
          year: "2022",
          project:
            "기업고객을 위한 고용장려금, 기업직업훈련, 채용공고 AI 추천서비스",
          award: "부사장상 표창",
          imgSrc: require("@/assets/images/partners/Korea_Employment_Information_Center.png"),
        },
        {
          id: 26,
          partner: "한국산업단지공단",
          year: "2022",
          project: "인공지능 및 GIS기반 안전점검 지역 추천 서비스",
          award: "부사장상 표창",
          imgSrc: require("@/assets/images/partners/Korea_Industrial_Complex_Corporation_1.png"),
        },
        {
          id: 27,
          partner: "한국관광공사",
          year: "2022",
          project:
            "코로나 맞춤형 관광지도 클러스터링을 통한 부상지역 예측서비스",
          award: "부사장상 표창",
          imgSrc: require("@/assets/images/partners/Korea_Tourism_Organization.png"),
        },
        {
          id: 28,
          partner: "국립공원공단",
          year: "2022",
          project: "야생동물 서식지 예측 서비스 개발",
          award: "부사장상 표창",
          imgSrc: require("@/assets/images/partners/National_Parks.png"),
        },
        {
          id: 29,
          partner: "건강보험심사평가원",
          year: "2022",
          project:
            "기업고객을 위한 고용장려금, 기업직업훈련, 채용공고 AI 추천서비스",
          award: "부사장상 표창",
          imgSrc: require("@/assets/images/partners/Health_Insurance.png"),
        },
        {
          id: 30,
          partner: "한국고용정보원",
          year: "2022",
          project: "자동차보험 집중심사기간 선정모형 서비스개발",
          award: "부사장상 표창",
          imgSrc: require("@/assets/images/partners/Korea_Employment_Information_Center.png"),
        },
        {
          id: 31,
          partner: "KOTRA",
          year: "2022",
          project: "해외 관세청 고시 정보 분석 및 경보 서비스",
          award: "부사장상 표창",
          imgSrc: require("@/assets/images/partners/kotra_1.png"),
        },
        {
          id: 32,
          partner: "한국평가데이터",
          year: "2022",
          project:
            "딥러닝을 이용한 지역별 고용위기 모니터링 및 미스매치 분석 서비스",
          award: "부사장상 표창",
          imgSrc: require("@/assets/images/partners/kodata.png"),
        },
        {
          id: 33,
          partner: "한국수자원공사",
          year: "2022",
          project:
            "AI기반 cctv영상분석을 통한 실시간 도시침수 조기 감지 서비스",
          award: "부사장상 표창",
          imgSrc: require("@/assets/images/partners/Korea_Water_Resources_Corporation_1.png"),
        },
        {
          id: 34,
          partner: "(주)세아창원특수강",
          year: "2022",
          project: "정밀검사 효율화를 위한 선재 불량예측 서비스",
          award: "부사장상 표창",
          imgSrc: require("@/assets/images/partners/Seachangwon_Specialty_Course.png"),
        },
        {
          id: 35,
          partner: "국립공원공단",
          year: "2022",
          project:
            "인공위성과 고정카메라를 활용한 인공지능 스마트 기후변화 모니터링 웹서비스",
          award: "부사장상 표창",
          imgSrc: require("@/assets/images/partners/National_Parks.png"),
        },
        {
          id: 36,
          partner: "한국관광공사",
          year: "2022",
          project:
            "관광중심의 지방소멸 대응정책 도출을 위한 지역관광 활약수준 예측 모델 서비스",
          award: "부사장상 표창",
          imgSrc: require("@/assets/images/partners/Korea_Tourism_Organization.png"),
        },
        {
          id: 37,
          partner: "한국산업단지공단",
          year: "2022",
          project: "ESG 기반 수출위기 기업 모니터링 및 추천 서비스",
          award: "부사장상 표창",
          imgSrc: require("@/assets/images/partners/Korea_Industrial_Complex_Corporation_1.png"),
        },
      ],
    }
  },
  methods: {
    handleSelectChange(value) {},
  },
  computed: {
    filteredProjects() {
      return this.previousProjectData.filter(
        project => project.year === this.selectedOption
      )
    },
  },
}
</script>
  