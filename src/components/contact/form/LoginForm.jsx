'use client'




import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import Image from "next/image";

const LoginForm = () => {
  // for password show hide
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };

  // for validation
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .required("Email is required")
      .email("Entered value does not match email format"),
    password: Yup.string().required("Password is required"),
  });

  const formOptions = { resolver: yupResolver(validationSchema) };
  // get functions to build form with useForm() hook
  const { register, handleSubmit, formState } = useForm(formOptions);
  const { errors } = formState;

  function onSubmit(data, e) {
    // display form data on success
    console.log("Message submited: " + JSON.stringify(data));
    e.target.reset();
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="user-data-form ">
        <div className="row">
          <div className="col-12">
            <div className="input-group-meta mb-80 sm-mb-70">
              <label>Email</label>
              <input
                placeholder="Enter Your Email"
                name="email"
                type="text"
                {...register("email")}
                className={` ${errors.email ? "is-invalid" : ""}`}
              />
              {errors.email && (
                <div className="invalid-feedback">{errors.email?.message}</div>
              )}
            </div>
          </div>
          <div className="col-12">
            <div className="input-group-meta mb-25">
              <label>Password</label>
              <input
                placeholder="Enter Password"
                name="password"
                type={passwordShown ? "text" : "password"}
                {...register("password")}
                className={` ${errors.password ? "is-invalid" : ""}`}
              />
              {errors.password && (
                <div className="invalid-feedback">
                  {errors.password?.message}
                </div>
              )}
              <span
                className="placeholder_icon"
                onClick={togglePasswordVisiblity}
              >
                <span
                  className={
                    passwordShown ? "passVicon eye-slash" : "passVicon"
                  }
                >
                  <Image  width="24" height="16"  src="/images/icon/view.svg" alt="ico" />
                </span>
              </span>
            </div>
          </div>
          <div className="col-12">
            <div className="agreement-checkbox d-flex justify-content-between align-items-center">
              <div>
                <input type="checkbox" id="remember" />
                <label htmlFor="remember">Keep me logged in</label>
              </div>
            </div>
            {/*  /.agreement-checkbox */}
          </div>
          <div className="col-12">
            <button className="theme-btn-one mt-50 mb-50">Login</button>
          </div>
        </div>
      </form>
    </>
  );
};

export default LoginForm;
