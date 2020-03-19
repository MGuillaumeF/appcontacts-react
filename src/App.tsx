import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Title from './components/title/Title';

function App() {
  const applicationStateName1 : any = useState('Hugo');
  const applicationStateName2 : any = useState('Eva');
  return (
    <div className="App">
      <Title nom={applicationStateName1[0]}/>
      <Title nom={applicationStateName2[0]}/>
    </div>
  );
}

export default App;
