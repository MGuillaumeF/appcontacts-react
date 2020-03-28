ContactContext Provider example :

The context usage of Provider, the provider define the scope of context

All children can access to context state

```html
<Provider>
    ...
</Provider>
```

ContactContext Consumer example :

The context usage of Consumer, the consumer give access to the state of context

The content of Consumer can access to context state by value attribut

```html
<Consumer>
    {value => {
        return (
            <div>
                ...
            </div>
        )
    }}
</Consumer>
```