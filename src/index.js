import '@babel/polyfill';
import express from 'express';
import { matchRoutes } from 'react-router-config';
import Routes from './client/Routes';
import renderer from './helpers/renderer';
import createStore from './helpers/createStore';
import { loadData } from './client/pages/UsersListPage';

const app = express();

app.use(express.static('public'));

app.get('*', (req, res) => {
  const store = createStore();

  console.log(matchRoutes(Routes, req.path));
  const promises = matchRoutes(Routes, req.path).map(({ route }) => {
    return route.loadData && route.loadData(store);
  });

  Promise.all(promises).then(() => res.send(renderer(req, store)));


});



const PORT = process.env.PORT || 5000;

app.listen(PORT, () => { console.log(`Server started on ${PORT} port`); });