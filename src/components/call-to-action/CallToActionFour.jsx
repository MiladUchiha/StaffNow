import React from "react";
import FormEvent from "../form/FormEvent";
import Link from "next/link";

const CallToActionFour = () => {
  return (
    <div className="row align-items-center">
      <div className="col-lg-6">
        <div className="title-style-one">
          <h6 className="font-rubik" style={{ color: "#787CFF" }}>
            Vi hör av oss.
          </h6>
          <h2>Vill du veta mer? Lämna ditt email.</h2>
        </div>
        {/* /.title-style-one */}
      </div>
      <div className="col-lg-6">
        <div className="form-wrapper">
          <FormEvent />
          <p className="font-rubik">
            Redan kund? <Link     href="login">Logga in.</Link>
          </p>
        </div>
        {/* /.form-wrapper */}
      </div>
    </div>
  );
};

export default CallToActionFour;
