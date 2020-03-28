ContactContext Consumer example :

The context usage of Consumer, the consumer give access to the state of context

The content of Consumer can access to context state by value attribut

```tsx
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