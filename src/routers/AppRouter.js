import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Redirect } from "react-router-dom";
import { PublicRoute } from "./PublicRoute";
import { PrivateRoute } from "./PrivateRoute";
import { LoginScreen } from "../auth/LoginScreen";
import { DashboardRoutes } from "./DashboardRoute";

/* AppRouter (root)
 */

export function AppRouter() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Router>
      <Switch>
        <PublicRoute
          exact
          path='/login'
          component={LoginScreen}
          isAuthenticated={true}
        />
        <PrivateRoute
          path='/'
          component={DashboardRoutes}
          isAuthenticated={true}
        />
        <Redirect to='/' />
      </Switch>
    </Router>
  );
}
