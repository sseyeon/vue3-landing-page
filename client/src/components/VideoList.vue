<!-- src/components/VideoList.vue -->
<template>
  <!-- Video -->
  <div class="sm:w-3/4 lg:w-5/12 mx-auto mt-8">
    <iframe
      width="100%"
      height="315"
      src="https://www.youtube.com/embed/GR6tIK7nE5g"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
  </div>
</template>

<script>
export default {
  name: "VideoList",
};
</script>
