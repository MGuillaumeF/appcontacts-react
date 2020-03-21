import * as React from 'react';

export interface IContactProps {
    nom : string,
    email : string,
    tel : string,
    onDelete : any
}


export default function Contact (props: IContactProps) {
  let [show, showContact] = React.useState(true);
  const onDelete = () => {
    props.onDelete();
  };
  return (
    <div className='card card-body mb-3 text-center'>
      <h4>{props.nom}&nbsp;
      <i 
        style={{cursor : 'pointer'}} 
        className='fas fa-sort-down' 
        onClick={() => showContact(display => !display)}
      ></i>
      <i 
        style={{cursor : 'pointer', float : 'right', color : 'red'}} 
        className='fas fa-times' 
        onClick={onDelete}
      ></i>
      </h4>
      {show ? (
        <ul className='card card-body mb-3'>
          <li className='list-group-item'>
            Email : {props.email}
          </li>
          <li className='list-group-item'>
            Téléphone : {props.tel}
          </li>
      </ul>) : null}
    </div>
  );
}
