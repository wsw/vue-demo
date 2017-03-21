<template>
  <div id="app">
    <v-header></v-header>
    <router-view></router-view>
    <spinner :show="true"></spinner>
    <h1>{{movie.title}}</h1>
    <h3 v-for="item in movie.subjects">{{item.title}}</h3>
  </div>
</template>

<script>
import VHeader from './components/VHeader';
import Spinner from './components/Spinner';
import { mapMutations } from 'vuex';
import * as types from './store/movie/types';

export default {
  name: 'app',
  mounted () {
    // this[types.FETCH_MOVIES]();
    this.$store.dispatch(types.FETCH_MOVIES);
  },
  computed: {
    movie () {
      return this.$store.state.movie.movie;
    }
  },
  methods: {
    ...mapMutations([types.FETCH_MOVIES])
  },
  components: {
    VHeader,
    Spinner
  }
}
</script>

<style>
body {
  padding: 0; margin: 0;
}
</style>
