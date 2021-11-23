import React from "react";
import { Helmet } from "react-helmet";

const Head = ({ name, children }) => {
  return (
    <>
      <Helmet>
        <title>{name}</title>
      </Helmet>
      {children}
    </>
  );
};

export default Head;
