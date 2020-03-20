import * as React from 'react';
import Contact from '../contact/Contact';

export interface IListProps {
}

export default function List (props: IListProps) {
    let state = {
            contacts : React.useState(
                [
                {id: 1, nom : 'JonDoe', email : 'jon@gmail.fr', tel : '555-555-5555'},
                {id : 2, nom : 'JonDoe', email : 'jon@gmail.fr', tel : '555-555-5555'}
            ]
        )
    };
    console.log(state);
  return (
    <div>
        {state.contacts[0].map(contact => (
            <Contact key={contact.id} nom={contact.nom} email={contact.email} tel={contact.tel}/>
        ))}
    </div>
  );
}
