<template>
  <div class="education-view">
    <div v-for="(course, index) in courses" :key="index" class="course">
      <h3 class="font-bold">{{ course.name }}</h3>
      <p>{{ course.duration }} 주</p>
      <p>{{ course.description }}</p>
      <font-awesome-icon :icon="['fas', course.icon]" class="arrow" />
    </div>
  </div>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default {
  components: {
    FontAwesomeIcon,
  },
  data() {
    return {
      courses: [
        {
          name: "LMS 온라인 사전교육",
          duration: 3,
          description: "온라인으로 진행되는 사전 교육입니다.",
          icon: "laptop",
        },
        {
          name: "1타 강사진과의 대면 수업",
          duration: 9,
          description: "1타 강사들과의 대면 수업이 진행됩니다.",
          icon: "laptop",
        },
        {
          name: "현장파견 기업 협업 프로젝트",
          duration: 14,
          description: "현장에서 기업과의 협업 프로젝트를 진행합니다.",
          icon: "laptop",
        },
      ],
    };
  },
};
</script>

<style scoped>
.education-view {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

.course {
  position: relative;
  max-width: 300px;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.course:hover {
  transform: scale(1.05);
}

.course h3 {
  margin-bottom: 10px;
}

.course p {
  color: #555;
  margin-bottom: 5px;
}

.arrow {
  margin-top: 10px;
  font-size: 1.5rem;
  color: #3498db;
}
</style>
