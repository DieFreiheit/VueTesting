<template>
  <div>
    <h1>Playlist</h1>
    <p>Hello World from VueJS</p>
    {{itemlist.name}}
    <ol>
      <li
        v-for="(item, index) in itemlist.items"
        :item="item" :index="index"
        :key="item._id"
      >
        {{ item.title }}
      </li>
    </ol>
  </div>
</template>

<script>
// import HelloWorld from '@/components/HelloWorld.vue';
import HttpService from '../HttpService';

export default {
  name: 'ViewAlbum',
  components: {
  },
  data() {
    return {
      itemlist: [],
      error: '',
      text: '',
    };
  },
  async created() {
    try {
      this.itemlist = await HttpService.getAlbumById(this.$route.params.id);
    } catch (err) {
      this.error = err;
    }
  },
};
</script>
