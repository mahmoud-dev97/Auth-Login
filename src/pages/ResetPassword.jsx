import React, { useContext, useRef } from "react";
import { AppContext } from "../context/AppContext";
import { useForm } from "react-hook-form";
import { useSearchParams } from "react-router-dom";

function ResetPassword() {
  const { passwordRegex, postData } = useContext(AppContext);
  let [searchParams] = useSearchParams();
  const userId = searchParams.get("id");
  const token = searchParams.get("token");
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const password = useRef({});
  password.current = watch("password", "");

  const validateConfirmPassword = (value) => {
    if (value && value !== password.current) {
      return "Passwords do not match";
    }
  };

  return (
    <div className="forgotpass d-flex flex-style">
      <div className="content">
        <h1>Reset Password</h1>
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
        <input
          type="password"
          placeholder="Confirm password"
          {...register("confirmPassword", {
            required: true,
            pattern: passwordRegex,
            validate: validateConfirmPassword,
          })}
        />
        {errors.confirmPassword?.type === "required" && (
          <div className="error">Please confirm your password.</div>
        )}
        {errors.confirmPassword?.type === "pattern" && (
          <div className="error">
            Please enter a valid password with at least 8 characters including
            at least one uppercase letter, one lowercase letter, and one number.
          </div>
        )}
        {errors.confirmPassword?.type === "validate" && (
          <div className="error">{errors.confirmPassword.message}</div>
        )}
        <button
          className="btn"
          onClick={handleSubmit((data) =>
            postData("/auth/passwordReset", {
              ...data,
              userId,
              token,
            })
          )}
        >
          Change Password
        </button>
      </div>
    </div>
  );
}

export default ResetPassword;
