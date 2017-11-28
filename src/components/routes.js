import React from 'react';
import { Switch, Route } from 'react-router-dom';

import App from './app';
import Home from './home';
import Cart from '../containers/cart';
import Checkout from './checkout';
import AboutUs from './about-us';

const Routes = () => (
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/cart' component={Cart}/>
        <Route path='/checkout' component={Checkout}/>
        <Route path='/about' component={AboutUs}/>
      </Switch>
  )

export default Routes;