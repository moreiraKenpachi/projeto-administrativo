import { createWebHistory, createRouter } from "vue-router";

import Home from '@/views/Home.vue';
import Rankking from '@/views/Rankking.vue';
import Filtros from '@/views/Filtros.vue';
import Mercadorias from '@/views/Mercadorias.vue';
import Setting from '@/views/Setting.vue';

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/rankking",
    name: "Rankking",
    component: Rankking,
  },
  {
    path: "/filtros",
    name: "Filtros",
    component: Filtros,
  },
  {
    path: "/mercadorias",
    name: "Mercadorias",
    component: Mercadorias,
  },
  {
    path: "/settings",
    name: "Setting",
    component: Setting,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;