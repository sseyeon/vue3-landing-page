<template>
  <div class="w-screen h-screen flex">
    <!-- Side bar -->
    <div class="w-[350px] h-full text-white">
      <div class="h-[50px] bg-zinc-800 flex justify-start items-center">
        <div class="px-[20px]">
          <h3 class="text-xl font-bold">BIGLEADER Admin</h3>
        </div>
      </div>
      <div class="h-[calc(100vh-50px)] bg-zinc-800 py-[20px]">
        <div class="px-[20px] flex flex-col space-y-[10px]">
          <router-link
            to="/admin/dashboard"
            class="inline-flex relative items-center py-[10px] px-[10px] w-full text-sm font-medium rounded-md border-gray-200 hover:bg-gray-300 hover:text-zinc-800"
          >
            <font-awesome-icon
              class="mr-2 w-[20px] h-[20px] fill-current"
              :icon="['fas', 'newspaper']"
            />
            뉴스 게시판 관리
          </router-link>

          <router-link
            to="/admin/dashboard"
            class="inline-flex relative items-center py-[10px] px-[10px] w-full text-sm font-medium rounded-md border-gray-200 hover:bg-gray-300 hover:text-zinc-800"
          >
            <font-awesome-icon
              class="mr-2 w-[20px] h-[20px] fill-current"
              :icon="['fas', 'exchange-alt']"
            />
            스와이프 컨텐츠 관리
          </router-link>
          <router-link
            to="/admin/dashboard"
            class="inline-flex relative items-center py-[10px] px-[10px] w-full text-sm font-medium rounded-md border-gray-200 hover:bg-gray-300 hover:text-zinc-800"
          >
            <font-awesome-icon
              class="mr-2 w-[20px] h-[20px] fill-current"
              :icon="['fas', 'tasks']"
            />
            프로젝트 관리
          </router-link>
          <router-link
            to="/admin/dashboard"
            class="inline-flex relative items-center py-[10px] px-[10px] w-full text-sm font-medium rounded-md border-gray-200 hover:bg-gray-300 hover:text-zinc-800"
          >
            <font-awesome-icon
              class="mr-2 w-[20px] h-[20px] fill-current"
              :icon="['fas', 'comments']"
            />
            수료생 후기 관리
          </router-link>
          <router-link
            to="/admin/dashboard"
            class="inline-flex relative items-center py-[10px] px-[10px] w-full text-sm font-medium rounded-md border-gray-200 hover:bg-gray-300 hover:text-zinc-800"
          >
            <font-awesome-icon
              class="mr-2 w-[20px] h-[20px] fill-current"
              :icon="['fas', 'user-shield']"
            />
            관리자 계정 관리
          </router-link>
        </div>
      </div>
    </div>
    <div class="w-full h-full bg-gray-400">
      <div
        class="h-[50px] bg-white border flex shadow-sm px-[20px] py-[10px] w-full z-10 justify-between items-center"
      >
        <span>뉴스 게시판 관리</span>
        <font-awesome-icon
          class="mr-2 w-[20px] h-[20px] fill-current cursor-pointer"
          :icon="['fas', 'sign-out-alt']"
        />
      </div>
      <div class="h-[calc(100vh-50px)] bg-white">menu</div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>