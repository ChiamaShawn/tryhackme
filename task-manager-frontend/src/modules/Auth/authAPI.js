import axios from 'axios';

const BASE_URL = 'http://localhost:3000';// Replace with your API base URL

const authAPI = {
  login(username, password) {
    // console.log(BASE_URL);
    const credentials = {
      username: username,
      password: password,
    };
    console.log(credentials);
    return axios.post(`${BASE_URL}/auth/login`, credentials);
  },

  logout() {
    return axios.post(`${BASE_URL}/logout`);
  },
};

export default authAPI;