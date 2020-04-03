import React, {Suspense} from 'react';
import Header from './components/header/Header';
import ContactList from './components/contact-components/contact-list/ContactList';
import { ContactsProvider } from './components/contact-components/contact-context/ContactContext';
import ContactForm from './components/contact-components/contact-form/ContactForm';
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import AboutUs from './components/about-us/AboutUs';
import Error404 from './components/error-page/404/Error404';

function App() {
  return (
    <Suspense fallback="loading">
    <ContactsProvider>
      <Router>
        <Header/>
        <div className="container">
          <Switch>
            <Route exact path="/appcontacts-react" component={ContactList}/>
            <Route exact path="/" component={ContactList}/>
            <Route exact path="/add" component={ContactForm}/>
            <Route exact path="/about" component={AboutUs}/>

            <Route component={Error404}/>
          </Switch>
        </div>
      </Router>
    </ContactsProvider>
    </Suspense>
  );
}

export default App;
