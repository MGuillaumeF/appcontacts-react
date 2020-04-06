import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));


/**
 * The Header banner of application with Link to access all pages
 */
export default function Header() {
  const { t, i18n } = useTranslation();
  // save the curren language
  const [language, setLanguage] = useState(i18next.language);
  // save all languages
  const languages = i18next.languages;

  /**
   * Funtion to change the language of application
   */
  const onChangeLanguage = () => {
    if (languages.length > 1) {
      i18n.changeLanguage(languages[1]);
      setLanguage(languages[1]);
    }
  }

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event : any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const classes = useStyles();


  return (
    <div className={classes.root}>

      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu" className={classes.menuButton} onClick={handleClick}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6"  className={classes.title}>
            <Link to='/' style={{color : "inherit", textDecoration : 'none' }}>{t('application-name')}</Link>
          </Typography>
          <Button color="inherit" onClick={onChangeLanguage}>{language}</Button>
        </Toolbar>
      </AppBar>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <Link style={{color : "inherit", textDecoration : 'none' }} to='/' ><MenuItem onClick={handleClose}>{t('components.contact-list.link')}</MenuItem></Link>
        <Link style={{color : "inherit", textDecoration : 'none' }} to='/add' ><MenuItem onClick={handleClose}>{t('components.contact-form.link')}</MenuItem></Link>
        <Link style={{color : "inherit", textDecoration : 'none' }} to='/about' ><MenuItem onClick={handleClose}>{t('components.about-us.link')}</MenuItem></Link>
      </Menu>

    </div>

  );
}

