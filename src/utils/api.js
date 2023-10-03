import axios from 'axios';

const API_BASE_URL = 'https://nc-news-be-portfolio-aia-api.onrender.com'; // Replace with your API's base URL

export const fetchAllArticles = (order) => {
  const urlEndpoint = `/api/articles${order ? '?order=asc' : ''}`


  return axios
    .get(`${API_BASE_URL}${urlEndpoint}`)
    .then((response) => response.data)
    .catch((error) => {
      throw error;
    });
};

export const fetchCategories = () => {
  return axios
    .get(`${API_BASE_URL}/api/topics`)
    .then((response) => response.data)
    .catch((error) => {
      throw error;
    });
}

export const fetchArticleByID = (id) => {
  return axios
    .get(`${API_BASE_URL}/api/articles/${id}`)
    .then((response) => response.data)
    .catch((error) => {
      throw error;
    });
}

export const fetchArticleComments = (id) => {
  return axios
    .get(`${API_BASE_URL}/api/articles/${id}/comments`)
    .then((response) => response.data)
    .catch((error) => {
      throw error;
    });
}

export const updateArticleVotes = (id, votes) => {
  const reqBody = { inc_votes : votes };
  return axios
  .patch(`${API_BASE_URL}/api/articles/${id}`, reqBody)
  .then((response) => response.data)
  .catch((error) => {
    throw error;
  });
}


