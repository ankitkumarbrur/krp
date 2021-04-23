import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div>
      <h1>404</h1>
      <h3>sorry, the page you tried can't be found</h3>
      <Link to="/">back home</Link>
    </div>
  );
};

export default Error;
