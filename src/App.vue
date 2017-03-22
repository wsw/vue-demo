<template>
  <div id="app">
    <v-header></v-header>
    <router-view></router-view>
  </div>
</template>

<script>
import VHeader from './components/VHeader';

export default {
  name: 'app',
  mounted () {
    // this[types.FETCH_MOVIES]();
  },

  // methods: {
  //   ...mapMutations([types.FETCH_MOVIES])
  // },
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
