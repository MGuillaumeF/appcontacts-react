import React, { Suspense } from 'react';
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import { ThemeProvider } from '@material-ui/styles';
import { Container, Button } from '@material-ui/core';

import Header from './components/header/Header';
import ContactList from './components/contact-components/contact-list/ContactList';
import { ContactsProvider } from './components/contact-components/contact-context/ContactContext';
import ContactForm from './components/contact-components/contact-form/ContactForm';
import AboutUs from './components/about-us/AboutUs';
import Error404 from './components/error-page/404/Error404';
import themeUI from './themes/theme';
import { useTranslation } from 'react-i18next';

function App() {
  const [selectedTheme, changeTheme] = React.useState(themeUI.light);
  const { t } = useTranslation();
  return (
    <ThemeProvider theme={selectedTheme}>
      <Suspense fallback="loading">
        <div style={{
          minHeight: '100vh',
          marginTop: '0',
          zIndex: 1,
          backgroundColor: selectedTheme.palette.background.default,
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
          <Button style={{position : 'absolute', bottom : '1em', left : '1em'}} onClick={() => {changeTheme(selectedTheme.palette.type === 'light'? themeUI.dark : themeUI.light)}} variant="contained" color='default' >{t('theme.' + selectedTheme.palette.type)}</Button>
        </div>
      </Suspense>
    </ThemeProvider>
  );
}

export default App;
