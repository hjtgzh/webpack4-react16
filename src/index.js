import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom'; // 使用HashRouter, 解决刷新页面提示Cannot GET /
import { Button } from 'antd';

import Layout from './pages/layout/Layout';
import Home from './pages/home/Home';
import Grid from './pages/grid/Grid';

import store from './store';

render(
  <Provider store={store}>
    <Router>
      <React.Fragment>
        <Layout />
        <Switch>
          <Route exact path="/home" component={Home} />
          <Route path="/grid" component={Grid} />
          {/* 默认路由, 放在最后 */}
          <Redirect path="/" to={{ pathname: '/home' }} />
        </Switch>
      </React.Fragment>
    </Router>
  </Provider>,
  document.getElementById('app')
);
