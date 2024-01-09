<!-- src/components/EnterpriseCard.vue -->
<template>
  <div class="flex flex-col shadow-md max-h-[320px] bg-white rounded-lg">
    <div class="p-6 flex flex-col items-center h-[206px] mb-6">
      <img
        :src="enterprise.imgSrc"
        class="h-[74px] w-full object-contain"
        alt=""
      />
      <h3 class="mt-5 mb-2 text-black text-base font-medium">
        💡 {{ enterprise.project }}
      </h3>

      <p class="mb-2 text-gray-600 font-light">{{ enterprise.partner }}</p>
    </div>
    <hr class="border-b text-gray-50" />
    <div class="flex p-6">
      <button class="flex-1 btn btn-primary" @click="redirectToInternship">
        자세히
      </button>
    </div>
  </div>
</template>
  
  <script>
export default {
  name: "EnterpriseCard",
  props: {
    enterprise: Object, // 리뷰 정보를 받는 프로퍼티
  },
  methods: {
    redirectToInternship() {
      this.$emit("internship-click", this.enterprise.id)
    },
  },
}
</script>
  