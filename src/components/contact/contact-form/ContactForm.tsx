import * as React from 'react';
import { Consumer } from '../contact-context/ContactContext';
import { EMPTY_CONTACT, IState } from '../ContactUtils';

/**
 * Form component to add contact
 * @param props To redirect to the list page after add contact in context
 */
export default function ContactForm(props: { history: { push: Function } }) {
    // Add contact object in state of form
    const [contact, setContact] = React.useState(EMPTY_CONTACT);
    /**
     * Funtion to accept change of Contact form
     * @param value The value of input
     * @param key The key of contact object to update
     */
    const onChange = (value: string, key: string) => {
        let contactUpdated: any = { ...contact };
        contactUpdated[key] = value;
        setContact(contactUpdated);
    };
    /**
     * Function to add contact in context/list
     * @param event The submit event
     * @param context The context to add contact
     */
    const onSubmit = (event: { preventDefault: Function }, context: IState) => {
        event.preventDefault();
        context.dispatch({ type: 'ADD_CONTACT', payload: contact });
        setContact(EMPTY_CONTACT);
        props.history.push('/');
    };
    /**
     * Render of ContactForm component
     */
    return (
        <Consumer>
            {context => {
                return (
                    <div className="card mb-3">
                        <div className="card-header">Add a Contact</div>
                        <div className="card-body">
                            <form onSubmit={(event) => { onSubmit(event, context) }}>
                                <div className="form-group">
                                    <label htmlFor="name">Name</label>
                                    <input
                                        type="text"
                                        className="form-control form-control-lg"
                                        placeholder="Name..."
                                        name="name"
                                        value={contact.name}
                                        onChange={(event) => { onChange(event.target.value, 'nom') }}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="name">Email</label>
                                    <input
                                        type="email"
                                        className="form-control form-control-lg"
                                        placeholder="Email..."
                                        name="email"
                                        value={contact.email}
                                        onChange={(event) => { onChange(event.target.value, 'email') }}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="tel">Telephone</label>
                                    <input
                                        type="tel"
                                        className="form-control form-control-lg"
                                        placeholder="Telephone..."
                                        name="tel"
                                        value={contact.tel}
                                        onChange={(event) => { onChange(event.target.value, 'tel') }}
                                    />
                                </div>
                                <input
                                    type="submit"
                                    value="Add Contact"
                                    className="btn btn-block btn-primary"
                                />
                            </form>
                        </div>
                    </div>
                )
            }}
        </Consumer>
    );
}
