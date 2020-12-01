import { createRouter, createWebHashHistory } from 'vue-router';
import Admin from '../views/Admin.vue';
import AppHome from '../views/AppHome.vue';
import Create from '../views/Create.vue';
import Category from '../views/Category.vue';
import NotFound from '../views/NotFound.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: AppHome,
  },
  {
    path: '/category',
    name: 'Category',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Category,
  },
  {
    path: '/create',
    name: 'Create',
    component: Create,
  },
  {
    path: '/admin',
    name: 'Admin',
    component: Admin,
  },
  {
    path: '/:pathName(.*)*',
    name: 'NotFound',
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
