import axios from 'axios';

class Api {
  constructor() {
    this.instanceApi = axios.create({
      baseURL: 'http://localhost:3333',
    });
  }

  updateToken = token => {
    if (token) {
      this.instanceApi.defaults.headers.Authentication = `Bearer ${token}`;
    } else {
      this.instanceApi.defaults.headers.Authentication = null;
    }
  };

  // ----------------- NOT AUTHENTICATED ENDPOINTS -----------------
  login = ({ email, password }) =>
    this.instanceApi.post('/auth', { email, password });

  register = ({ name, email, password }) =>
    this.instanceApi.post('/users', { name, email, password });

  // ------------------- AUTHENTICATED ENDPOINTS -------------------
  updateMe = data => this.instanceApi.put('/users', data);

  getMe = () => this.instanceApi.get('/users');
}

export default new Api();
