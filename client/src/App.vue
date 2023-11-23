<!-- src/App.vue -->
<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
/* 전역 CSS 스타일을 정의할 수 있습니다. */
body {
  font-family: "Arial", sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  height: 100%;
}
#id {
  min-height: 100%;
  position: relative;
  padding-bottom: 60px;
}
footer {
  bottom: 0;
}
</style>
