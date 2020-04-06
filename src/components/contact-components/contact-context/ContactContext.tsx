import * as React from 'react';
import { EMPTY_ANY } from '../../../ConstantsUtils';
import { IContactWithId } from '../contact/Contact';

/**
 * Context Interface
 * The Action interface to explain the payload format
 * key id to DELETE action
 * keys name, email, tel to ADD action
 */
export interface IContactsContextAction {
    type : string,
    payload : {
        name? : string,
        email? : string,
        tel? : string,
        id? : number
    }
}

/**
 * Context Interface
 * The State interface to explain the Context state content
 */
export interface IContactsContextState {
    currentContactId : number,
    contacts : Array<IContactWithId>,
    dispatch : any
}

const ContactContext = React.createContext(EMPTY_ANY);

/**
 * The reducer function to interact with context state
 * @param state The state of context
 * @param action The data passed to interact with context
 */
export const contactReducer = (state: IContactsContextState, action: IContactsContextAction) => {
    switch (action.type) {
        case 'ADD_CONTACT':
            console.log('add clicked', state, action);
            action.payload.id = state.currentContactId;
            const nContact : IContactWithId = action.payload as IContactWithId;
            return {
                contacts: [nContact, ...state.contacts],
                dispatch: state.dispatch,
                currentContactId: ++state.currentContactId
            }
        case 'DELETE_CONTACT':
            console.log('delete clicked', state, action);
            return {
                contacts: state.contacts.filter((contact: IContactWithId) => contact.id !== action.payload.id),
                dispatch: state.dispatch,
                currentContactId: state.currentContactId
            }
        default:
            return state;
    }
};

/**
 * The Provider component to defined the context content
 * @param props The props object to interact with context content 
 */
export function ContactsProvider(props: {children : any}) {
    const listDefaultContacts : Array<IContactWithId> = [
                {
                    id: 0,
                    email: 'jean.dupont@email.fr',
                    name: 'DUPONT',
                    tel: '012345689'
                }
            ];
    /**
     * State of context with default values
     */
    const [state, setState] = React.useState(
        {
            currentContactId: 1,
            contacts: listDefaultContacts,
            // fonction to write in context
            dispatch: (action: IContactsContextAction) => {
                setState((state : IContactsContextState) => contactReducer(state, action));
            }
        }
    );
    // Context Provider component render
    return (
        <ContactContext.Provider value={state}>
            {props.children}
        </ContactContext.Provider>
    );
}

// The Consumer of context to read context state content
export const ContactsConsumer = ContactContext.Consumer;
