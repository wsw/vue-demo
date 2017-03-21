import * as types from './types';
import {
  fetchItemInTheaters
} from './api';

const state = {
  movie: {}
};

const actions = {
  [types.FETCH_MOVIES] (context, payload) {
    fetchItemInTheaters().then(data => {
      console.log('data', data);
      return context.commit(types.FETCH_MOVIES, data);
    })
  }
}

const mutations = {
  [types.FETCH_MOVIES] (state, list) {
    console.log('list', list);
    state.movie = list;
  }
}

export default {
  state, mutations, actions
}
