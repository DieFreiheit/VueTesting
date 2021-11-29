import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Status from '../views/Status.vue';
import Playlist from '../views/Playlist.vue';
import ViewPlaylist from '../views/ViewPlaylist.vue';
import ViewAlbum from '../views/ViewAlbum.vue';
import Album from '../views/Album.vue';
import About from '../views/About.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/status',
    name: 'Status',
    component: Status,
  },
  {
    path: '/playlist',
    name: 'Playlist',
    component: Playlist,
  },
  {
    path: '/playlist/:id',
    name: 'Playlist',
    component: ViewPlaylist,
  },
  {
    path: '/album',
    name: 'Album',
    component: Album,
  },
  {
    path: '/album/:id',
    name: 'Album',
    component: ViewAlbum,
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
