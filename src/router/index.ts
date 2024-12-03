import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import ProjectsView from "@/views/ProjectsView.vue";
import WorkView from "@/views/WorkView.vue";
import ContactView from "@/views/ContactView.vue";
import { navLinks } from "@/constants";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { name: navLinks.home.name, path: navLinks.home.link, component: HomeView },
    { name: navLinks.experiences.name, path: navLinks.experiences.link, component: WorkView },
    { name: navLinks.projects.name, path: navLinks.projects.link, component: ProjectsView },
    { name: navLinks.contact.name, path: navLinks.contact.link, component: ContactView },
  ],
});

export default router;
