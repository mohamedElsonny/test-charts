import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import 'assets/vendors/style';
import 'styles/wieldy.less';
import configureStore, { history } from '../appRedux/store';

import Dashboard from './dashboard';
import ForgotPassword from './authentification/passwordRecovery/forgotPassword';
import SignIn from './authentification/signin';
import Signup from './authentification/signup';
import PageNotFound from './pageNotFound';
import Metrics from './main/metrics';
import Widgets from './main/widgets';

const store = configureStore(/ provide initial state if any /);

const NextApp = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <BrowserRouter>
        <Switch>
          <Route path="/main/metrics" exact component={Metrics} />
          <Route path="/main/widgets" exact component={Widgets} />
          <Route path="/sign-in" exact component={SignIn} />
          <Route path="/sign-up" exact component={Signup} />
          <Route path="/forgot" exact component={ForgotPassword} />
          <Route path="/" exact component={Dashboard} />
          <Route component={PageNotFound} />
        </Switch>
      </BrowserRouter>
    </ConnectedRouter>
  </Provider>
);

export default NextApp;
