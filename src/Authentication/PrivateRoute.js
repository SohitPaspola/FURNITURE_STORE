import React from "react";
import { Redirect, Route } from "react-router";
import { useSelector } from "react-redux";
const ProtectedRoute = ({ component: Component, ...rest }) => {
  const user = useSelector((state) => state.auth.userEmail);
  return (
    <Route
      {...rest}
      render={(props) => {
        return user ? <Component {...props} /> : <Redirect to="/signin" />;
      }}
    />
  );
};

export default ProtectedRoute;
