import * as React from 'react';
import Contact, { IContactWithId } from '../contact/Contact';
import { ContactsConsumer } from '../contact-context/ContactContext';
import { useTranslation } from 'react-i18next';
import Container from '@material-ui/core/Container';

/**
 * The Contact List component to display all contact
 */
export default function ContactList () {
  const { t } = useTranslation();
  /**
   * Hook function to print in log after component creation
   */
  React.useEffect(() => {
    console.log('The component is mounted');
  });
  /**
   * The render of Contact List component with context closure
   */
  return (
    <ContactsConsumer>
      {value => {
        return (
          <Container maxWidth="sm" className='padding-1'>
            <h1 className='display-5'>{t('components.contact-list.title')}</h1>
            {value.contacts.length > 0 ? value.contacts.map((contact: IContactWithId) => (
                <Contact 
                    key={contact.id}
                    id={contact.id}
                    name={contact.name}
                    email={contact.email}
                    tel={contact.tel}
                    />
            )) : t('components.contact-list.empty-list')}
          </Container>
        )
      }}
    </ContactsConsumer>
  );
}
