import * as types from './types';
import {
  fetchItemInTheaters
} from './api';

const state = {
  movie: {},
  loading: true,
  error: ''
};

const actions = {
  [types.FETCH_MOVIES] (context, payload) {
    fetchItemInTheaters().then(data => {
      return context.commit(types.FETCH_MOVIES, data);
    }, error => {
      return context.commit('error', error);
    })
  }
}

const mutations = {
  [types.FETCH_MOVIES] (state, list) {
    state.movie = list;
    state.loading = false;
  },
  error (error) {
    state.error = error;
  }
}

export default {
  state, mutations, actions
}
