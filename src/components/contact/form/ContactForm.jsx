'use client'


import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

const ContactForm = () => {
  // for validation
  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required("Skriv ditt förnamn"),
    lastName: Yup.string().required("Skriv ditt efternamn"),
    sendMessage: Yup.string().required("Skriv ditt meddelande"),
    email: Yup.string()
      .required("Skriv ditt email")
      .email("Skriv ett giltigt email"),
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
    <form id="contact-form" onSubmit={handleSubmit(onSubmit)}>
      <div className="messages"></div>
      <div className="row controls">
        <div className="col-md-6">
          <div className="input-group-meta form-group mb-60">
            <label>Förnamn</label>
            <input
              type="text"
              placeholder="Förnamn"
              name="firstName"
              {...register("firstName")}
              className={`${errors.firstName ? "is-invalid" : ""}`}
            />
            {errors.firstName && (
              <div className="invalid-feedback">
                {errors.firstName?.message}
              </div>
            )}
          </div>
        </div>
        {/* End .col */}

        <div className="col-md-6">
          <div className="input-group-meta form-group mb-60">
            <label>Efternamn</label>
            <input
              type="text"
              placeholder="Efternamn"
              name="lastName"
              {...register("lastName")}
              className={`${errors.lastName ? "is-invalid" : ""}`}
            />
            {errors.lastName && (
              <div className="invalid-feedback">{errors.lastName?.message}</div>
            )}
          </div>
        </div>
        {/* End .col */}

        <div className="col-12">
          <div className="input-group-meta form-group mb-60">
            <label>Email adress</label>
            <input
              placeholder="Skriv ditt email"
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
        {/* End .col */}

        <div className="col-12">
          <div className="input-group-meta form-group lg mb-40">
            <label>Meddelande</label>
            <textarea
              placeholder="Skriv ditt meddelande här..."
              name="sendMessage"
              type="text"
              {...register("message")}
              className={`${errors.sendMessage ? "is-invalid" : ""}`}
            ></textarea>
            {errors.sendMessage && (
              <div className="invalid-feedback">
                {errors.sendMessage?.message}
              </div>
            )}
          </div>
        </div>
        {/* End .col */}

        <div className="col-12">
          <button type="submit" className="theme-btn-two">
            Skicka meddelande
          </button>
        </div>
        {/* End .col */}
      </div>
    </form>
  );
};

export default ContactForm;
