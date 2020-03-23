import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header/Header'
import ContactList from './components/contact/contact-list/ContactList';
import Content from './components/content/Content';
import { Provider } from './components/contact/contact-context/ContactContext';
import ContactForm from './components/contact/contact-form/ContactForm';

function App() {
  return (
    <Provider>
      <Header/>
      <div className="container">
        <Content/>
        <ContactForm/>
        <ContactList/>
      </div>
    </Provider>
  );
}

export default App;
