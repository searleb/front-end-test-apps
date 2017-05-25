// Router
import Vue from 'vue';
import Router from 'vue-router';
import Hello from '@/components/Hello';
import Home from '@/components/Home';
import BeerDetails from '@/components/BeerDetails';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/beer/:id',
      name: 'Beer',
      component: BeerDetails,
    },
    {
      path: '/*',
      name: 'Hello',
      component: Hello,
    },
  ],
});
