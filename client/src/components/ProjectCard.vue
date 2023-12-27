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
      <h2
        class="text-xl font-semibold text-gray-800"
        :class="{ 'mb-2': isLongTitle, 'mb-10': !isLongTitle }"
      >
        {{ previousProject.project }}
      </h2>

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
  computed: {
    isLongTitle() {
      // 'previousProject.project'가 두 줄 이상일 것으로 예상되는 길이 기준 설정
      return this.previousProject.project.length > 31;
    },
  },
};
</script>
    