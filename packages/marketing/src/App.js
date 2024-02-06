import React from 'react';
import {Link, Switch, Route, BrowserRouter } from 'react-router-dom'
import { StylesProvider } from '@material-ui/core/styles'

import Landing from './components/Landing';
import Pricing from './components/Pricing';

export default () => {
  return (<div>
    <StylesProvider>
      <BrowserRouter>
        <div>

        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/pricing">Pricing</Link>
          </li>
        </ul>

          <Switch>
            <Route exact path="/pricing" component={Pricing} />
            <Route path="/" component={Landing} />
          </Switch>
        </div>
      </BrowserRouter>
    </StylesProvider>
  </div>)
}