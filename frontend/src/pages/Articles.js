import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Articles = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    axios.get('/api/articles')
      .then(response => setArticles(response.data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div>
      <h2>Lista de Artículos</h2>
      <ul>
        {articles.map(article => (
          <li key={article._id}>
            <p>Nombre: {article.name}</p>
            <p>Precio: ${article.price}</p>
            <p>Stock: {article.stock}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Articles;
