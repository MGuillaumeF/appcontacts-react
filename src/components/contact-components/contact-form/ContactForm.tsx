import React, { useState } from 'react';
import { ContactsConsumer, IContactsContextState } from '../contact-context/ContactContext';
import { EMPTY_CONTACT } from '../../../ConstantsUtils';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import Paper from '@material-ui/core/Paper';
import { useTranslation } from 'react-i18next';
import Container from '@material-ui/core/Container';

import './ContactForm.css'
import TextInput from '../../text-input/TextInput';

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
    const [contact, setContact] = useState(EMPTY_CONTACT);
    const [submited, setSubmited] = useState(false);

    const inputs: Array<any> = [
        {
            name: 'lastName',
            limitor: /^[\wâäàéèêëîïôöùüûç\-]*$/i,
            validator: /^[\wâäàéèêëîïôöùüûç][\wâäàéèêëîïôöùüûç\-]+$/i,
            value: contact.lastName,
            onChangeMutation: (value: string) => value.toUpperCase(),
            onChange: (value: string) => { onChange(value, 'lastName') }
        },
        {
            name: 'firstName',
            limitor: /^[\wâäàéèêëîïôöùüûç\-\s]*$/i,
            validator: /^[\wâäàéèêëîïôöùüûç][\wâäàéèêëîïôöùüûç\-\s]+$/i,
            value: contact.firstName,
            onChangeMutation: (value: string) => {
                let val : string = value.toLowerCase();
                if (/\s/.test(val)) {
                    let valArr: string[] = val.split(' ');
                    valArr = valArr.map(element => {
                        return element.slice(0, 1).toUpperCase() + element.slice(1);
                    });
                    val = valArr.join(' ');
                }
                if (/\-/.test(val)) {
                    let valArr: string[] = val.split('-');
                    valArr = valArr.map(element => {
                        return element.slice(0, 1).toUpperCase() + element.slice(1);
                    });
                    val = valArr.join('-');
                }
                val = val.slice(0, 1).toUpperCase() + val.slice(1);
                return val
            },
            onChange: (value: string) => { onChange(value, 'firstName') }
        },
        {
            name: 'email',
            limitor: /^[A-Za-z0-9\-_\.@]*$/,
            validator: /^[A-Za-z0-9\-_\.]+@[A-Za-z0-9\-_]+\.[A-Za-z]{2,4}$/,
            value: contact.email,
            message: true,
            onChange: (value: string) => { onChange(value, 'email') }
        },
        {
            name: 'tel',
            limitor: /^((\+\d{0,18})|(\d{0,18}))$/,
            validator: /^(?:\+\d{9,18})|(?:\d{7,18})$/,
            value: contact.tel,
            message: true,
            onChange: (value: string) => { onChange(value, 'tel') }
        }
    ];

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
    const onSubmit = (context: IContactsContextState) => {
        if (isValidSubmitForm()) {
            context.dispatch({ type: 'ADD_CONTACT', payload: contact });
            setContact(EMPTY_CONTACT);
            props.history.push('/');
        }
        setSubmited(true);
    };

    /**
     * Function to check validity of inputs content before submit
     */
    const isValidSubmitForm = () => {
        let result: boolean = true;
        inputs.forEach((input) => {
            console.log(result, input.name, contact, input.validator.test(input.value));
            result = result && input.validator.test(input.value);
        });
        return result;
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
                            <h2>{t('components.contact-form.title')}</h2>
                            <form noValidate autoComplete="off">
                                {inputs.map((input, index) => {
                                    return (
                                        <TextInput
                                            key={index}
                                            fullWidth={true}
                                            submited={submited}
                                            margin='normal'
                                            label={t(`components.contact-form.inputs.${input.name}.label`)}
                                            required
                                            value={input.value}
                                            onChange={input.onChange}
                                            limitorPattern={input.limitor}
                                            validatorPattern={input.validator}
                                            onChangeMutation={input.onChangeMutation}
                                            message={input.message ? { info: t(`components.contact-form.inputs.${input.name}.help-message`), error: t(`components.contact-form.inputs.${input.name}.error-message`) } : undefined}
                                        />
                                    );
                                })}
                                <FormControl fullWidth={true} margin='normal'>
                                    <Button
                                        variant="contained"
                                        color="primary" onClick={() => { onSubmit(context) }}
                                    >
                                        {t('components.contact-form.inputs.submit.text')}
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
