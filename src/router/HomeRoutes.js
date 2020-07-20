import React from "react";
import GridExample from "../component/layouts/GridExample";
import HiddenUp from "../component/layouts/HiddenUp";
import HiddenDown from "../component/layouts/HiddenDown";
import BasicComponent from "../component/layouts/BasicComponent";
import BasicAnimation from "../component/layouts/BasicAnimation";
import { Route, Switch } from "react-router-dom";
export default function HomeRoutes() {
  return (
    <Switch>
      <Route exact path="/" component={GridExample} />
      <Route path="/hiddenUp" component={HiddenUp} />
      <Route path="/hiddenDown" component={HiddenDown} />
      <Route path="/basicComponent" component={BasicComponent} />
      <Route path="/basicAnimation" component={BasicAnimation} />
    </Switch>
  );
}
