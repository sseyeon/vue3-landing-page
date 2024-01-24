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
import InstructorCard from "@/components/InstructorCard.vue"
import Footer from "@/components/layout/Footer.vue"

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
        {
          id: 6,
          name: "박길식",
          position: "교수",
          imgSrc: require("@/assets/images/instructors/Park_Gilsik.png"),
          expertise: "NLP, ChatGPT",
          responsibilityCoordinator: "경희대학교 테크노경영대학원 교수",
          responsibilities:
            "주식회사아트텍 연구소장. AI 연구 강의<br />경희대학교 테크노경영대학원 AI기술경영학과. AI<br />건국대학교 정보통신대학원 인공지능전공. 머신러닝<br />저서<br />- Android Studio를 활용한 안드로이드 프로그래밍. 2022<br />- 정보처리기사필기. 2009<br />- 미니족보 정보처리기사필기. 2008",
        },
        {
          id: 7,
          name: "김태영",
          position: "대표",
          imgSrc: require("@/assets/images/instructors/Kim-Tae-young.png"),
          expertise: "ChatGPT",
          responsibilityCoordinator: "(주)인공지능팩토리 대표이사",
          responsibilities:
            "마이크로소프트 지역이사 (Regional Director)<br>저서<br> - 블록과 함께 하는 파이썬 딥러닝 케라스 2017<br>수상<br> - 영국 캠브리지 국제인명센터의 '21세기 2000명의 탁월한 지식인'(2014년)<br> - 2020 공개SW 산업유공자 정보통신산업진흥원장상 수상",
        },
        {
          id: 8,
          name: "장철원",
          position: "대표",
          imgSrc: require("@/assets/images/instructors/Chulwon_Jang.png"),
          expertise: "Machine Learning",
          responsibilityCoordinator: "(주)나노쿠키 대표이사",
          responsibilities:
            "패스트캠퍼스 강사<br>한국정보통신기술협회 외부교수<br>저서<br> - 선형대수와 통계학으로 배우는 머신러닝 with 파이썬 2021<br> - 알고리즘 구현으로 배우는 선형대수 with 파이썬 2021<br> - 웹 크롤링 & 데이터 분석 with 파이썬 2022<br> - 몬테카를로 시뮬레이션으로 배우는 확률통계 with 파이썬 2023",
        },
        {
          id: 9,
          name: "우재남",
          position: "교수",
          imgSrc: require("@/assets/images/instructors/JaeNam_Woo.png"),
          expertise: "Python & SQL",
          responsibilityCoordinator: "한양사이버대학교 겸임교수",
          responsibilities:
            "가천IT대학교 컴퓨터공학과 겸임교수<br>저서<br> - 이것이 리눅스다 3판 2023<br> - 이것이 Windows Serve다(개정판) 2023<br> - C# for Beginner 2022",
        },
        {
          id: 10,
          name: "서진수",
          position: "대표",
          imgSrc: require("@/assets/images/instructors/Jinsu_Seo.png"),
          expertise: "Crawler & SQL",
          responsibilityCoordinator: "(주)가치랩스 대표 / 명견만리 출연",
          responsibilities:
            "저서<br> - R까기<br> - R프로그램 데이터분석 2014<br> - 파이썬 데이터수집 업무자동화<br> - 파이썬 웹 크롤러제작 2019<br>강의경력<br> - (주)삼성전자 빅데이터 분석<br> - (주)현대중공업 빅데이터 수집 & 분석<br> - (주)현대엘리베이터 파이썬 데이터분석",
        },
        {
          id: 11,
          name: "임선집",
          position: "강사",
          imgSrc: require("@/assets/images/instructors/Seonjip_Lim.png"),
          expertise: "Machine Learning, NLP",
          responsibilityCoordinator: "작가, 강사",
          responsibilities:
            "서울여대 강사 : 빅데이터 경영 프로그래밍, 디지털 서비스 기획 실습<br>성공회대학교 강사 : 데이터로읽는미래사회<br>을지대학교 강사 : 데이터분석<br>차의과학대학 강사 : 데이터 분석의 기초<br>저서<br> - 플로우가 보이는 머신러닝 프로젝트 2022<br> - 오렌지3 데이터 분석 with 파이썬 2023<br> - 허깅페이스 트랜스포머 딥러닝 영어원서 번역 2023",
        },
        {
          id: 12,
          name: "강승일",
          position: "이사",
          imgSrc: require("@/assets/images/instructors/SeungIll_Kang.jpeg"),
          expertise: "Tableau",
          responsibilityCoordinator: "빅스데이터 교육서비스팀 이사",
          responsibilities:
            "영남일보 디지털혁신위원<br>강의경력<br> - 인천공항공사 : 데이터 시각화를 위한 태블로<br> - KB국민은행 : 태블로 활용한 데이터 시각화 과정<br> - 신한은행 : 데이터 시각화를 위한 태블로",
        },
        {
          id: 13,
          name: "고우주",
          position: "이사",
          imgSrc: require("@/assets/images/instructors/Ko_Wooju.png"),
          expertise: "Deep Learning",
          responsibilityCoordinator:
            "명지대학교 AI 빅데이터 사업단 ICT융합 겸임교수",
          responsibilities:
            "㈜쿱와 대표이사. 책임 데이터분석가<br>강의경력<br> - INTEL : 인텔 Facilitator of AI for Future workforce<br>- 한국데이터산업진흥원 빅데이 전문강사<br>- 엔코아 Play.it : 청년 빅데이터 양성 과정 기획 및 강의<br>- 강원대학교 융합빅데이터사업단 : 정밀의료 빅데이터 인재양성 강사",
        },
        {
          id: 14,
          name: "신백균",
          position: "전문위원",
          imgSrc: require("@/assets/images/instructors/Sin.png"),
          expertise: "",
          responsibilityCoordinator: "한국생산성본부 전문위원",
          responsibilities:
            "한국생산성본부 : 교육 및 컨설팅 기획/운영<br>KAIST 연구소 : KML Converter 연구수행<br>KAIST 학사<br>저서<br> - 머신러닝·딥러닝 문제해결 전략 2022",
        },
      ],
    }
  },
}
</script>
  