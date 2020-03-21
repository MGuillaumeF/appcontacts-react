import * as React from 'react';

export interface IContentProps {
}

export default function Content (props: IContentProps) {
  return (
      <React.Fragment>
        <h1>Few content.</h1>
        <p>.... my text</p>
      </React.Fragment>
  );
}
