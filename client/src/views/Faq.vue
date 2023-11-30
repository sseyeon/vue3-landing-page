<!-- src/views/Faq.vue -->
<template>
  <div>
    <Header />
    <TitleComponent
      titleText="FAQ"
      subText="빅리더의 자주 묻는 질문을 확인하세요."
    />
    <section class="mb-8 p-4">
      <FAQ :faqs="faqs" />
    </section>
    <Footer />
  </div>
</template>
      
      <script>
import Header from "@/components/layout/Header.vue";
import FAQ from "@/components/FAQ.vue";
import TitleComponent from "@/components/TitleComponent.vue";
import Footer from "@/components/layout/Footer.vue";

export default {
  name: "Faq",
  components: {
    Header,
    FAQ,
    TitleComponent,
    Footer,
  },
  data() {
    return {
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
        {
          id: 5,
          question: "지원서의 증빙서류는 무엇인가요?",
          answer:
            "💡 지원서 내 증빙서류는 작성한 지원서에 기반하여 자유롭게 첨부하는 것을 원칙으로 합니다. 재학증명서, 성적증명서, 각종 경력 및 자격 관련 증빙 등 필요하신 사항을 올려주시면 됩니다.",
          expanded: false,
        },
        {
          id: 6,
          question: "컴퓨터 관련 학과 전공자가 아니면 신청할 수 없나요?",
          answer:
            "💡 아닙니다. 파이썬에 대한 기초지식만 가지고 있다면 전공에 관계없이 누구나 신청할 수 있습니다.",
          expanded: false,
        },
        {
          id: 7,
          question: "프로젝트는 언제부터 진행되나요?",
          answer:
            "💡 교육기간이 끝난 후 2023.09.01~11.24동안 진행되며, 12주간 기업에 현장파견을 하여 프로젝트를 진행합니다.",
          expanded: false,
        },
        {
          id: 8,
          question: "수업은 어떻게 진행되나요?",
          answer:
            "💡 온라인 교육 3주(6.01~6.21), 이론실습 교육 9주(6.23~8.25) 로 진행됩니다.",
          expanded: false,
        },
        {
          id: 9,
          question: "기숙사 생활은 어떻게 진행되나요?",
          answer:
            "💡 경희대학교 평화복지대학원 기숙사에서 9주간 생활하게 되며 주말 동안 외출이 가능합니다. 다만, 주말에 특강이 있을 시 외출이 불가하며 과제수행을 권장드립니다.",
          expanded: false,
        },
        {
          id: 10,
          question: "프로젝트 진행시에는 서울 본가에서 출퇴근이 가능한가요?",
          answer:
            "💡 서울에서 진행하는 프로젝트를 진행하시는 경우 집에서 출퇴근이 가능하나 타지역에서 프로젝트를 진행하는 경우 지원금을 활용하여 팀원들과 같이 숙소를 구하시면 됩니다. 예를 들어 한국관광공사나 건강보험심사평가원, 국립공원공단 프로젝트를 하는 경우 3기관 모두 원주에 본사가 있습니다. 이 경우 같은 팀원들과 함께 방을 잡으시면 됩니다.",
          expanded: false,
        },
        {
          id: 11,
          question:
            "계절학기나 2학기 때 현장실습으로 학점을 인정받을 수 있나요?",
          answer:
            "💡 자세한 내용은 해당 학교에 문의 부탁드리며 이와 관련하여 빅리더에 문의주시면 적극적으로 프로세스를 맞추어서 진행하도록 하겠습니다.",
          expanded: false,
        },
        {
          id: 12,
          question:
            "지원서에 프로젝트 희망기업 작성란이 있던데 주어진 리스트가 있는건가요? 아님 제가 임의 작성하면 될까요?",
          answer:
            "💡 포스터 및 홈페이지에 기입되어 있는 현장파견기업 리스트 중 선호하시는 기업을 작성해주시면 됩니다.",
          expanded: false,
        },
        {
          id: 13,
          question: "면접은 어떻게 진행되나요?",
          answer: "💡 면접은 온라인으로 진행될 예정입니다.",
          expanded: false,
        },
        {
          id: 14,
          question: "지원금 60만원에 식비와 기숙사비는 얼마정도 포함되나요?",
          answer: "💡 식비와 기숙사비는 전액 지원금에서 활용됩니다.",
          expanded: false,
        },
        {
          id: 15,
          question: "세미나에 참여했던 것이 가점으로 반영되나요?",
          answer: "💡 추가되는 가산점은 없지만 한분 한분 확인하고 있습니다.",
          expanded: false,
        },
        {
          id: 16,
          question:
            "프로젝트 기간에 자유롭게 시간 사용이 가능한지 궁금합니다.(ex 대학수업 병행)",
          answer:
            "💡 수업을 받으면서 프로젝트를 진행 하는것은 현실적으로 어려우며 팀을 이뤄서 활동하기 때문에 개인적인 시간에 모든 것을 맞춰 줄 수는 없지만 그 이후 남은 시간은 자유롭게 사용이 가능합니다.",
          expanded: false,
        },
      ],
    };
  },
};
</script>
      