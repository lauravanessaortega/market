import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
  return (
    <nav style={navStyle}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/articles">Articles</Link>
        </li>
        <li>
          <Link to="/tickets">Tickets</Link>
        </li>
        <li>
          <Link to="/add-article">Add Article</Link>
        </li>
        <li>
          <Link to="/add-ticket">Add Ticket</Link>
        </li>
      </ul>
    </nav>
  );
};

const navStyle = {
  width: '100%',
  background: '#f4f4f4',
  padding: '10px 0',
};

export default Menu;
