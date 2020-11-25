import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';
import { PublicRoute } from './PublicRoute';
import { PrivateRoute } from './PrivateRoute';
import { LoginScreen } from '../auth/LoginScreen';
import { DashboardRoutes } from './DashboardRoute';
import { authLogin } from '../actions/auth';
import { useDispatch, useSelector } from 'react-redux';

/* AppRouter (root)
 */

export function AppRouter() {
  const dispatch = useDispatch();
  const { email } = useSelector((state) => state.auth.user);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      dispatch(authLogin(user.email, user.password));
    }
  }, [dispatch, localStorage, authLogin]);

  useEffect(() => {
    setIsAuthenticated(!!email);
  }, [email, setIsAuthenticated]);

  return (
    <Router>
      <Switch>
        <PublicRoute
          exact
          path='/login'
          component={LoginScreen}
          isAuthenticated={isAuthenticated}
        />
        <PrivateRoute
          path='/'
          component={DashboardRoutes}
          isAuthenticated={isAuthenticated}
        />
        <Redirect to='/' />
      </Switch>
    </Router>
  );
}
