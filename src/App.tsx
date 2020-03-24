import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header/Header'
import ContactList from './components/contact/contact-list/ContactList';
import { Provider } from './components/contact/contact-context/ContactContext';
import ContactForm from './components/contact/contact-form/ContactForm';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AboutUs from './components/about-us/AboutUs';
import Error404 from './components/error-page/Error404';

function App() {
  return (
    <Provider>
      <Router>
        <Header/>
        <div className="container">
          <Switch>
            <Route exact path="/" component={ContactList}/>
            <Route exact path="/add" component={ContactForm}/>
            <Route exact path="/about" component={AboutUs}/>
            <Route component={Error404}/>
          </Switch>
        </div>

      </Router>
    </Provider>
  );
}

export default App;
