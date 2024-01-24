<template>
  <div class="w-screen h-screen flex">
    <!-- Side bar -->
    <Sidebar />
    <div class="w-full h-full bg-gray-400">
      <Header titleText="프로젝트 관리" />
      <div class="h-[calc(100vh-50px)] bg-white p-6 overflow-auto">
        <div class="flex justify-between items-center mb-4">
          <p>
            <font-awesome-icon
              :icon="['fas', 'fa-paper-plane']"
              class="text-blue-700 mr-2"
            />
            프로젝트 컨텐츠를 관리할 수 있습니다.
          </p>
          <button class="btn btn-outline-primary btn-sm">
            + 프로젝트 추가
          </button>
        </div>
        <div class="table-container" v-if="projectData">
          <Table
            :theadData="theadData"
            :tbodyData="truncatedData"
            :displayedKeys="displayedKeys"
          >
            <template v-slot:manage="{ item }">
              <button
                class="btn btn-sm btn-primary mr-2"
                @click="editNews(item.id)"
              >
                수정
              </button>
              <button
                class="btn btn-sm btn-danger"
                @click="deleteNews(item.id)"
              >
                삭제
              </button>
            </template>
          </Table>
        </div>
        <div v-else class="h-screen text-center">
          등록된 프로젝트가 없습니다.
        </div>
      </div>
    </div>
  </div>
</template>
      
      <script>
import Sidebar from "@/components/layout/admin/Sidebar.vue"
import Header from "@/components/layout/admin/Header.vue"
import Table from "@/components/Table.vue"
import { truncateText } from "@/utils/utils.js"
export default {
  name: "ProjectManagement",
  components: {
    Sidebar,
    Header,
    Table,
  },
  data() {
    return {
      theadData: [
        "ID",
        "년도",
        "파트너",
        "프로젝트",
        "수상",
        "썸네일",
        "content1",
        "content2",
        "관리",
      ],
      displayedKeys: [
        "id",
        "year",
        "partner",
        "project",
        "award",
        "thumbnail_url",
        "additional_content1",
        "additional_content2",
      ],
      projectData: null,
    }
  },
  created() {
    this.getAllProjects()
  },
  computed: {
    truncatedData() {
      return this.projectData.map(project => ({
        ...project,
        additional_content1: truncateText(project.additional_content1, 10),
        additional_content2: truncateText(project.additional_content2, 10),
      }))
    },
  },
  methods: {
    async getAllProjects() {
      // Logic to call GET API
      try {
        const response = await fetch(`${process.env.VUE_APP_API_URL}/project`)
        if (response.ok) {
          console.log(response)
          const data = await response.json()
          this.projectData = data
        } else {
          alert("HTTP-Error: " + response.status)
        }
      } catch (error) {
        console.log(error)
      }
    },
    async editNews(id) {
      // Logic to call PUT API
      const response = await fetch(
        `${process.env.VUE_APP_API_URL}/news/${id}`,
        {
          method: "PUT",
          // Additional request configurations (headers, body, etc.)
        }
      )
      // Handle the response
    },
    async deleteNews(id) {
      // Logic to call DELETE API
      const response = await fetch(
        `${process.env.VUE_APP_API_URL}/news/${id}`,
        {
          method: "DELETE",
          // Additional request configurations (headers, body, etc.)
        }
      )
      // Handle the response
    },
  },
}
</script>
      
      <style>
</style>