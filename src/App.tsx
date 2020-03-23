import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header/Header'
import List from './components/list/List';
import Content from './components/content/Content';
import { Provider } from './components/context/Context';
import ContactForm from './components/contact-form/ContactForm';

function App() {
  return (
    <Provider>
      <Header/>
      <div className="container">
        <Content/>
        <ContactForm/>
        <List/>
      </div>
    </Provider>
  );
}

export default App;
