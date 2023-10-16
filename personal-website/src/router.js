import { createRouter, createWebHistory } from 'vue-router';
import Home from './App.vue'; // Replace with the actual path to your Home component
import Experiences from './components/ExperiencePage.vue'; // Replace with the actual path to your Experiences component
import Interests from './components/InterestsPage.vue'; // Replace with the actual path to your Interests component

const routes = [
  { path: '/', name: 'home', component: Home },
  { path: '/experiences', name: 'experiences', component: Experiences },
  { path: '/interests', name: 'interests', component: Interests },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
