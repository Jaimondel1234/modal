import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { Navbar } from "../components/ui/Navbar";
import { HomeScreen } from "../components/home/HomeScreen";
import { NotesScreen } from "../components/notes/NotesScreen";

/* Routes of navbar(logged in)
 */
export const DashboardRoutes = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path='/home' component={HomeScreen} />
        <Route exact path='/notes' component={NotesScreen} />
        <Redirect to='/home' />
      </Switch>
    </>
  );
};
