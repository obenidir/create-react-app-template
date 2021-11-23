import { useContext } from "react";
import { useQuery } from "react-query";
import { Redirect, Route, useParams } from "react-router-dom";
import Spinner from "../../components/common/Spinner";
import { context as userContext } from "../../context/user";
import * as paths from "../../paths";
import Head from "./head";

export default function Page({ path, guard, component, name }) {
  return (
    <Route exact path={path}>
      <Root guard={guard} path={path} component={component} name={name} />
    </Route>
  );
}

function Root({ guard, path, component: Component, name }) {
  const { isAuthenticated } = useContext(userContext);
  // Rendering page component for not authenticated users when given guard returned true.
  if (!isAuthenticated && guard(false)) {
    return (
      <Head name={name}>
        <Component />
      </Head>
    );
  }
  // // Making redirect when guard is false.
  if (!isAuthenticated && !guard(false)) {
    return <Redirect to={redirectTo(isAuthenticated)} />;
  }
  return <Authenticated guard={guard} component={Component} name={name} />;
}

function Authenticated({ guard, component: Component, name }) {
  const { user, setUser, signOut, hasPermission } = useContext(userContext);
  const { isLoading, isError } = useQuery("user", fetchCurrentUser, {
    onSuccess: ({ body }) => setUser(body),
    // Signing out a user on 401
    onError: (err) => {
      if (err.status === 401) {
        signOut();
      }
      if (err.status === 400) {
        window.location.reload();
      }
    },
  });
  if (isLoading || !user) {
    return (
      <div className="min-h-screen flex items-center">
        <Spinner />
      </div>
    );
  }
  // Returning nothing in case of error since we're logging out the user.
  if (isError) {
    return <div />;
  }
  if (!guard(true, { hasPermission })) {
    return <Redirect to={redirectTo(true, user.role)} />;
  }
  return (
    <Head name={name}>
      <Component />
    </Head>
  );
}

const redirectTo = (isAuthenticated, role) => {
  if (!isAuthenticated) {
    return paths.signIn;
  }
  if (role === "the role") {
    return `path`;
  }
  return paths.root;
};

const fetchCurrentUser = async () => {
  // fetchCurrentUser
};
