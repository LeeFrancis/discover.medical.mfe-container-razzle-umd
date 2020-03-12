import App from './App';
import BrowserRouter from 'react-router-dom/BrowserRouter';
import React from 'react';
import { hydrate } from 'react-dom';
import Header from '../src/client/components/Header';
import Footer from '../src/client/components/Footer';

hydrate(
  <BrowserRouter>
    <Header />
    <hr/>
    <App />
    <hr/>
    <Footer />
  </BrowserRouter>,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept();
}
