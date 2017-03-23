<template>
  <div id="app">
    <v-header @search="onSearch"></v-header>
    <router-view></router-view>
  </div>
</template>

<script>
import VHeader from './components/VHeader';
import * as types from './store/movie/types';
import { mapActions } from 'vuex';

export default {
  name: 'app',
  mounted () {
    this.getData();
  },
  // methods: {
  //   onSearch (query) {
  //     this.$store.dispatch(types.FETCH_MOVIE_SEARCH, {query: query});
  //   }
  // },
  methods: mapActions({
    onSearch: types.FETCH_MOVIE_SEARCH,
    getData: types.FETCH_MOVIES
  }),
  components: {
    VHeader
  }
}
</script>

<style>
body {
  padding: 0; margin: 0;
}
</style>
