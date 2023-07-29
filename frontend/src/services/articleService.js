import api from './api';

export const getArticles = async () => {
  try {
    const response = await api.get('/articles');
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const addArticle = async (articleData) => {
  try {
    const response = await api.post('/articles', articleData);
    return response.data;
  } catch (error) {
    throw error;
  }
};
