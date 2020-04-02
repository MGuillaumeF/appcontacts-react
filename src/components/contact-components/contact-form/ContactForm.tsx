import * as React from 'react';
import { ContactsConsumer, IContactsContextState } from '../contact-context/ContactContext';
import { EMPTY_CONTACT } from '../../../ConstantsUtils';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Paper from '@material-ui/core/Paper';
import { useTranslation } from 'react-i18next';
import Container from '@material-ui/core/Container';

import './ContactForm.css'

/**
 * Validation RegExp to display error and refuse bad form
 */
const inputValidators: any = {
    name: /^[A-Z][A-Z\-]+$/,
    email: /^[A-Za-z0-9\-_\.]+@[A-Za-z0-9\-_]+\.[A-Za-z]{2,4}$/,
    tel: /^(?:\+\d{11})|(?:\d{10})$/
};

/**
 * Limitation RegExp to limit user input keyboard
 */
const inputLimitors: any = {
    name: /^[A-Z\-]*$/,
    email: /^[A-Za-z0-9\-_\.@]*$/,
    tel: /^((\+\d{0,11})|(\d{0,10}))$/
};

/**
* The Contact interface with mandatory id 
* To manipulate Contact after creation
*/
export interface IContactForm {
    /**
     * The history object is React props<br/>
     * The push function is React props attribut to make redirection with ReactRouter  
     */
    history: {
        push: Function
    }
}

/**
 * Form component to add contact
 * @param props To redirect to the list page after add contact in context
 */
export default function ContactForm(props: IContactForm) {
    const { t } = useTranslation();
    // Add contact object in state of form
    const [contact, setContact] = React.useState(EMPTY_CONTACT);
    /**
     * Funtion to accept change of Contact form
     * @param value The value of input
     * @param key The key of contact object to update
     */
    const onChange = (value: string, key: string) => {
        let contactUpdated: any = { ...contact };
        contactUpdated[key] = (key === 'name' ? value.toUpperCase() : value).trim();
        if (value.length === 0 || isValidChangeInputContent(key, contactUpdated[key])) {
            setContact(contactUpdated);
        }
    };
    /**
     * Function to add contact in context/list
     * @param event The submit event
     * @param context The context to add contact
     */
    const onSubmit = (context: IContactsContextState) => {
        if (isValidSubmitForm()) {
            context.dispatch({ type: 'ADD_CONTACT', payload: contact });
            setContact(EMPTY_CONTACT);
            props.history.push('/');
        }
    };

    /**
     * Function to check validity of inputs content before submit
     */
    const isValidSubmitForm = () => {
        let result: boolean = true;
        const keys: Array<string> = Object.keys(inputValidators);
        for (let i = 0; i < keys.length; i += 1) {
            result = result && isValidSubmitInputContent(keys[i]);
        }
        return result;
    }

    /**
     * Function to check validity of inputs content before submit
     * @param inputKey
     */
    const isValidSubmitInputContent = (inputKey: string) => {
        let contactCopy: any = { ...contact };
        return inputValidators[inputKey].test(contactCopy[inputKey]);
    }

    /**
     * Function to check validity of inputs content before change value of state
     * @param inputKey 
     * @param value 
     */
    const isValidChangeInputContent = (inputKey: string, value: string) => {
        return inputLimitors[inputKey].test(value);
    }

    /**
     * Render of ContactForm component
     */
    return (
        <ContactsConsumer>
            {context => {
                return (
                    <Container maxWidth="sm" className='padding-1'>

                        <Paper className="padding-1">
                            <h2>{t('pages.addContact.title')}</h2>
                            <form noValidate autoComplete="off">
                                <FormControl fullWidth={true} margin='normal'>
                                    <InputLabel htmlFor="name">Name</InputLabel>
                                    <TextField id="name" label={t('pages.addContact.inputs.name.placeholder')}
                                        required={true}
                                        className="form-control form-control-lg"
                                        value={contact.name}
                                        error={contact.name.length > 0 && !isValidSubmitInputContent('name')}
                                        onChange={(event) => { onChange(event.target.value, 'name') }}
                                    />
                                </FormControl>
                                <FormControl fullWidth={true} margin='normal'>
                                    <InputLabel htmlFor="email">Email Address</InputLabel>
                                    <TextField id="email" label={t('pages.addContact.inputs.email.placeholder')}
                                        required={true}
                                        className="form-control form-control-lg"
                                        value={contact.email}
                                        error={contact.email.length > 0 && !isValidSubmitInputContent('email')}
                                        onChange={(event) => { onChange(event.target.value, 'email') }}
                                    />
                                    <FormHelperText id="email-helper-text" error={contact.email.length > 0 && !isValidSubmitInputContent('email')} >
                                        {contact.email.length > 0 && !isValidSubmitInputContent('email') ? t('pages.addContact.inputs.email.error-message') : t('pages.addContact.inputs.email.help-message')}
                                    </FormHelperText>
                                </FormControl>
                                <FormControl fullWidth={true} margin='normal'>
                                    <InputLabel htmlFor="telephone">Telephone Number</InputLabel>
                                    <TextField id="telephone" label={t('pages.addContact.inputs.tel.placeholder')}
                                        required={true}
                                        className="form-control form-control-lg"
                                        value={contact.tel}
                                        error={contact.tel.length > 0 && !isValidSubmitInputContent('tel')}
                                        onChange={(event) => { onChange(event.target.value, 'tel') }}
                                    />
                                    <FormHelperText id="tel-helper-text" error={contact.tel.length > 0 && !isValidSubmitInputContent('tel')} >
                                        {contact.tel.length > 0 && !isValidSubmitInputContent('tel') ? t('pages.addContact.inputs.tel.error-message') : t('pages.addContact.inputs.tel.help-message')}
                                    </FormHelperText>
                                </FormControl>
                                <FormControl fullWidth={true} margin='normal'>
                                    <Button
                                        variant="contained"
                                        color="primary" onClick={() => { onSubmit(context) }}
                                    >
                                        {t('pages.addContact.inputs.submit.text')}
                                    </Button>
                                </FormControl>
                            </form>
                        </Paper>
                    </Container>
                )
            }}
        </ContactsConsumer>
    );
}
