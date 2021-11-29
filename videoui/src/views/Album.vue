<template>
  <div>
    <h1>Album</h1>
    <p>Hello World from VueJS</p>
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
  name: 'Album',
  components: {
  },
  data() {
    return {
      albums: [],
      error: '',
      text: '',
    };
  },
  async created() {
    try {
      this.albums = await HttpService.getAlbums();
    } catch (err) {
      this.error = err;
    }
  },
};
</script>
