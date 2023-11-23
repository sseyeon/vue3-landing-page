<!-- src/components/CardList.vue -->
<template>
  <div>
    <!-- CardList 내용 정의 -->
    <h2>Card List Component</h2>
    <ul>
      <li>Card 1</li>
      <li>Card 2</li>
      <li>Card 3</li>
    </ul>
  </div>
</template>
  
  <script>
export default {
  name: "CardList",
};
</script>
  
  <style scoped>
/* 컴포넌트에 대한 스타일을 정의할 수 있습니다. */
h2 {
  color: #333;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin-bottom: 8px;
}
</style>
  