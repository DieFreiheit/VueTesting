import axios from 'axios';
import { api } from '../config/config';

class HttpService {
  static getPlaylistById(id) {
    return new Promise((resolve, reject) => {
      axios.get(`${api}/playlists/${id}`).then((res) => {
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
      axios.get(`${api}/albums/${id}`).then((res) => {
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
      axios.get(`${api}/playlists`).then((res) => {
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
      axios.get(`${api}/albums`).then((res) => {
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
      axios.get(`${api}/status`).then((res) => {
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
