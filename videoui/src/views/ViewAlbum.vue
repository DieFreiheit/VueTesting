<template>
  <div>
    <h1>Album</h1>
    <div class="container-fluid" v-if="this.scode === 0">
      <p>{{itemlist.name}}<span v-if="itemlist.artist"> By: {{ itemlist.artist }}</span></p>
      <ul class="list-group">
        <li
          class="list-group-item"
          v-for="(item, index) in itemlist.items"
          :item="item" :index="index"
          :key="item._id"
        >
          {{ item.title }}<br/>
          <small>By: {{ item.artist }} - Track {{ item.track }} in {{ item.album }}</small><br/>
          <button v-on:click="startPlay(index)">Click</button>
        </li>
      </ul>
    </div>
    <div class="container-fluid" v-else>
      <p>Album nicht gefunden: {{ this.$route.params.id }}</p>
    </div>
  </div>
</template>

<script>
// import HelloWorld from '@/components/HelloWorld.vue';
import HttpService from '../HttpService';
import { files } from '../../config/config';

export default {
  name: 'ViewAlbum',
  components: {
  },
  data() {
    return {
      itemlist: [],
      scode: 0,
      error: '',
      text: '',
    };
  },
  methods: {
    startPlay(index) {
      window.open(`${files}/${this.itemlist.plid}/${this.itemlist.items[index].filenameext}`, 'popUpWindow', 'height=300,width=400,left=100,top=100,resizable=yes,toolbar=yes,menubar=no,location=no,directories=no, status=yes');
    },
  },
  async created() {
    try {
      this.itemlist = await HttpService.getAlbumById(this.$route.params.id);
      if (this.itemlist === '') {
        this.scode = 1;
        console.log('Leeer');
      }
    } catch (err) {
      this.error = err;
    }
  },
};
</script>
