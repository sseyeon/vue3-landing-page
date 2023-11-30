<template>
  <button
    class="flex items-center justify-center p-2 rounded-full transition-transform transform hover:scale-110 focus:outline-none focus:ring focus:border-blue-300"
    @click="handleClick"
  >
    <font-awesome-icon :icon="['fas', icon]" />
  </button>
</template>
  
  <script>
export default {
  name: "CustomIconButton",
  props: {
    // 버튼의 색상을 변경할 수 있는 프로퍼티
    color: {
      type: String,
      default: "white",
    },
    icon: {
      type: String,
      default: "play",
    },
  },
  methods: {
    handleClick() {
      // 버튼이 클릭되었을 때 수행할 로직 추가
      console.log("Button Clicked!");
    },
  },
};
</script>
  