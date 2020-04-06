import React, { Suspense } from 'react';
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import { ThemeProvider } from '@material-ui/styles';
import { Container } from '@material-ui/core';

import Header from './components/header/Header';
import ContactList from './components/contact-components/contact-list/ContactList';
import { ContactsProvider } from './components/contact-components/contact-context/ContactContext';
import ContactForm from './components/contact-components/contact-form/ContactForm';
import AboutUs from './components/about-us/AboutUs';
import Error404 from './components/error-page/404/Error404';
import theme from './components/themes/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Suspense fallback="loading">
        <div style={{
          height: '100vh',
          marginTop: '0',
          zIndex: 1,
          backgroundColor: theme.palette.background.default,
        }}>
          <ContactsProvider>
            <Router>
              <Header />
              <Container>
                <Switch>
                  <Route exact path="/appcontacts-react" component={ContactList} />
                  <Route exact path="/" component={ContactList} />
                  <Route exact path="/add" component={ContactForm} />
                  <Route exact path="/about" component={AboutUs} />

                  <Route component={Error404} />
                </Switch>
              </Container>
            </Router>
          </ContactsProvider>
        </div>
      </Suspense>
    </ThemeProvider>
  );
}

export default App;
