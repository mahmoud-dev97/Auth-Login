import { Link, redirect } from "react-router-dom";
import loginImg from "../assets/undraw_login_re_4vu2.svg";
import { BiRightArrowAlt } from "react-icons/bi";
import { useForm } from "react-hook-form";
import { useContext, useEffect } from "react";
import { AppContext } from "../context/AppContext";
import googleLogo from "../assets/google.png";
import keyLogo from "../assets/keycloak-icon-512x512-jss2rqxz.png";
import faceLogo from "../assets/facebook.png";
import Cookies from "js-cookie";

function Login() {
  const { emailRegex, passwordRegex, postData, isAuth } =
    useContext(AppContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  useEffect(() => {
    if (Cookies.get("Token")) {
      let token = Cookies.get("Token")
      // setTimeout(()=>{
      window.location.href = `http://localhost:3002/${token}`;
      // },1000);
      Cookies.remove('Token');
      //window.location.href = `http://localhost:3002/${Cookies.get("Token")}`;
    }
  }, []);

  return (
    <div className="login d-flex flex-style">
      <img className="mainimg" src={loginImg} alt="mainimg" />
      <form onSubmit={handleSubmit((data) => postData("/auth/login", data))}>
        <h1>Member Login</h1>
        <input
          type="email"
          placeholder="Email"
          {...register("email", {
            required: true,
            pattern: emailRegex,
          })}
        />
        {errors.email?.type === "required" && (
          <div className="error">Please enter your email.</div>
        )}
        {errors.email?.type === "pattern" && (
          <div className="error">Please enter a valid email address.</div>
        )}
        <input
          type="password"
          placeholder="Password"
          {...register("password", {
            required: true,
            pattern: passwordRegex,
          })}
        />
        {errors.password?.type === "required" && (
          <div className="error">Please enter your password.</div>
        )}
        {errors.password?.type === "pattern" && (
          <div className="error">
            Please enter a valid password with at least 8 characters including
            at least one uppercase letter, one lowercase letter, and one number.
          </div>
        )}
        <button type="submit" className="btn">
          login
        </button>
        <div className="checkbox">
          <input {...register("rememberMe")} type="checkbox" id="checkbox" />
          <label htmlFor="checkbox">Remember me</label>
        </div>
        <div className="links">
          <Link className="other-links" to="/forgot-password">
            Forgot Password ?
          </Link>
          <br />
          <Link className="other-links" to="/register">
            Create your Account
            <BiRightArrowAlt />
          </Link>
        </div>
        <p>Or you can join with</p>
        <Link to={"http://localhost:3000/api/v1/auth/google"}>
          <img className="g-logo" src={googleLogo} alt="google-logo" />
        </Link>
        <Link to={"http://localhost:3000/api/v1/auth/facebook"}>
          <img className="g-logo" src={faceLogo} alt="google-logo" />
        </Link>
        <Link to={"http://localhost:3000/api/v1/auth/keycloak"}>
        <img className="g-logo" src={keyLogo} alt="key-logo" />
        </Link>
      </form>
    </div>
  );
}

export default Login;
