import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Articles from './pages/Articles';
import Tickets from './pages/Tickets';
import AddArticle from './pages/AddArticle';
import AddTicket from './pages/AddTicket';
import NotFound from './pages/NotFound';
import Header from './components/Header';
import Footer from './components/Footer';
import Menu from './components/Menu';

const App = () => {
  return (
    <div>
      <Router>
        <Header />
        <Menu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/tickets" element={<Tickets />} />
          <Route path="/add-article" element={<AddArticle />} />
          <Route path="/add-ticket" element={<AddTicket />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
