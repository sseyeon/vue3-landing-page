<template>
  <div
    class="h-[50px] bg-white border flex shadow-sm px-[20px] py-[10px] w-full z-10 justify-between items-center"
  >
    <span>{{ titleText }}</span>
    <font-awesome-icon
      class="mr-2 w-[20px] h-[20px] fill-current cursor-pointer"
      :icon="['fas', 'sign-out-alt']"
    />
  </div>
</template>

<script>
export default {
  props: {
    titleText: {
      type: String,
      required: true,
    },
  },
};
</script>
