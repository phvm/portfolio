import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import ProjectsView from '@/views/ProjectsView.vue';
import WorkView from '@/views/WorkView.vue';
import ContactView from '@/views/ContactView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { name: 'home', path: '/', component: HomeView },
    { name: 'work', path: '/work', component: WorkView },
    { name: 'projects', path: '/projects', component: ProjectsView },
    { name: 'contact', path: '/contact', component: ContactView }
  ]
});

export default router;
