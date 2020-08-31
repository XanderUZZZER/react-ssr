import React, { Fragment } from 'react';

const NotFoundPage = ({ staticContext = {} }) => {
  staticContext.notFound = true;
  return (
    <Fragment>
      <h1 className='center-align'>
        Page not found
    </h1>
    </Fragment>
  )
}

export default {
  component: NotFoundPage
}
