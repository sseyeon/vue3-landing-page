<template>
  <!-- 검색 -->
  <section class="container" data-aos="fade-up" data-aos-duration="1000">
    <div
      class="sm:w-3/4 lg:w-5/12 mt-4 relative rounded-3xl shadow-sm text-center mx-auto"
    >
      <input
        type="text"
        class="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:border-blue-300 focus:ring focus:ring-blue-200 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
        placeholder="검색어를 입력하세요"
      />
      <div
        class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"
      >
        <font-awesome-icon :icon="['fas', 'magnifying-glass']" />
      </div>
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style>
</style>