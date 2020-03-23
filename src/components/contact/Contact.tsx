import * as React from 'react';
import { Consumer } from '../context/Context';
import { IContact } from '../../contact-utils';

export default function Contact (props: IContact) {
  let [show, showContact] = React.useState(true);
  const onDelete = (id : number | undefined, dispatch : any) => {
    if (typeof(id) !== 'undefined') {
      dispatch({type : 'DELETE_CONTACT', payload : id});
    }
  };
  return (
    <Consumer>
      {value => {
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
              onClick={() => {onDelete(props.id, value.dispatch)}}
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
        )}}
    </Consumer>
  );
}
