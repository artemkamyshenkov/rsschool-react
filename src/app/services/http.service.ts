import axios from 'axios';

axios.defaults.baseURL = 'https://api.unsplash.com/';
const httpService = {
  get: axios.get,
};

export { httpService };
