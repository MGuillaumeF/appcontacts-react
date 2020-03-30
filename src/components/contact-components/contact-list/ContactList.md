
The **ContactList** component has

- no _props_
- no _state_

This ContactList display all Contacts of Context, this component require ContactsProvider scope

```html
import { ContactsProvider } from './components/contact-components/contact-context/ContactContext';

<ContactsProvider>
    <ContactList/>
</ContactsProvider>
```