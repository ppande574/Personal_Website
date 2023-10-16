import { createRouter, createWebHistory } from 'vue-router';
import Home from './components/HomePage.vue'; 
import Experiences from './components/ExperiencePage.vue';
import Interests from './components/InterestsPage.vue';

const routes = [
  { path: '/home', name: 'home', component: Home },
  { path: '/experiences', name: 'experiences', component: Experiences },
  { path: '/interests', name: 'interests', component: Interests },
  { path: '', redirect: { name: 'home' } }, // Setting "home" as default route
  
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
