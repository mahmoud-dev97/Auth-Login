import { Route, Routes } from "react-router-dom";
import "./style/App.scss";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Forgotpass from "./pages/Forgotpass.jsx";
import { ToastContainer } from "react-toastify";
import Home from "./pages/Home";
import ResetPassword from "./pages/ResetPassword";
import ProtectedRoute from "./components/ProtectedRoute";
import ProtectedHome from "./components/ProtectedHome";
import ScaleLoader from "react-spinners/ScaleLoader";
import { useContext, useEffect, useState } from "react";
import PageNotFound from "./pages/PageNotFound";
import ConfirmMail from "./pages/ConfirmMail";
import { RiMoonFill, RiSunFill } from "react-icons/ri";
import { AppContext } from "./context/AppContext";
function App() {
  const [loading, setLoading] = useState(true);
  const { toggleTheme, dark } = useContext(AppContext);
  useEffect(() => {
    const time = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => {
      clearTimeout(time);
    };
  }, []);
  return (
    <>
      {loading ? (
        <div
          className={
            dark ? "loading-dark flex-style" : "loading-light flex-style"
          }
        >
          <ScaleLoader
            color={"#0099ff"}
            loading={loading}
            width={10}
            height={70}
            margin={4}
          />
        </div>
      ) : (
        <div className={dark ? "app dark" : "app light"}>
          <div className="app flex-style">
            <Routes>
              <Route path="*" element={<PageNotFound />} />
              <Route
                path="/"
                element={
                  <ProtectedRoute>
                    <Login />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/register"
                element={
                  <ProtectedRoute>
                    <Register />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/forgot-password"
                element={
                  <ProtectedRoute>
                    <Forgotpass />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/resetPassword"
                element={
                  <ProtectedRoute>
                    <ResetPassword />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/confirm-mail"
                element={
                  <ProtectedRoute>
                    <ConfirmMail />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/home"
                element={
                  <ProtectedHome>
                    <Home />
                  </ProtectedHome>
                }
              />
            </Routes>
            <ToastContainer />
          </div>
          {dark ? (
            <RiSunFill className="dark-icon fs-5" onClick={toggleTheme} />
          ) : (
            <RiMoonFill className="dark-icon fs-5" onClick={toggleTheme} />
          )}
        </div>
      )}
    </>
  );
}

export default App;
