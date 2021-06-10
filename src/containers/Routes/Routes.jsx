import React from "react";
import styles from "./Routes.module.scss";
import Home from "../Home";
import UK from "../UK";
import US from "../US";
import India from "../India";
import China from "../China";
import Other from "../Other";
import { Route, Switch } from "react-router-dom";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/"><Home /></Route>
      <Route path="/uk"><UK /></Route>
      <Route path="/india"><India /></Route>
      <Route path="/us"><US /></Route>
      <Route path="/china"><China /></Route>
      <Route path="/*"><Other /></Route>
    </Switch>
  );
};

export default Routes;