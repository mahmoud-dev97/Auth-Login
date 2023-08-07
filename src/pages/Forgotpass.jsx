import React, { useContext } from "react";
import { BiLeftArrowAlt } from "react-icons/bi";
import { Link } from "react-router-dom";
import fPassImg from "../assets/undraw_forgot_password_re_hxwm.svg";
import { AppContext } from "../context/AppContext";
import { useForm } from "react-hook-form";
function Forgotpass() {
  const { emailRegex, postData } = useContext(AppContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <div className="forgotpass flex-style d-flex">
      <div className="content">
        <img src={fPassImg} alt="forgot-pass" />
        <h1>Forgot Password?</h1>
        <p>No worries, we'll send you reset instructions</p>
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
        <button
          className="btn"
          onClick={handleSubmit((data) =>
            postData("/auth/requestPasswordReset", data)
          )}
        >
          Rest Password
        </button>
        <Link className="other-links" to="/">
          <BiLeftArrowAlt /> Back to Login
        </Link>
      </div>
    </div>
  );
}

export default Forgotpass;
