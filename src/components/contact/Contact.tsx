import * as React from 'react';

export interface IContactProps {
}

export default function App (props: IContactProps) {
  return (
    <div className='card card-body mb-3'>
      <h4></h4>
      <ul className='card card-body mb-3'>
          <li className='list-group-item'>
            Email : 
          </li>
          <li className='list-group-item'>
            Téléphone : 
          </li>
      </ul>
    </div>
  );
}
