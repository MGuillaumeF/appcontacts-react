import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header/Header'
import List from './components/list/List';
import Content from './components/content/Content';
import { Provider } from './components/context/Context';

function App() {
  return (
    <Provider>
      <Header/>
      <div className="container">
        <List/>
        <Content/>
      </div>
    </Provider>
  );
}

export default App;
