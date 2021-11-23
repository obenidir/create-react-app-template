import { BrowserRouter, Switch, Redirect } from "react-router-dom";
import { Page } from "./services";
import * as guards from "./guards";
import * as paths from "./paths";
import * as auth from "./pages/auth";

export default function Router() {
  return (
    <BrowserRouter>
      {/* <Switch>
        <Redirect exact from={paths.} to={paths.} />
      </Switch> */}
      <AuthRoutes />
    </BrowserRouter>
  );
}

function AuthRoutes() {
  return (
    <>
      <Page
        guard={guards.unauthenticated}
        path={paths.signIn}
        component={auth.SignIn}
        name="Sign in"
      />
    </>
  );
}
