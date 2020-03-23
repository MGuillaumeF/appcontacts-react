import * as React from 'react';
import Contact from '../contact/Contact';
import { Consumer } from '../context/Context';

export default function List () {
  return (
    <Consumer>
      {value => {
        return (
          <React.Fragment>
            {value.contacts.map((contact: { id: number ; nom: string; email: string; tel: string; }) => (
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
