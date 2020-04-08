
The **ContactList** component has state _contact : IContact_

This Contact display Contact card with all information of one contact of ContactContext, this component require ContactsProvider scope

```html
import { ContactsProvider } from './components/contact-components/contact-context/ContactContext';

<ContactsProvider>
    <Contact 
        id={id}
        lastName={lastName}
        firstName={firstName}
        email={email}
        tel={tel}
    />
</ContactsProvider>
```