import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Account from '../views/Account.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
  {
    path: '/account/:userId/posts/:post',
    name: 'Account',
    component: Account,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
