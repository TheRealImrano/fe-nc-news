import axios from 'axios';

const API_BASE_URL = 'https://nc-news-be-portfolio-aia-api.onrender.com'; // Replace with your API's base URL

export const fetchData = (endpoint) => {
  return axios
    .get(`${API_BASE_URL}${endpoint}`)
    .then((response) => response.data)
    .catch((error) => {
      throw error;
    });
};


