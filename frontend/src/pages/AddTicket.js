import React, { useState } from 'react';
import axios from 'axios';

const AddTicket = () => {
  const [date, setDate] = useState('');
  const [subtotal, setSubtotal] = useState(0);
  const [iva, setIva] = useState(0);
  const [total, setTotal] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTicket = {
      date,
      subtotal,
      iva,
      total,
    };

    axios.post('/api/tickets', newTicket)
      .then(response => {
        console.log('Ticket agregado:', response.data);
        // Limpiar el formulario después de agregar el ticket
        setDate('');
        setSubtotal(0);
        setIva(0);
        setTotal(0);
      })
      .catch(error => console.log(error));
  };

  return (
    <div>
      <h2>Agregar Ticket</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="date">Fecha:</label>
          <input type="text" id="date" value={date} onChange={e => setDate(e.target.value)} />
        </div>
        <div>
          <label htmlFor="subtotal">Subtotal:</label>
          <input type="number" id="subtotal" value={subtotal} onChange={e => setSubtotal(e.target.value)} />
        </div>
        <div>
          <label htmlFor="iva">IVA:</label>
          <input type="number" id="iva" value={iva} onChange={e => setIva(e.target.value)} />
        </div>
        <div>
          <label htmlFor="total">Total:</label>
          <input type="number" id="total" value={total} onChange={e => setTotal(e.target.value)} />
        </div>
        <button type="submit">Agregar Ticket</button>
      </form>
    </div>
  );
};

export default AddTicket;
