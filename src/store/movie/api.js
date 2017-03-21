import Http from '../Http';

export function fetchItemInTheaters (type) {
  return Http.get('movie/in_theaters');
}
