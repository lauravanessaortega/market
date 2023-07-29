import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Tickets = () => {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    axios.get('/api/tickets')
      .then(response => setTickets(response.data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div>
      <h2>Lista de Tickets</h2>
      <ul>
        {tickets.map(ticket => (
          <li key={ticket._id}>
            <p>Fecha: {ticket.date}</p>
            <p>Subtotal: ${ticket.subtotal}</p>
            <p>IVA: ${ticket.iva}</p>
            <p>Total: ${ticket.total}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tickets;
