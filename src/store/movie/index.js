import * as types from './types';
import {
  fetchItemInTheaters, fetchSearchMovies
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
  },
  [types.FETCH_MOVIE_SEARCH] (context, payload) {
    context.commit('clear');
    fetchSearchMovies(payload.query).then(data => {
      return context.commit(types.FETCH_MOVIE_SEARCH, data);
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
  [types.FETCH_MOVIE_SEARCH] (state, data) {
    state.movie = data;
    state.loading = false;
  },
  error (error) {
    state.error = error;
  },
  clear () {
    state.movie = {};
    state.loading = true;
  }
}

export default {
  state, mutations, actions
}
