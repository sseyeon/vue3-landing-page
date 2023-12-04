<!-- src/views/Instructors.vue -->
<template>
  <div>
    <Header />
    <TitleComponent
      titleText="Instructor"
      subText="각 분야 국내 최고 수준의 전문가들과 함께 합니다."
    />
    <div class="container lg:w-8/12 mt-12">
      <InstructorCard
        v-for="instructorsItem in instructorData"
        :key="instructorsItem.id"
        :instructor="instructorsItem"
      />
    </div>
    <Footer />
  </div>
</template>
  
  <script>
import Header from "@/components/layout/Header.vue";
import TitleComponent from "@/components/TitleComponent.vue";
import InstructorCard from "@/components/InstructorCard.vue";
import Footer from "@/components/layout/Footer.vue";

export default {
  name: "Instructors",
  components: {
    Header,
    TitleComponent,
    InstructorCard,
    Footer,
  },
  data() {
    return {
      instructorData: [
        {
          id: 1,
          name: "전종식",
          position: "교수",
          imgSrc: require("@/assets/images/instructors/Jongsik_Jeon.png"),
          expertise: "AI strategy and project planning",
          responsibilityCoordinator: "청년AI혁신가드닝 프로그램 책임교수",
          responsibilities:
            "경남대학교 링크플러스 사업단 산학협력 중점 교수<br />기획재정부 준정부기관 경영평가단 평가위원<br />경남대학교 빅리더AI아카데미 책임교수<br />경남대학교 청년 AI 혁신 가드닝 프로그램 총괄책임교수",
        },
        {
          id: 2,
          name: "전하용",
          position: "교수",
          imgSrc: require("@/assets/images/instructors/HaYong_jeon.png"),
          expertise: "Python",
          responsibilityCoordinator: "경남대학교 교수",
          responsibilities: "경남대학교 컴퓨터공학과 교수",
        },
        {
          id: 3,
          name: "강영식",
          position: "교수",
          imgSrc: require("@/assets/images/instructors/Yunsik_Kang.png"),
          expertise: "RPA",
          responsibilityCoordinator: "명지대학교 교수",
          responsibilities:
            "명지대학교 경영정보학과 교수<br />명지대학교 SW인재육성단 단장<br />KAIST 디지털혁신연구센터 자문교수<br />행정안전부 자문, 일하는방식의 디지털 혁신을 위한 범정부 RPA 적용 가이드라인 마련<br />",
        },
        {
          id: 4,
          name: "손기동",
          position: "대표",
          imgSrc: require("@/assets/images/instructors/Son.png"),
          expertise: "Crawler & SQL",
          responsibilityCoordinator: "(주)더조은내일 대표이사",
          responsibilities:
            "㈜한국기술원빅데이터 교육운영 총괄<br />한국미래인재능력개발원 R, Python 프로젝트 / 강의<br />저서<br />- 슬기로운 파이썬생활 데이터 싹쓰리 & 업무자동화 (2020)<br />- 너 혼자서도 할 수 있어 SQL능력자 (2023)",
        },
        {
          id: 5,
          name: "이상화",
          position: "교수",
          imgSrc: require("@/assets/images/instructors/Sanghwa_Lee.png"),
          expertise: "Computer Vision",
          responsibilityCoordinator: "서울대학교 교수",
          responsibilities:
            "한양대학교 강의교수. 전기전자컴퓨터 분야 강의<br />주요연구분야<br />- 영상 신호 처리 및 컴퓨터 비전<br />- 3D 기하학 및 스테레오 카메라 비전<br />- 패턴인식, 머신러닝 및 인공지능<br />- 지능형 자동화 시스템<br />- 확률모델 및 통계적 신호 처리",
        },
      ],
    };
  },
};
</script>
  