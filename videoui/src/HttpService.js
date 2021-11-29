import axios from 'axios';

class HttpService {
  static getPlaylistById(id) {
    return new Promise((resolve, reject) => {
      axios.get(`http://192.168.1.2:3000/api/playlists/${id}`).then((res) => {
        const { data } = res;
        resolve(
          data,
        );
      })
        .catch((err) => {
          reject(err);
        });
    });
  }

  static getAlbumById(id) {
    return new Promise((resolve, reject) => {
      axios.get(`http://192.168.1.2:3000/api/albums/${id}`).then((res) => {
        const { data } = res;
        resolve(
          data,
        );
      })
        .catch((err) => {
          reject(err);
        });
    });
  }

  static getPlaylists() {
    return new Promise((resolve, reject) => {
      axios.get('http://192.168.1.2:3000/api/playlists').then((res) => {
        const { data } = res;
        resolve(
          data,
        );
      })
        .catch((err) => {
          reject(err);
        });
    });
  }

  static getAlbums() {
    return new Promise((resolve, reject) => {
      axios.get('http://192.168.1.2:3000/api/albums').then((res) => {
        const { data } = res;
        resolve(
          data,
        );
      })
        .catch((err) => {
          reject(err);
        });
    });
  }

  static getStatus() {
    return new Promise((resolve, reject) => {
      axios.get('http://192.168.1.2:3000/api/status').then((res) => {
        const { data } = res;
        resolve(
          data,
        );
      })
        .catch((err) => {
          reject(err);
        });
    });
  }
}

export default HttpService;
