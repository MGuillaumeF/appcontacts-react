
The **ContactForm** component has local state _contacts : IContact_

This ContactForm is used to add Contact in Context, this component require ContactsProvider scope

```html
import { ContactsProvider } from './components/contact-components/contact-context/ContactContext';

<ContactsProvider>
    <ContactForm/>
</ContactsProvider>
```