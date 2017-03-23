import Http from '../Http';

export function fetchItemInTheaters () {
  return Http.get('movie/in_theaters');
}

export function fetchSearchMovies (query) {
  return Http.get(`movie/search?q=${query}`)
}
