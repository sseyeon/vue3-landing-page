<template>
  <div class="relative w-full h-screen bg-zinc-900/70">
    <img
      class="absolute w-full h-full object-cover mix-blend-overlay"
      :src="loginImg"
      alt="/"
    />

    <div class="flex justify-center items-center h-full">
      <form
        @submit.prevent="handleSubmit"
        class="max-w-[400px] w-full mx-auto bg-white p-8 rounded-md"
      >
        <h2 class="text-4xl font-bold text-center py-4">회원가입</h2>

        <div class="flex flex-col mb-4">
          <label>이름</label>
          <input
            class="border relative bg-gray-100 p-2"
            type="text"
            name="name"
            v-model="formData.name"
            required
          />
        </div>

        <div class="flex flex-col mb-4">
          <label>아이디</label>
          <input
            class="border relative bg-gray-100 p-2"
            type="text"
            name="userid"
            v-model="formData.userid"
            required
          />
        </div>

        <div class="flex flex-col mb-4">
          <label>패스워드</label>
          <input
            class="border relative bg-gray-100 p-2"
            type="password"
            name="password"
            v-model="formData.password"
            required
          />
        </div>

        <div class="flex flex-col mb-4">
          <label>비밀번호 확인</label>
          <input
            class="border relative bg-gray-100 p-2"
            type="password"
            name="confirmPassword"
            v-model="formData.confirmPassword"
            required
          />
        </div>

        <button
          type="submit"
          class="w-full py-3 mt-8 rounded-md bg-black hover:text-stone-400 relative text-white"
        >
          회원가입
        </button>

        <router-link to="/admin" class="w-full">
          <button
            class="w-full py-3 mt-2 rounded-md bg-black hover:text-stone-400 relative text-white"
          >
            이미 계정이 있습니다
          </button>
        </router-link>
      </form>
    </div>
  </div>
</template>
<script>
export default {
  name: "SignUp",
  data() {
    return {
      loginImg: require("@/assets/images/login.jpg"),
      formData: {
        name: "",
        userid: "",
        password: "",
        confirmPassword: "",
      },
    };
  },
  methods: {
    handleSubmit() {
      console.log("회원가입 시도: ", this.formData);
    },
  },
};
</script>

<style>
</style>