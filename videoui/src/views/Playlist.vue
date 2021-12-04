<template>
  <div>
    <h1>Playlist</h1>
    <p>Hello World from VueJS</p>
    <ul class="list-group">
      <li
        class="list-group-item"
        v-for="(playlist, index) in playlists"
        :item="playlist" :index="index"
        :key="playlist._id"
      >
        <router-link :to="`/playlist/${playlist.plid}`">
          {{ playlist.name }}<span v-if="playlist.user"> By: {{ playlist.user }}</span>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
// import HelloWorld from '@/components/HelloWorld.vue';
import HttpService from '../HttpService';

export default {
  name: 'Playlist',
  components: {
  },
  data() {
    return {
      playlists: [],
      error: '',
      text: '',
    };
  },
  async created() {
    try {
      this.playlists = await HttpService.getPlaylists();
    } catch (err) {
      this.error = err;
    }
  },
};
</script>
