import React, {useEffect, useState} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Layout from './layout';
import Homepage from './pages/homepage';
import AboutUsPage from "./pages/about-us";

export default function App() {
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    setCounter((prev) => + 1);
  }, []);
  return (
      <BrowserRouter>
        <Layout onChange={() => setCounter((prev) => prev + 1)}>
          <Switch>
            <Route exact path="/">
              <Homepage counter={counter}/>
            </Route>
            <Route path="/about-us">
              <AboutUsPage counter={counter}/>
            </Route>
          </Switch>
        </Layout>
      </BrowserRouter>
  );
}
