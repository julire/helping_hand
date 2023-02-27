import axios from 'axios';

class ProjectDataService {
  getAll() {
    return axios.get(`https://helping-hand-api.onrender.com/projects`);
  }

  get(id) {
    return axios.get(`https://helping-hand-api.onrender.com/projects/${id}`);
  }

  updateProject(id, project) {
    return axios.put(
      `https://helping-hand-api.onrender.com/projects/${id}`,
      project
    );
  }

  delete(id) {
    return axios.delete(`https://helping-hand-api.onrender.com/projects/${id}`);
  }

  createProject(project) {
    return axios.post(
      'https://helping-hand-api.onrender.com/projects',
      project
    );
  }
}

export default new ProjectDataService();
