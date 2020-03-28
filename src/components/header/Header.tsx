import * as React from 'react';
import { Link } from "react-router-dom";

/**
 * The Header banner of application with Link to access all pages
 */
export default function Header () {
  return (
    <header>
      <nav className='navbar navbar-dark bg-primary mb-3 py-0'>
          <div className="container">
            <Link to='/'  className='navbar-brand'>AppContacts</Link>
            <ul className='navbar-nav d-inline-block'>
                <li className='nav-item d-inline-block mr-2'>
                    <Link to='/' className='nav-link'>Home</Link>
                </li>
                <li className='nav-item d-inline-block mr-2'>
                    <Link to='/add' className='nav-link'>Add</Link>
                </li>
                <li className='nav-item d-inline-block mr-2'>
                    <Link to='/about' className='nav-link'>About us</Link>
                </li>
            </ul> 
          </div>
      </nav>
    </header>
  );
}

