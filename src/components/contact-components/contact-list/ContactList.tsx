import * as React from 'react';
import Contact, { IContactWithId } from '../contact/Contact';
import { ContactsConsumer } from '../contact-context/ContactContext';

/**
 * The Contact List component to display all contact
 */
export default function ContactList () {
  /**
   * Hook function to print in log after component creation
   */
  React.useEffect(() => {
    console.log('The component is mounted');
  });
  /**
   * The render of Contact List component with context closure
   */
  return (
    <ContactsConsumer>
      {value => {
        return (
          <React.Fragment>
            <h1 className='display-5 my-4'>My Contacts : </h1>
            {value.contacts.map((contact: IContactWithId) => (
                <Contact 
                    key={contact.id}
                    id={contact.id}
                    name={contact.name}
                    email={contact.email}
                    tel={contact.tel}
                    />
            ))}
          </React.Fragment>
        )
      }}
    </ContactsConsumer>
  );
}