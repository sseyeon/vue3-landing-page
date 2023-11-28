<template>
  <div class="slide-item">
    <img :src="imageSrc" alt="Slide Image" />
    <div class="slide-content">
      <h2>{{ title }}</h2>
      <p>{{ description }}</p>
    </div>
  </div>
</template>
  
  <script>
export default {
  name: "SlideItem",
  props: {
    imageSrc: String,
    title: String,
    description: String,
  },
};
</script>
  
  <style scoped>
.slide-item {
  position: relative;
  width: 100%;
  height: 100%;
}

img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.slide-content {
  position: absolute;
  bottom: 20px;
  left: 20px;
  color: white;
}
</style>
  