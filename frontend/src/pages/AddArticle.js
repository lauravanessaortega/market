import React, { useState } from 'react';
import axios from 'axios';

const AddArticle = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState(0);
  const [stock, setStock] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newArticle = {
      name,
      price,
      stock,
    };

    axios.post('/api/articles', newArticle)
      .then(response => {
        console.log('Artículo agregado:', response.data);
        // Limpiar el formulario después de agregar el artículo
        setName('');
        setPrice(0);
        setStock(0);
      })
      .catch(error => console.log(error));
  };

  return (
    <div>
      <h2>Agregar Artículo</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Nombre:</label>
          <input type="text" id="name" value={name} onChange={e => setName(e.target.value)} />
        </div>
        <div>
          <label htmlFor="price">Precio:</label>
          <input type="number" id="price" value={price} onChange={e => setPrice(e.target.value)} />
        </div>
        <div>
          <label htmlFor="stock">Stock:</label>
          <input type="number" id="stock" value={stock} onChange={e => setStock(e.target.value)} />
        </div>
        <button type="submit">Agregar Artículo</button>
      </form>
    </div>
  );
};

export default AddArticle;
