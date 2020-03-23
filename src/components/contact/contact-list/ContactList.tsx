import * as React from 'react';
import Contact from '../Contact';
import { Consumer } from '../contact-context/ContactContext';
import { IContact } from '../ContactUtils';

export default function ContactList () {
  return (
    <Consumer>
      {value => {
        return (
          <React.Fragment>
            {value.contacts.map((contact: IContact) => (
                <Contact 
                    key={contact.id}
                    id={contact.id}
                    nom={contact.nom}
                    email={contact.email}
                    tel={contact.tel}
                    />
            ))}
          </React.Fragment>
        )
      }}
    </Consumer>
  );
}
