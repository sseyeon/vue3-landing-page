<!-- TitleComponent.vue -->
<template>
  <section class="mt-10">
    <!-- Heading -->
    <div
      class="container text-center"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <h1 class="text-blue-700 font-semibold text-xl">{{ titleText }}</h1>
      <h1 class="mt-4 font-semibold text-3xl" v-html="subText"></h1>
    </div>
  </section>
</template>
  
  <script>
export default {
  props: {
    titleText: {
      type: String,
      required: true,
    },
    subText: {
      type: String,
      required: true,
    },
  },
}
</script>
  