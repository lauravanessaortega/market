import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header style={headerStyle}>
      <h1>Supermarket App</h1>
      <nav>
        <ul style={navStyle}>
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
    </header>
  );
};

const headerStyle = {
  background: '#333',
  color: '#fff',
  textAlign: 'center',
  padding: '10px',
};

const navStyle = {
  listStyle: 'none',
  display: 'flex',
  justifyContent: 'space-around',
};

export default Header;
