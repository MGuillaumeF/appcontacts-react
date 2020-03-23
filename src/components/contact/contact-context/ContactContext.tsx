import * as React from 'react';
import { EMPTY_ANY } from '../ContactUtils';

export const contactReducer = (state : any, action : any) => {
    switch(action.type) {
        case 'ADD_CONTACT' :
            console.log('add clicked', state, action);
            action.payload.id = state.currentContactId;
            return {
                contacts : [action.payload, ...state.contacts],
                dispatch : state.dispatch,
                currentContactId : ++state.currentContactId
            }
        case 'DELETE_CONTACT' :
            console.log('delete clicked', state, action);
            return {
                contacts : state.contacts.filter((contact: any) => contact.id !== action.payload),
                dispatch : state.dispatch,
                currentContactId : state.currentContactId
            }
        default :
            return state;
    }
};

export const ContactContext = React.createContext(EMPTY_ANY);

export function Provider (props : any) {
    let [contacts, setContacts] = React.useState({
        currentContactId : 1,
        contacts : [],
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
