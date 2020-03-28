import * as React from 'react';
import { EMPTY_ANY, IContactWithId, IState, IAction} from '../ContactUtils';

const ContactContext = React.createContext(EMPTY_ANY);

/**
 * The reducer function to interact with context state
 * @param state The state of context
 * @param action The data passed to interact with context
 */
export const contactReducer = (state: IState, action: IAction) => {
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
export function Provider(props: {children : any}) {
    const listDefaultContacts : Array<IContactWithId> = [
                {
                    id: 0,
                    email: 'jean.dupont@email.fr',
                    name: 'Dupont',
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
            dispatch: (action: IAction) => {
                setState((state : IState) => contactReducer(state, action));
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
export const Consumer = ContactContext.Consumer;
