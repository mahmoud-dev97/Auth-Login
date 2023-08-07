import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const ProtectedRoute = ({ children }) => {
  const { isAuth } = useContext(AppContext);
  if (isAuth) {
    return <Navigate to="/home" replace />;
  }
  return children;
};

export default ProtectedRoute;
