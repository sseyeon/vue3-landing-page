// src/router/index.js
import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import Instructors from "@/views/Instructors.vue";
import Projects from "@/views/Projects.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/instructors", component: Instructors },
  { path: "/projects", component: Projects },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
