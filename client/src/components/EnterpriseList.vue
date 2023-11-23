<!-- src/components/EnterpriseList.vue -->
<template>
  <div class="flex flex-col rounded-md shadow-md">
    <div class="p-6 flex flex-col items-center">
      <img src="../assets/images/enterprise01.png" alt="" />
      <h3 class="mt-5 mb-2 text-black text-lg">
        <font-awesome-icon
          :icon="['far', 'lightbulb']"
          style="color: #ffd400"
        />
        스마트 수자원 관리
      </h3>

      <p class="mb-2 text-gray-600 font-light">세아베스틸지주</p>
    </div>
    <hr class="border-b text-gray-50" />
    <div class="flex p-6">
      <button class="flex-1 btn btn-primary">자세히</button>
    </div>
  </div>
</template>
  
  <script>
export default {
  name: "EnterpriseList",
};
</script>
  