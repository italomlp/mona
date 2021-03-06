import axios from 'axios';

class Api {
  constructor() {
    this.instanceApi = axios.create({
      baseURL: 'http://localhost:3333',
    });
  }

  updateToken = token => {
    if (token) {
      this.instanceApi.defaults.headers.Authorization = `Bearer ${token}`;
    } else {
      this.instanceApi.defaults.headers.Authorization = null;
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

  // ------------------- --> NOTES ENDPOINTs <-- -------------------
  listNotes = () => this.instanceApi.get('/notes');

  updateNote = (id, note) =>
    this.instanceApi.put(`/notes/${id}`, {
      ...note,
    });
}

export default new Api();
