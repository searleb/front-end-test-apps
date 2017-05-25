/**
 * Router:
 * Works as expected.
 * Path defined with varibles, can me a named route and define the
 * component to render upon route match.
 * A $route object is made aviable on the component.
 * Params are accessed in the component with this.$route.params
 */
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
