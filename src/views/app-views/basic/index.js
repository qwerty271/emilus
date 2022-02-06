import React, { lazy, Suspense } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Loading from "components/shared-components/Loading";

const Basic = ({ match }) => {
  return (
    <Suspense fallback={<Loading cover="content" />}>
      <Switch>
        <Route
          path={`${match.url}/clients`}
          component={lazy(() => import(`./clients`))}
        />
        <Redirect from={`${match.url}`} to={`${match.url}/clients`} />
      </Switch>
    </Suspense>
  );
};

export default Basic;
