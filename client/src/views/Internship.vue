<!-- src/views/Cocreation.vue -->
<template>
  <div>
    <Header />
    <TitleComponent
      titleText="Internship"
      subText="빅리더와 함께한 <br />공공기관 인턴십 프로젝트를 소개합니다."
    />
    <Search />
    <div class="container max-w-screen-lg mt-10 mb-4">
      <InternshipCard
        v-for="projectItem in projectData"
        :key="projectItem.id"
        :project="projectItem"
      />
    </div>
    <Footer />
  </div>
</template>
      
      <script>
import Header from "@/components/layout/Header.vue";
import TitleComponent from "@/components/TitleComponent.vue";
import InternshipCard from "@/components/InternshipCard.vue";
import Search from "@/components/Search.vue";
import Footer from "@/components/layout/Footer.vue";

export default {
  name: "Cocreation",
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
          name: "한국관광공사",
          project: "지역 소멸 및 인구 감소 대응",
          imgSrc: require("@/assets/images/partners/Korea_Tourism_Organization.png"),
          link: "https://example.com/news1",
        },
        {
          id: 2,
          name: "건강보험심사평가원",
          project: "Healthcare",
          imgSrc: require("@/assets/images/partners/Health Insurance.png"),
          link: "https://example.com/news1",
        },
        {
          id: 3,
          name: "한국수자원공사",
          project: "스마트수자원관리",
          imgSrc: require("@/assets/images/partners/Korea_Water_Resources_Corporation_1.png"),
          link: "https://example.com/news1",
        },
        {
          id: 4,
          name: "국립공원공단",
          project: "스마트 ECO",
          imgSrc: require("@/assets/images/partners/National_Parks.png"),
          link: "https://example.com/news1",
        },
        {
          id: 5,
          name: "세아베스틸",
          project: "AI 소재",
          imgSrc: require("@/assets/images/partners/Ceabestil.png"),
          link: "https://example.com/news1",
        },
        {
          id: 6,
          name: "세아창원특수강",
          project: "공정혁신",
          imgSrc: require("@/assets/images/partners/Seachangwon_Specialty_Course.png"),
          link: "https://example.com/news1",
        },
        {
          id: 7,
          name: "대한무역투자진흥공사",
          project: "스마트 무역",
          imgSrc: require("@/assets/images/partners/kotra_1.png"),
          link: "https://example.com/news1",
        },
        {
          id: 8,
          name: "한국산업단지공단",
          project: "산업혁신",
          imgSrc: require("@/assets/images/2023-internship/2023_Korea_Industrial_Complex_Corporation.jpg"),
          link: "https://example.com/news1",
        },
        {
          id: 9,
          name: "한국고용정보원, 근로복지공단",
          project: "스마트고용",
          imgSrc: require("@/assets/images/partners/Korea_Employment_Information_Center.png"),
          link: "https://example.com/news1",
        },
        {
          id: 10,
          name: "사회보장정보원",
          project: "국민행복 서비스",
          imgSrc: require("@/assets/images/partners/Korea_Social_Security_Administration.png"),
          link: "https://example.com/news1",
        },
        {
          id: 11,
          name: "SpringCloud,SOS LAB",
          project: "농촌형 모빌리티",
          imgSrc: require("@/assets/images/partners/SpringCloud.png"),
          link: "https://example.com/news1",
        },
        {
          id: 12,
          name: "한국평가데이터",
          project: "ESG",
          imgSrc: require("@/assets/images/partners/kodata.png"),
          link: "https://example.com/news1",
        },
      ],
    };
  },
};
</script>
      