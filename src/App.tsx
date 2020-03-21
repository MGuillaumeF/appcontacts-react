import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header/Header'
import List from './components/list/List';
import Content from './components/content/Content';

function App() {
  return (
    <div className="App">
      <Header/>
      <div className="container">
        <List/>
        <Content/>
      </div>
    </div>
  );
}

export default App;
