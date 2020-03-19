import * as React from 'react';
/*
export interface IContactProps {
    nom : string,
    email : string,
    tel : string
}*/

export default function Contact (props: any) {
  return (
    <div className='card card-body mb-3'>
      <h4>{props.nom}</h4>
      <ul className='card card-body mb-3'>
          <li className='list-group-item'>
            Email : {props.email}
          </li>
          <li className='list-group-item'>
            Téléphone : {props.tel}
          </li>
      </ul>
    </div>
  );
}
