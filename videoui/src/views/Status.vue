<template>
  <div>
    <h1>Status</h1>
    <p>Hello World from VueJS</p>
    <h2>Playlists</h2>
    <ol>
      <li
        v-for="(playlist, index) in playlists"
        :item="playlist" :index="index"
        :key="playlist._id"
      >
        <a :href="`/playlist/${playlist.plid}`">{{ playlist.name }}</a>
      </li>
    </ol>
    <h2>Albums</h2>
    <ol>
      <li
        v-for="(album, index) in albums"
        :item="album" :index="index"
        :key="album._id"
      >
        <a :href="`/album/${album.plid}`">{{ album.name }}</a>
      </li>
    </ol>
  </div>
</template>

<script>
// import HelloWorld from '@/components/HelloWorld.vue';
import HttpService from '../HttpService';

export default {
  name: 'Status',
  components: {
  },
  data() {
    return {
      data: [],
      albums: [],
      playlists: [],
      error: '',
      text: '',
    };
  },
  async created() {
    try {
      this.data = await HttpService.getStatus();
      this.playlists = await this.data.playlists;
      this.albums = await this.data.albums;
      console.log(this.data);
      console.log(this.playlists);
      console.log(this.albums);
    } catch (err) {
      this.error = err;
    }
  },
};
</script>
