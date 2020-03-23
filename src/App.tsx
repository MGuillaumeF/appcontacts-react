import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header/Header'
import List from './components/list/List';
import Content from './components/content/Content';
import { Provider } from './components/context/Context';
import AddContact from './components/addcontact/AddContact';

function App() {
  return (
    <Provider>
      <Header/>
      <div className="container">
        <AddContact/>
        <List/>
        <Content/>
      </div>
    </Provider>
  );
}

export default App;
