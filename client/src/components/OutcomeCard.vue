<template>
  <div class="relative max-w-xs overflow-hidden rounded-2xl shadow-lg">
    <img class="" :src="outcome.imgSrc" alt="" />
  </div>
</template>
    
    <script>
export default {
  name: "OutcomeCard",
  props: {
    outcome: Object, // 리뷰 정보를 받는 프로퍼티
  },
}
</script>
    
    <style scoped>
/* 추가적인 스타일링을 원하는 경우 여기에 작성하세요. */
</style>
    