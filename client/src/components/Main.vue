<!-- src/components/Introduce.vue -->
<template>
  <section class="relative">
    <div
      class="container flex flex-col-reverse lg:flex-row items-center gap-12 mt-14 lg:mt-28"
    >
      <!-- Content -->
      <div class="flex flex-1 flex-col items-center lg:items-start">
        <h2
          class="text-blue-700 text-3xl md:text-4xl lg:text-5xl text-center lg:text-left mb-6 uppercase"
        >
          2023 BIG LEADER <br />Project internship
        </h2>
        <p class="text-gray-600 text-center text-lg lg:text-left mb-6">
          당신의 인공지능 취업의 꿈, 빅리더가 함께합니다.
        </p>
        <div class="flex justify-center flex-wrap gap-2">
          <button type="button" class="btn btn-primary">Apply</button>
          <button type="button" class="btn btn-outline-primary">Review</button>
        </div>
      </div>
      <!-- Image -->
      <div class="flex justify-center flex-1 mb-10 md:mb-16 lg:mb-0 z-10">
        <img
          class="w-5/6 h-5/6 sm:w-3/4 sm:h-3/4 md:w-full md:h-full"
          src="../assets/images/hero-bg.png"
        />
      </div>
    </div>
    <!-- Rounded Rectangle -->
    <div
      class="hidden md:block overflow-hidden bg-blue-700 bg-opacity-60 rounded-l-full absolute h-80 w-2/4 top-32 right-0"
    ></div>
  </section>
</template>
  
  <script>
export default {
  name: "Introduce",
};
</script>
  