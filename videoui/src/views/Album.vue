<template>
  <div>
    <h1>Album</h1>
    <p>Hello World from VueJS</p>
    <ul class="list-group">
      <li
        class="list-group-item"
        v-for="(album, index) in albums"
        :item="album" :index="index"
        :key="album._id"
      >
        <router-link :to="`/album/${album.plid}`">
          {{ album.name }}<span v-if="album.artist"> By: {{ album.artist }}</span>
        </router-link>
      </li>
    </ul>
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
