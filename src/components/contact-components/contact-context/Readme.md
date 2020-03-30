### ContactContext ContactsProvider example :

The context usage of ContactsProvider, the provider define the scope of context

All children can access to context state

```html
<ContactsProvider>
    ...
</ContactsProvider>
```

### ContactContext ContactsConsumer example :

The context usage of ContactsConsumer, the consumer give access to the state of context

The content of ContactsConsumer can access to context state by value attribut

```html
<ContactsConsumer>
    {value => {
        return (
            <div>
                ...
            </div>
        )
    }}
</ContactsConsumer>
```