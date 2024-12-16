import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import ProjectsView from "@/views/ProjectsView.vue";
import { navLinks } from "@/constants";
import ExperiencesView from "@/views/ExperiencesView.vue";
import { useIntlStore } from "@/stores/useIntlStore";

export const createRoutes = () => {
  const store = useIntlStore();
  return createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
      { name: store.getMessage(navLinks.home.name), path: navLinks.home.link, component: HomeView },
      {
        name: store.getMessage(navLinks.experiences.name),
        path: navLinks.experiences.link,
        component: ExperiencesView,
      },
      { name: store.getMessage(navLinks.projects.name), path: navLinks.projects.link, component: ProjectsView },
    ],
    scrollBehavior() {
      return { top: 0 };
    },
  });
};
