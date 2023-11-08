import { createRouter, createWebHistory } from 'vue-router'
import Home from './components/HomePage.vue'
import Contact from './components/ContactPage.vue'
import Projects from './components/PersonalProjects.vue'


const routes = [
  { path: '/home', name: 'home', component: Home },
  { path: '/contact', name: 'contact', component: Contact },
  { path: '/projects', name: 'projects', component: Projects },
  { path: '', redirect: { name: 'home' } }, // Setting "home" as default route
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
