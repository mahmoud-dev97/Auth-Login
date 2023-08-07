import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { Navigate } from "react-router-dom";

function ProtectedHome({ children }) {
  const { isAuth } = useContext(AppContext);
  if (!isAuth ) {
    return <Navigate to="/" replace />;
  }
  return children;
}

export default ProtectedHome;
