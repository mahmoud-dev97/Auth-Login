import React, { useContext } from "react";
import { Link } from "react-router-dom";
import signupImg from "../assets/undraw_sign_up_n6im.svg";
import { AppContext } from "../context/AppContext";
import { useForm } from "react-hook-form";

function Register() {
  const { emailRegex, passwordRegex, postData } = useContext(AppContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
  });

  return (
    <div className="login d-flex flex-style">
      <img className="mainimg" src={signupImg} alt="mainim Backg" />
      <form onSubmit={handleSubmit((data) => postData("/auth/register", data))}>
        <h1>Create Account!</h1>
        <input
          name="firstName"
          type="text"
          placeholder="First Name"
          {...register("firstName", {
            required: true,
            minLength: {
              value: 3,
              message: "First name must be at least 3 characters long.",
            },
            maxLength: {
              value: 20,
              message: "First name can be at most 20 characters long.",
            },
          })}
        />
        {errors.firstName?.type === "required" && (
          <div className="error">Please enter your first name.</div>
        )}
        {errors.firstName?.type === "minLength" && (
          <div className="error">{errors.firstName.message}</div>
        )}
        {errors.firstName?.type === "maxLength" && (
          <div className="error">{errors.firstName.message}</div>
        )}
        <input
          name="lastName"
          type="text"
          placeholder="Last Name"
          {...register("lastName", {
            required: true,
            minLength: {
              value: 3,
              message: "Last name must be at least 3 characters long.",
            },
            maxLength: {
              value: 20,
              message: "Last name can be at most 20 characters long.",
            },
          })}
        />
        {errors.lastName?.type === "required" && (
          <div className="error">Please enter your last name.</div>
        )}
        {errors.lastName?.type === "minLength" && (
          <div className="error">{errors.lastName.message}</div>
        )}
        {errors.lastName?.type === "maxLength" && (
          <div className="error">{errors.lastName.message}</div>
        )}
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
          Register
        </button>
        <Link className="other-links" to="/">
          Have an account ?
        </Link>
      </form>
    </div>
  );
}

export default Register;
