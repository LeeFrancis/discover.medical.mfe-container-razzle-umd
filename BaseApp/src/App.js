import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Home';
import './App.css';
import FactoryComponent from '../src/client/components/FactoryComponent';

const App = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/topic" component={FactoryComponent.Topic} />
  </Switch>
);

export default App;
