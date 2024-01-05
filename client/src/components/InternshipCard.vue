<template>
  <div
    class="relative overflow-hidden rounded-2xl shadow-lg h-[260px] group cursor-pointer mb-16"
    @click="redirectToInternship"
  >
    <img
      class="transition-transform w-full group-hover:scale-110 duration-200"
      :src="project.imgSrc"
      alt=""
    />

    <div
      class="absolute inset-0 flex items-center bg-gradient-to-t from-black/60 to-transparent"
    >
      <div class="p-4 ml-4 text-white">
        <div class="font-semibold text-3xl mb-1">{{ project.project }}</div>
        <div class="text-lg">{{ project.partner }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    project: Object, // 리뷰 정보를 받는 프로퍼티
  },
  methods: {
    redirectToInternship() {
      this.$emit("internship-click", this.project.id)
    },
  },
}
</script>

<style>
</style>