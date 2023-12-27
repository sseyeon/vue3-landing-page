<template>
  <div class="relative w-full h-screen bg-zinc-900/70">
    <img
      class="absolute w-full h-full object-cover mix-blend-overlay"
      :src="loginImg"
      alt="/"
    />

    <div class="flex justify-center items-center h-full">
      <div class="max-w-[400px] w-full mx-auto bg-white p-8 rounded-md">
        <h2 class="text-4xl font-bold text-center py-4">
          <p>빅리더관리자</p>
          <p class="mt-2">LOGIN</p>
        </h2>
        <form @submit.prevent="handleLogin">
          <div class="flex flex-col mb-4">
            <label>아이디</label>
            <input
              class="border relative bg-gray-100 p-2"
              type="text"
              v-model="userid"
              required
            />
          </div>
          <div class="flex flex-col">
            <label>패스워드</label>
            <input
              class="border relative bg-gray-100 p-2"
              type="password"
              v-model="password"
              required
            />
          </div>
          <button
            type="submit"
            class="w-full py-3 mt-8 rounded-md bg-black hover:text-stone-400 relative text-white"
          >
            LOGIN
          </button>
        </form>
        <router-link to="/admin/signup">
          <button
            class="w-full py-3 mt-2 rounded-md bg-black hover:text-stone-400 relative text-white"
          >
            계정이 없어요, 회원가입 하기
          </button>
        </router-link>
        <router-link to="/">
          <button
            class="w-full py-3 mt-2 rounded-md bg-white relative text-gray-500"
          >
            홈페이지로 돌아가기
            <font-awesome-icon :icon="['fas', 'circle-chevron-right']" />
          </button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Admin",
  data() {
    return {
      userid: "",
      password: "",
      loginImg: require("@/assets/images/login.jpg"), // 이미지 경로를 설정하세요
    };
  },
  methods: {
    handleLogin() {
      // 로그인 로직 구현
      console.log("로그인 시도: ", this.userid, this.password);
    },
  },
};
</script>
