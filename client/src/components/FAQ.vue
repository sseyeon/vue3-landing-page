<!-- src/components/FAQ.vue -->
<template>
  <!-- FAQ Items -->
  <div class="flex flex-col sm:w-3/4 lg:w-5/12 mt-12 mx-auto">
    <!-- FAQ Item -->
    <div v-for="(faq, index) in faqs" :key="index" class="mb-4">
      <div
        @click="toggleAnswer(index)"
        class="flex items-center border-b py-4 cursor-pointer transition duration-300 ease-in-out"
      >
        <span class="flex-1 font-medium">{{ faq.question }}</span>
        <font-awesome-icon
          :icon="['fas', faq.expanded ? 'chevron-up' : 'chevron-down']"
          class="cursor-pointer"
        />
      </div>
      <!-- Answer -->
      <div
        v-show="faq.expanded"
        class="text-gray-600 mt-2 transition duration-300 ease-in-out"
      >
        {{ faq.answer }}
      </div>
    </div>
  </div>
</template>
  
  <script>
export default {
  name: "FAQ",
  data() {
    return {
      faqs: [
        {
          question: "신청 자격은 어떻게 되나요?",
          answer:
            "💡 만34세 이하의 대학 졸업예정자 및 졸업자, 휴학생 및 모든 청년들로 대학 졸업예정자는 2023년 6월까지 졸업이 가능하여야 합니다.",
          expanded: false,
        },
        {
          question: "교육과정은 무료인가요?",
          answer:
            "💡 교육기간 동안 청년지원금 최대 월 60만원(청년지원비+숙박비+식비 포함)을 지원해드립니다.",
          expanded: false,
        },
        {
          question: "선정은 어떤 절차로 이루어지나요?",
          answer:
            "💡 선정평가는 결격사유가 없는 신청자 중 서면 및 면접평가를 통해 선발합니다. 서면평가는 지원자의 지원 적격여부, 기본자질, 역량을 기준으로, 면접평가는 지원자의 지원동기 및 자기소개, 교육 및 취업 의지, 전문성 등을 기준으로 평가할 예정입니다.",
          expanded: false,
        },
        {
          question: "수료 기준은 어떻게 되나요?",
          answer:
            "💡 전체 교육시간의 일정 시간 이상을 이수한 경우 수료로 인정하며, 교육 종료 후 수료증이 발급됩니다. 병결, 사고결석 등 부득이한 결석의 경우 승인을 얻어 결석일수에서 제외 가능합니다.",
          expanded: false,
        },
        {
          question: "수료 기준은 어떻게 되나요?",
          answer:
            "💡 전체 교육시간의 일정 시간 이상을 이수한 경우 수료로 인정하며, 교육 종료 후 수료증이 발급됩니다. 병결, 사고결석 등 부득이한 결석의 경우 승인을 얻어 결석일수에서 제외 가능합니다.",
          expanded: false,
        },
        {
          question: "수료 기준은 어떻게 되나요?",
          answer:
            "💡 전체 교육시간의 일정 시간 이상을 이수한 경우 수료로 인정하며, 교육 종료 후 수료증이 발급됩니다. 병결, 사고결석 등 부득이한 결석의 경우 승인을 얻어 결석일수에서 제외 가능합니다.",
          expanded: false,
        },
        {
          question: "수료 기준은 어떻게 되나요?",
          answer:
            "💡 전체 교육시간의 일정 시간 이상을 이수한 경우 수료로 인정하며, 교육 종료 후 수료증이 발급됩니다. 병결, 사고결석 등 부득이한 결석의 경우 승인을 얻어 결석일수에서 제외 가능합니다.",
          expanded: false,
        },
        {
          question: "수료 기준은 어떻게 되나요?",
          answer:
            "💡 전체 교육시간의 일정 시간 이상을 이수한 경우 수료로 인정하며, 교육 종료 후 수료증이 발급됩니다. 병결, 사고결석 등 부득이한 결석의 경우 승인을 얻어 결석일수에서 제외 가능합니다.",
          expanded: false,
        },
        {
          question: "수료 기준은 어떻게 되나요?",
          answer:
            "💡 전체 교육시간의 일정 시간 이상을 이수한 경우 수료로 인정하며, 교육 종료 후 수료증이 발급됩니다. 병결, 사고결석 등 부득이한 결석의 경우 승인을 얻어 결석일수에서 제외 가능합니다.",
          expanded: false,
        },
        {
          question: "수료 기준은 어떻게 되나요?",
          answer:
            "💡 전체 교육시간의 일정 시간 이상을 이수한 경우 수료로 인정하며, 교육 종료 후 수료증이 발급됩니다. 병결, 사고결석 등 부득이한 결석의 경우 승인을 얻어 결석일수에서 제외 가능합니다.",
          expanded: false,
        },
      ],
    };
  },

  methods: {
    toggleAnswer(index) {
      this.faqs[index].expanded = !this.faqs[index].expanded;
    },
  },
};
</script>
  