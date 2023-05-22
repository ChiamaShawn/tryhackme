import axios from 'axios';

const BASE_URL = 'http://localhost:3000';// Replace with your API base URL

const tasksAPI = {
 createTask(title, description) {
    const task = {
      data: {
        title: title,
        description: description,
      }
    };
    return axios.post(`${BASE_URL}/tasks/createTask`, task);
  },
  editTask(id, title, description) {
    const task = {
      data: {
        title: title,
        description: description,
      }
    };
    return axios.put(`${BASE_URL}/tasks/updateTask/${id}`, task);
  },

  getTasks() {
    return axios.get(`${BASE_URL}/tasks/getTasks`);
  },

  deleteTask(id) {
    return axios.delete(`${BASE_URL}/tasks/deleteTask/${id}`);
  }
}

export default tasksAPI;