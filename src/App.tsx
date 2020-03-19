import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header/Header'
import Contact from './components/contact/Contact'

function App() {
  return (
    <div className="App">
      <Header/>
      <div className="container">
        <Contact/>
        <Contact/>
      </div>
    </div>
  );
}

export default App;
