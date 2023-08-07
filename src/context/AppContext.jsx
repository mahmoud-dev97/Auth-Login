import { createContext, useEffect, useState } from "react";
import { errorToast, successToast } from "../components/AlertTimer";
import { useNavigate } from "react-router-dom";
import baseUrl from "../api/baseUrl";
import Cookies from "js-cookie";
const AppContext = createContext();

function Provider({ children }) {
  const navigate = useNavigate();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex = ''; ///^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
  const isAuth = localStorage.getItem("token");
  const [dark, setDark] = useState(localStorage.getItem("dark") === "true");

  useEffect(() => {
    localStorage.setItem("dark", dark);
  }, [dark]);

  const toggleTheme = () => {
    setDark(!dark);
  };

  // handel all post data
  const postData = (url, data) => {
    baseUrl
      .post(url, data)
      .then((res) => {
        console.log(res);
        if (url === "/auth/login") {
          // localStorage.setItem("token", res.data.token);
          setTimeout(() => {
            window.location.href = `http://localhost:3002/${res.data.token}`;
          }, 2000);
        } else {
          setTimeout(() => {
            navigate("/");
          }, 2000);
        }
        console.log(res);
        successToast(res.data.message);
      })
      .catch((error) => {
        errorToast(error.response.data.message);
      });
  };

  const logout = () => {
    localStorage.removeItem("token");
    Cookies.remove("Token");
    navigate("/");
  };
  const valuesToShare = {
    emailRegex,
    passwordRegex,
    postData,
    isAuth,
    logout,
    navigate,
    toggleTheme,
    dark,
  };

  return (
    <AppContext.Provider value={valuesToShare}>{children}</AppContext.Provider>
  );
}

export { AppContext, Provider };