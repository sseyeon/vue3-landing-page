// src/router/index.js
import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import About from "@/views/About.vue";
import News from "@/views/News.vue";
import Cocreation from "@/views/Cocreation.vue";
import Faq from "@/views/Faq.vue";
import Instructors from "@/views/Instructors.vue";
import Projects from "@/views/Projects.vue";
import Reviews from "@/views/Reviews.vue";
import Apply from "@/views/Apply.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/about", component: About },
  { path: "/news", component: News },
  { path: "/cocreation", component: Cocreation },
  { path: "/faq", component: Faq },
  { path: "/instructors", component: Instructors },
  { path: "/projects", component: Projects },
  { path: "/review", component: Reviews },
  { path: "/apply", component: Apply },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
