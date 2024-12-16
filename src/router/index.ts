import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import ProjectsView from "@/views/ProjectsView.vue";
import { navLinks } from "@/constants";
import ExperiencesView from "@/views/ExperiencesView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { name: navLinks.value.home.name, path: navLinks.value.home.link, component: HomeView },
    { name: navLinks.value.experiences.name, path: navLinks.value.experiences.link, component: ExperiencesView },
    { name: navLinks.value.projects.name, path: navLinks.value.projects.link, component: ProjectsView },
  ],
  scrollBehavior() {
    return { top: 0 };
  },
});

export default router;
