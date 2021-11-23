import React, { createContext, useState } from "react";
import * as userService from "../../services/User";

export const context = createContext();

export const Provider = ({ children }) => {
  const [isAuthenticated, setAuthenticated] = useState(
    userService.isAuthenticated()
  );

  const [user, setUser] = useState();
  return (
    <context.Provider
      value={{
        isAuthenticated,
        user,
        setUser,
        signIn: (user) => {
          setUser(user);
          userService.signIn(user.accessToken, user.id);
          setAuthenticated(true);
        },
        signOut: () => {
          setUser();
          setAuthenticated(false);
        },
      }}
    >
      {children}
    </context.Provider>
  );
};
