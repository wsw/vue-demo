<template>
  <div id="list">
    <h1>{{movie.title}}</h1>
    <h3 v-for="item in movie.subjects">{{item.title}} <span>火</span></h3>
    <spinner :show="loading"></spinner>
  </div>
</template>

<script>
  // import { mapMutations } from 'vuex';
  import * as types from '../store/movie/types';
  import Spinner from './Spinner';

  export default {
    name: 'list',
    computed: {
      movie () {
        return this.$store.state.movie.movie;
      },
      loading () {
        return this.$store.state.movie.loading
      }
    },
    mounted () {
      this.$store.dispatch(types.FETCH_MOVIES);
    },
    components: {
      Spinner
    }
  }
</script>

<style>
  @import '../style/main.css';

  #list h3 {
    color: var(--mainColor);

    & span {
      color: var(--blueColor);
    }
  }
</style>
