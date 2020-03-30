import * as React from 'react';
import { ContactsConsumer } from '../contact-context/ContactContext';

/**
 * The Contact interface with optional id
 * To manipulate Contact before creation
 */
export interface IContact {
  /**
   * The name of Contact
   */
  name : string,
  /**
   * The email of contact
   */
  email : string,
  /**
   * The telephone number of Contact
   */
  tel : string,
  /**
   * The id of Contact (assigned by context dispatcher)
   */
  id? : number
}

/**
* The Contact interface with mandatory id 
* To manipulate Contact after creation
*/
export interface IContactWithId {
  /**
   * The name of Contact
   */
  name : string,
  /**
   * The email of contact
   */
  email : string,
  /**
   * The telephone number of Contact
   */
  tel : string,
  /**
   * The id of Contact (assigned by context dispatcher)
   */
  id : number
}

/**
 * The component to display Contact card item
 * @param props The contact object content
 */
export default function Contact (props: IContact) {

  /**
   * The display state 
   * true show content card
   * false hide content card
   */
  const [show, showContact] = React.useState(false);

  /**
   * Function to delete a contact in list
   * @param contact The contact object content 
   * @param dispatch The function to interact with context, to delete contact in context state
   */
  const onDelete = (contact : IContact, dispatch : Function) => {
    if (typeof(contact.id) !== 'undefined') {
      dispatch({type : 'DELETE_CONTACT', payload : {id : contact.id}});
    }
  };
  /**
   * render of component with ContactContext closure
   */
  return (
    <ContactsConsumer>
      {value => {
        return (
          <div className='card card-body mb-3 text-center'>
            <h4>{props.name}&nbsp;
            <i 
              style={{cursor : 'pointer'}} 
              className='fas fa-sort-down' 
              onClick={() => showContact(display => !display)}
            ></i>
            <i 
              style={{cursor : 'pointer', float : 'right', color : 'red'}} 
              className='fas fa-times' 
              onClick={() => {onDelete(props, value.dispatch)}}
            ></i>
            </h4>
            {show ? (
              <ul className='card card-body mb-3'>
                <li className='list-group-item'>
                  Email : {props.email}
                </li>
                <li className='list-group-item'>
                  Telephone : {props.tel}
                </li>
            </ul>) : null}
          </div>
        )}}
    </ContactsConsumer>
  );
}
