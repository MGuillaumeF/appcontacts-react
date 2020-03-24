import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header/Header'
import ContactList from './components/contact/contact-list/ContactList';
import { Provider } from './components/contact/contact-context/ContactContext';
import ContactForm from './components/contact/contact-form/ContactForm';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import AboutUs from './components/about-us/AboutUs';

function App() {
  return (
    <Provider>
      <Router>
        <Header/>
        <div className="container">
          <Route exact path="/" component={ContactList}/>
          <Route exact path="/add" component={ContactForm}/>
          <Route exact path="/about" component={AboutUs}/>
        </div>

      </Router>
    </Provider>
  );
}

export default App;
