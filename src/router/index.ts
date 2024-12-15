import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import ProjectsView from "@/views/ProjectsView.vue";
import { navLinks } from "@/constants";
import ExperiencesView from "@/views/ExperiencesView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { name: navLinks.home.name, path: navLinks.home.link, component: HomeView },
    { name: navLinks.experiences.name, path: navLinks.experiences.link, component: ExperiencesView },
    { name: navLinks.projects.name, path: navLinks.projects.link, component: ProjectsView },
  ],
  scrollBehavior() {
    return { top: 0 };
  },
});

export default router;
