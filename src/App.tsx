import React, {useState} from 'react';
import './App.css';
import Title from './components/title/Title';

function App() {
  const applicationStateName1 : any = useState('Hugo');
  const applicationStateName2 : any = useState('Eva');
  return (
    <div className="App">
      <Title nom={applicationStateName1[0]}>test</Title>
      <Title nom={applicationStateName2[0]}>test</Title>
      <Title>test</Title>
    </div>
  );
}

export default App;
