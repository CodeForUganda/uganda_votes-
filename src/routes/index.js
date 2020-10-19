import React from "react";
import { Switch, Route } from "react-router-dom";
//Routes to the pages
import NotfoundPage from "./notfound/component/notFound";
import MainLayout from "../layouts/main";
import homeRoute from "./home";
import aboutRoute from "./about";
import contributorsRoute from "./contributors";
import initiativesRoute from './inititives';
function Routes() {
  return (
    <MainLayout>
      <Switch>
        <Route path={homeRoute.path} exact>
          <homeRoute.component />
        </Route>

        <Route path={aboutRoute.path} exact>
          <aboutRoute.component />
        </Route>

        <Route path={contributorsRoute.path} exact>
          <contributorsRoute.component />
        </Route>

        <Route path={initiativesRoute.path} exact>
          <initiativesRoute.component />
        </Route>

        <Route>
          <NotfoundPage />
        </Route>
      </Switch>
    </MainLayout>
  );
}

export default Routes;
