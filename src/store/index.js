import Vuex from 'vuex';
import Vue from 'vue';
import movie from './movie/index';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    movie
  }
});
