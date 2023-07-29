import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Menu from './components/Menu';
import Home from './pages/Home';
import Articles from './pages/Articles';
import Tickets from './pages/Tickets';
import AddArticle from './pages/AddArticle';
import AddTicket from './pages/AddTicket';
import NotFound from './pages/NotFound';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Menu />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/articles" component={Articles} />
        <Route path="/tickets" component={Tickets} />
        <Route path="/add-article" component={AddArticle} />
        <Route path="/add-ticket" component={AddTicket} />
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
