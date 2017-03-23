<template>
  <div id="app">
    <v-header @search="onSearch"></v-header>
    <router-view></router-view>
  </div>
</template>

<script>
import VHeader from './components/VHeader';
import * as types from './store/movie/types';

export default {
  name: 'app',
  mounted () {
    this.$store.dispatch(types.FETCH_MOVIES);
  },
  methods: {
    onSearch (query) {
      this.$store.dispatch(types.FETCH_MOVIE_SEARCH, {query: query});
    }
  },
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
