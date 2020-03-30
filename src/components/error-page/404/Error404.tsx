import * as React from 'react';

/**
 * The **Error 404** component page is to inform user of bad access pages
 */
export default function Error404 () {
  return (
    <React.Fragment>
        <h1 className='display-5 error'>Error 404</h1>
        <p>
            Page not found
        </p>
      </React.Fragment>
  );
}
