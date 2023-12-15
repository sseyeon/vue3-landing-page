<!-- src/views/Projects.vue -->
<template>
  <div>
    <Header />
    <TitleComponent
      titleText="Project"
      subText="빅리더 수료생들이 진행한 프로젝트를 소개합니다."
    />
    <div class="container max-w-screen-lg mb-4 mt-8">
      <SelectBox
        :options="selectOptions"
        v-model="selectedOption"
        @change="handleSelectChange"
      />
    </div>
    <!-- Display news based on the selected category -->
    <div
      class="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-16 max-w-screen-lg mt-4 mb-16"
    >
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
    </div>
    <Footer />
  </div>
</template>
  
  <script>
import Header from "@/components/layout/Header.vue";
import TitleComponent from "@/components/TitleComponent.vue";
import SelectBox from "@/components/CustomSelectBox.vue";
import ProjectCard from "@/components/ProjectCard.vue";
import Footer from "@/components/layout/Footer.vue";

export default {
  name: "Projects",
  components: {
    Header,
    TitleComponent,
    SelectBox,
    ProjectCard,
    Footer,
  },
  data() {
    return {
      selectOptions: [
        { label: "2020년", value: "option1" },
        { label: "2021년", value: "option2" },
        { label: "2022년", value: "option3" },
        { label: "2023년", value: "option3" },
      ],
      selectedOption: "option1",
    };
  },
  methods: {
    handleSelectChange(value) {},
  },
};
</script>
  