import React from "react";
import * as user from "./user";

const Index = ({ children }) => <user.Provider>{children}</user.Provider>;

export default Index;
