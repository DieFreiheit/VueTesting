<template>
  <div>
    <h1>Playlist</h1>
    <p>Hello World from VueJS</p>
    <ol>
      <li
        v-for="(playlist, index) in playlists"
        :item="playlist" :index="index"
        :key="playlist._id"
      >
        <a :href="`/playlist/${playlist.plid}`">{{ playlist.name }}</a>
      </li>
    </ol>
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
