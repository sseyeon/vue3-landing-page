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
      />
    </div>
    <!-- Display news based on the selected category -->
    <div
      class="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-16 max-w-screen-lg mt-4 mb-16"
    >
      <ProjectCard
        v-for="previousProjectItem in filteredProjects"
        :key="previousProjectItem.id"
        :previousProject="previousProjectItem"
      />
    </div>
    <Footer />
  </div>
</template>
  
  <script>
import Header from "@/components/layout/Header.vue";
import TitleComponent from "@/components/TitleComponent.vue";
import SelectBox from "@/components/CustomSelectBox.vue";
import ProjectCard from "@/components/ProjectCard.vue";
import Footer from "@/components/layout/Footer.vue";

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
        { label: "2023년", value: "2023" },
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
          year: "2021",
          project: "AI를 활용한 HS 품목 분류 결정 및 추천 서비스",
          award: "부사장상 표창",
          imgSrc: require("@/assets/images/partners/kotra_1.png"),
        },
        {
          id: 6,
          partner: "건강보험심사평가원",
          year: "2021",
          project: "AI를 활용한 비급여 진료비 자가진단 서비스",
          award: "부사장상 표창",
          imgSrc: require("@/assets/images/partners/Health Insurance.png"),
        },
        {
          id: 7,
          partner: "한국지능정보사회진흥원",
          year: "2021",
          project: "AI를 활용한 신장암 Segmentation 진단 보조 서비스",
          award: "부사장상 표창",
          imgSrc: require("@/assets/images/partners/nia.png"),
        },
        {
          id: 8,
          partner: "한국농수산식품유통공사",
          year: "2021",
          project: "AI를 활용한 농산물 종합정보 뉴스레터 구독 서비스",
          award: "부사장상 표창",
          imgSrc: require("@/assets/images/partners/Korea_Fisheries.png"),
        },
        {
          id: 9,
          partner: "울산항만공사",
          year: "2021",
          project: "AI를 활용한 차량 검수 작업 자동화 서비스",
          award: "부사장상 표창",
          imgSrc: require("@/assets/images/partners/Ulsan_Port_Authority.png"),
        },
      ],
    };
  },
  methods: {
    handleSelectChange(value) {},
  },
  computed: {
    filteredProjects() {
      return this.previousProjectData.filter(
        (project) => project.year === this.selectedOption
      );
    },
  },
};
</script>
  