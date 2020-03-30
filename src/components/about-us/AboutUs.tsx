import * as React from 'react';

/**
 * The **AboutUs** component page is to explain what is the application and who make it
 */
export default function AboutUs () {
  return (
    <React.Fragment>
      <h1 className='display-5'>About Us</h1>
      <p className="lead">This application is a Contact list of Udemy React learning</p>
      <p className="author">MGuillaumeF</p>
      <p>Version 1.0.0</p>
    </React.Fragment>
  );
}
