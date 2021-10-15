import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Layout from './layout';
import Homepage from './pages/homepage';
import AboutUsPage from "./pages/about-us";

export default function App() {
  return (
    <Layout>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Homepage />
          </Route>
          <Route path="/about-us">
            <AboutUsPage />
          </Route>
        </Switch>
      </BrowserRouter>
    </Layout>
  );
}
