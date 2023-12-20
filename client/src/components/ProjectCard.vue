<!-- src/components/ProjectCard.vue -->
<template>
  <div class="bg-white p-6 rounded-md border border-[#e4e4e5]">
    <div class="transition">
      <img
        :src="previousProject.imgSrc"
        alt="News Image"
        class="w-full h-40 mb-4 rounded-md object-contain"
      />
      <!-- 기사 제목 -->
      <h2 class="text-xl font-semibold text-gray-800 mb-2">
        {{ previousProject.project }}
      </h2>

      <!-- 기사 내용 (예시: 내용이 너무 길면 적절히 자르거나 요약해야 합니다) -->
      <p class="text-gray-600 mb-4"></p>

      <!-- 기사 링크 (예시: 기사의 실제 링크로 대체해야 합니다) -->
      <div class="flex justify-between flex-wrap gap-2 mb-2">
        <span class="text-gray-400">
          <p>
            <font-awesome-icon class="ml-2" :icon="['far', 'calendar']" />
            진행: {{ previousProject.year }}년
          </p>
          <p>
            <font-awesome-icon class="ml-2" :icon="['fas', 'building']" />
            파트너: {{ previousProject.partner }}
          </p>
          <p>
            <font-awesome-icon class="ml-2" :icon="['fas', 'medal']" />
            {{ previousProject.award }}
          </p>
        </span>
      </div>
    </div>
  </div>
</template>
    <script>
export default {
  name: "ProjectCard",
  props: { previousProject: Object },
};
</script>
    