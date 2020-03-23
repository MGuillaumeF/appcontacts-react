import * as React from 'react';

export const contactReducer = (state : any, action : any) => {
    switch(action.type) {
        case 'DELETE_CONTACT' :
            console.log('delete clicked', state, action);
            return {
                contacts : state.contacts.filter((contact: any) => contact.id !== action.payload),
                dispatch : state.dispatch
            }
        default :
            return state;
    }
};
const EMPTY_ANY : any = {};
export const ContactContext = React.createContext(EMPTY_ANY);

export function Provider (props : any) {
    let [contacts, setContacts] = React.useState({
        contacts : [
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
            }
        ],
        dispatch : (action : any) => {
            setContacts(contacts => contactReducer(contacts, action));
        }
    }
);
    
  return (
    <ContactContext.Provider value={contacts}>
        {props.children}
    </ContactContext.Provider>
  );
}

export const Consumer = ContactContext.Consumer;
