import * as React from 'react';
import Contact from '../contact/Contact';

export interface IListProps {
}

export default function List (props: IListProps) {
    let state = {
            contacts : React.useState(
                [
                {nom : 'JonDoe', email : 'jon@gmail.fr', tel : '555-555-5555'},
                {nom : 'JonDoe', email : 'jon@gmail.fr', tel : '555-555-5555'}
            ]
        )
    };
    console.log(state);
  return (
    <div>
        {state.contacts[0].map((contact, index) => (
            <Contact key={index} nom={contact.nom} email={contact.email} tel={contact.tel}/>
        ))}
    </div>
  );
}
