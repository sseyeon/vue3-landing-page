// src/router/index.js
import { createRouter, createWebHistory } from "vue-router"
import Home from "@/views/Home.vue"
import About from "@/views/About.vue"
import News from "@/views/News.vue"
import Internship from "@/views/Internship.vue"
import Faq from "@/views/Faq.vue"
import Mentor from "@/views/Mentor.vue"
import Projects from "@/views/Projects.vue"
import Reviews from "@/views/Reviews.vue"
import Apply from "@/views/Apply.vue"
import Article from "@/views/Article.vue"
import InternshipDetail from "@/views/InternshipDetail.vue"
import NotFound from "@/views/NotFound.vue"
import AOS from "aos"
import "aos/dist/aos.css"

const routes = [
  { path: "/", component: Home },
  { path: "/about", component: About },
  { path: "/news", component: News },
  { path: "/internship", component: Internship },
  { path: "/faq", component: Faq },
  { path: "/mentor", component: Mentor },
  { path: "/projects", component: Projects },
  { path: "/review", component: Reviews },
  { path: "/apply", component: Apply },
  { path: "/article/:id", component: Article },
  { path: "/internship/:id", component: InternshipDetail },
  { path: "/admin", component: () => import("@/views/admin/Admin.vue") },
  {
    path: "/admin/signup",
    component: () => import("@/views/admin/SignUp.vue"),
  },
  {
    path: "/admin/news-management",
    component: () => import("@/views/admin/NewsManagement.vue"),
  },
  {
    path: "/admin/news-management/add",
    component: () => import("@/views/admin/NewsAdd.vue"),
  },
  {
    path: "/admin/swipe-contents",
    component: () => import("@/views/admin/SwipeContentManagement.vue"),
  },
  {
    path: "/admin/project-management",
    component: () => import("@/views/admin/ProjectManagement.vue"),
  },
  {
    path: "/admin/graduates-management",
    component: () => import("@/views/admin/GraduatesManagement.vue"),
  },
  {
    path: "/admin/graduates-management-video",
    component: () => import("@/views/admin/GraduatesVideoManagement.vue"),
  },
  {
    path: "/:pathMatch(.*)*", // 모든 정의되지 않은 경로를 포착
    name: "NotFound",
    component: NotFound,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      // savedPosition은 브라우저 뒤로가기나 앞으로가기를 했을 때 사용됩니다.
      return savedPosition
    } else {
      // 페이지 이동 시 맨 위로 스크롤
      return { top: 0 }
    }
  },
})
router.beforeEach((to, from, next) => {
  // if (to.path.startsWith("/admin")) {
  //   next()
  //   return
  // }
  // // Botpress 웹챗 초기화
  // if (!window.botpressWebChat.isInitialized) {
  //   window.botpressWebChat.init({
  //     // Botpress 웹챗 초기화 설정...
  //     composerPlaceholder: "리더봇과 인사를 나누어 보세요.",
  //     botConversationDescription: "빅리더의 챗봇 리더봇이에요 :)",
  //     botId: "88897e73-42e4-41af-97ad-bb45bec41936",
  //     hostUrl: "https://cdn.botpress.cloud/webchat/v0",
  //     messagingUrl: "https://messaging.botpress.cloud",
  //     clientId: "88897e73-42e4-41af-97ad-bb45bec41936",
  //     botName: "리더봇",
  //     stylesheet:
  //       "https://webchat-styler-css.botpress.app/prod/code/1a56c776-4903-43ab-bac7-536c37cf7647/v31235/style.css",
  //     useSessionStorage: true,
  //     enableConversationDeletion: true,
  //   })
  //   window.botpressWebChat.isInitialized = true
  // }
  // 계속 진행
  AOS.init() // Initialize AOS
  next()
})

export default router
