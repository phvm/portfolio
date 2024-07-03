import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import ProjectsView from '@/views/ProjectsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { name: 'home', path: '/', component: HomeView },
    { name: 'projects', path: '/projects', component: ProjectsView },
    { name: 'aboutme', path: '/aboutme', component: HomeView },
    { name: 'contact', path: '/contact', component: HomeView }
  ]
})

export default router
