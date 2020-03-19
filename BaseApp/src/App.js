import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Home';
import './App.css';
import MicroFrontEnds from '../src/client/components/MicroFrontEnds';

const App = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/topic" component={MicroFrontEnds.Topic} />
  </Switch>
);

export default App;
