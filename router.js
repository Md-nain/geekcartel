import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/pages/Home.vue';
import Research from '@/pages/Research.vue';
import Team from '@/pages/Team.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/research', component: Research },
  { path: '/team', component: Team },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;