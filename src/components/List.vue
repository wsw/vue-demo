<template>
  <div id="list">
    <h1>{{movie.title}}</h1>
    <h3 v-for="item in movie.subjects">{{item.title}} <span>火</span></h3>
    <spinner :show="loading"></spinner>
  </div>
</template>

<script>
  import { mapState } from 'vuex';
  import Spinner from './Spinner';

  export default {
    name: 'list',
    // computed: {
    //   movie () {
    //     return this.$store.state.movie.movie;
    //   },
    //   loading () {
    //     return this.$store.state.movie.loading
    //   }
    // },
    computed: mapState({
      movie: state => state.movie.movie,
      loading: state => state.movie.loading
    }),
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
