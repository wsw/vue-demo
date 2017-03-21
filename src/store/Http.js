import axios from 'axios';

const HOST = '/api/';

export default class Http {
  static get (url) {
    return new Promise((resolve, reject) => {
      axios.get(HOST + url)
      .then(response => {
        resolve(response.data);
      }, error => {
        reject(error);
      })
      .catch(error => {
        reject(error);
      });
    })
  }
}
