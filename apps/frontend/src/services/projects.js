import axios from 'axios';

class ProjectDataService {
  getAll() {
    return axios.get(`http://localhost:5001/projects`);
  }

  get(id) {
    return axios.get(`http://localhost:5001/projects/${id}`);
  }

  updateProject(id) {
    return axios.put(`http://localhost:5001/projects/${id}`);
  }
}

export default new ProjectDataService();
