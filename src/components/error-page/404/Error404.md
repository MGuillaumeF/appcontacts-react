
The page **Error 404** has

- no _props_
- no _state_
- no _context_

This page is used if path is Unknown

```tsx
<Error404 />
```

Here we can use **Error404** to diplay error page if path is not in list :

- */*
- */page1*
- */page2*

```html
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from './components/pages/home-page/HomePage';
import Page1 from './components/pages/page1/Page1';
import Page2 from './components/pages/page2/Page2';
import Error404 from './components/error-page/404/Error404';

export default function App() {
    return (
        <React.Fragment>
        <Router>
            <Switch>
                <Route exact path="/" component={HomePage}/>
                <Route exact path="/page1" component={Page1}/>
                <Route exact path="/page2" component={Page2}/>
                <Route component={Error404}/>
            </Switch>
        </Router>
        </React.Fragment>
    );
}
```