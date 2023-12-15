<template>
  <div
    class="relative overflow-hidden rounded-2xl shadow-lg max-h-[260px] group cursor-pointer mb-8"
  >
    <img
      class="transition-transform w-full group-hover:scale-110 duration-200"
      :src="require('@/assets/images/swipe-img-03.jpg')"
      alt=""
    />

    <div
      class="absolute inset-0 flex items-center bg-gradient-to-t from-black/60 to-transparent"
    >
      <div class="p-4 ml-4 text-white">
        <div class="font-semibold text-3xl mb-1">스마트수자원관리</div>
        <div class="text-lg">한국수자원공사</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>