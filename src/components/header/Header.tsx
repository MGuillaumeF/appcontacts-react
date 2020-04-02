import React from 'react';
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';

/**
 * The Header banner of application with Link to access all pages
 */
export default function Header() {
  const { t, i18n } = useTranslation();
  return (
    <header>
      <nav className='navbar navbar-dark bg-primary mb-3 py-0'>
        <div className="container">
          <Link to='/' className='navbar-brand'>{t('application-name')}</Link>
          <ul className='navbar-nav d-inline-block'>
            <li className='nav-item d-inline-block mr-2'>
              <Link to='/' className='nav-link'>{t('pages.home.link')}</Link>
            </li>
            <li className='nav-item d-inline-block mr-2'>
              <Link to='/add' className='nav-link'>{t('pages.addContact.link')}</Link>
            </li>
            <li className='nav-item d-inline-block mr-2'>
              <Link to='/about' className='nav-link'>{t('pages.aboutUs.link')}</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

