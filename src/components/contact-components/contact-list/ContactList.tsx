import React, { useEffect } from 'react';
import Contact, { IContactWithId } from '../contact/Contact';
import { ContactsConsumer } from '../contact-context/ContactContext';
import { useTranslation } from 'react-i18next';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';

/**
 * The Contact List component to display all contact
 */
export default function ContactList() {
  const { t } = useTranslation();
  /**
   * Hook function to print in log after component creation
   */
  useEffect(() => {
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
            <Typography variant="h4" component="h2" color="textPrimary">
              {t('components.contact-list.title')}
            </Typography>
            {value.contacts.length > 0 ? (<Card>
              {value.contacts.map((contact: IContactWithId) => (
                <Contact
                  key={contact.id}
                  id={contact.id}
                  lastName={contact.lastName}
                  firstName={contact.firstName}
                  email={contact.email}
                  tel={contact.tel}
                />
              ))}
            </Card>) : (
                <Typography variant="body1" component="p" color="textSecondary">
                  {t('components.contact-list.empty-list')}
                </Typography>
              )}
          </Container>
        )
      }}
    </ContactsConsumer>
  );
}
