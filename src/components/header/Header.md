The **Header** component has

- no _props_
- no _state_
- no _context_

The Header component use _Link_ component so he must be used in _ React Router_ scope

```html
import { HashRouter as Router } from "react-router-dom";
<Router>
    <Header/>
    <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route exact path="/page1" component={Page1}/>
        <Route exact path="/page2" component={Page2}/>
        <Route component={Error404}/>
    </Switch>
</Router>
```