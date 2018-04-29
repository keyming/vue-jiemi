import Vue from 'vue';
import Router from 'vue-router';
import Header from '../components/header/header.vue';
import Menu from '../components/menu/menus.vue';
import Movie from '../components/list/movie/movie.vue';
import music from '../components/list/music/music.vue';
import trip from '../components/list/trip/trip.vue';
Vue.use(Router);
export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/movie'
    },
    {
      path: '/header',
      component: Header
    },
    {
      path: '/menu',
      component: Menu
    },
    {
      path: '/movie',
      name: 'movie',
      component: Movie
    },
    {
      path: '/music',
      name: 'music',
      component: music
    },
    {
      path: '/trip',
      name: 'trip',
      component: trip
    }
  ]
});
