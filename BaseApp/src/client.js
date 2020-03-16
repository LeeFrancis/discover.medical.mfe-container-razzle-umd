import App from './App';
import BrowserRouter from 'react-router-dom/BrowserRouter';
import React from 'react';
import { hydrate } from 'react-dom';
import Header from '../src/client/components/Header';
import AppFooter from '../src/client/components/AppFooter';
import footer from "../server/config/footer";
const { footerLinks, socialLinks, logo, copyright } = footer;
import "discover.medical.react-component-library/lib/index.dmp.css";

hydrate(
  <BrowserRouter>
    <Header />
    <hr/>
    <App />
    <hr/>
    <AppFooter
            footerLinks={footerLinks}
            socialLinks={socialLinks}
            logo={logo}
            copyright={copyright}
    />
  </BrowserRouter>,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept();
}
