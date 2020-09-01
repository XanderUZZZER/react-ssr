import React, { Fragment } from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { renderRoutes } from 'react-router-config';
import serialize from 'serialize-javascript'
import Routes from '../client/Routes';
import { Helmet } from 'react-helmet';

export default (req, store, context) => {
  const content = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.path} context={context}>
        <Fragment>{renderRoutes(Routes)}</Fragment>
      </StaticRouter>
    </Provider>
  );

  const helmet = Helmet.renderStatic();
  const title = helmet.title.toString();
  const meta = helmet.meta.toString();

  return `
    <html>
      <head>
        ${title}
        ${meta}
       <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
       <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
      </head>
      <body>
        <div id ="root">${content}</div>
        <script>
          window.INITIAL_STATE = ${serialize(store.getState())}
        </script>
        <script src="bundle.js"></script>
      </body>
    </html>
  `;
}