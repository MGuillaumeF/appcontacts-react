import * as React from 'react';
import Contact from '../contact/Contact';

export interface IListProps {
}

export default function List (props: IListProps) {
    let [contacts, setContacts] = React.useState([
        {
            id: 1, 
            nom : '1JonDoe', 
            email : 'jon@gmail.fr', 
            tel : '555-555-5555'
        }, {
            id: 2, 
            nom : '2JonDoe', 
            email : 'jon@gmail.fr', 
            tel : '555-555-5555'
        }, {
            id: 3, 
            nom : '3JonDoe', 
            email : 'jon@gmail.fr', 
            tel : '555-555-5555'
        }, {
            id: 4, 
            nom : '4JonDoe', 
            email : 'jon@gmail.fr', 
            tel : '555-555-5555'
        },
    ]);
    const onDeleteContact = (id : number) => {
        const newContacts = contacts.filter(contact => contact.id !== id);
        setContacts(newContacts);
    };
  return (
    <div>
        {contacts.map(contact => (
            <Contact 
                key={contact.id}
                nom={contact.nom}
                email={contact.email}
                tel={contact.tel}
                onDelete={() => {onDeleteContact(contact.id)}}
                />
        ))}
    </div>
  );
}
