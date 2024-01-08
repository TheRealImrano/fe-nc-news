import axios from 'axios';

const API_BASE_URL = 'https://nc-news-be-portfolio-aia-api.onrender.com';

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

export const fetchAllUsers = () => {
  return axios
  .get(`${API_BASE_URL}/api/users`)
  .then((response) => response.data)
  .catch((error) => {
    throw error;
  });
}

export const postComment = async (article_id, username, body) => {
  const url = `${API_BASE_URL}/api/articles/${article_id}/comments`;

  try {
    const response = await axios.post(url, {
      username,
      body,
    });

    if (response.status >= 200 && response.status < 300) {
      console.log('Comment posted successfully:', response.data.comment);
      return response;
    } else {
      console.error('Unexpected response status:', response.status);
      throw new Error('Failed to post comment');
    }
  } catch (error) {
    console.error('Error posting comment:', error.message);
    throw new Error('Failed to post comment');
  }
};



