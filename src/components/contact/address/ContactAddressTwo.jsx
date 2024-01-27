import Image from "next/image";
import React from "react";

const socialContent = [
  
  {
    icon: "fa-linkedin",
    link: "https://www.linkedin.com/company/amm-staff-ab-www-staffnow-se/",
  },
];

const ContactAddressTwo = () => {
  return (
    <div className="row justify-content-center">
      <div className="col-md-4 col-sm-6">
        <div className="address-info">
          <div className="icon">
            <Image width="82" height="86" src="/images/icon/15.svg" alt="icon" />
          </div>
          <div className="title">Adress</div>
          <p className="font-rubik">
            Stadssängsgatan 57 <br /> 195 57 Sigtuna
          </p>
        </div>
        {/* /.address-info */}
      </div>
      {/* End .col */}

      <div className="col-md-4 col-sm-6">
        <div className="address-info">
          <div className="icon">
            <Image width="75" height="83" src="/images/icon/16.svg" alt="icon" />
          </div>
          <div className="title">Kontakt</div>
          <p className="font-rubik">
            kontakt@staffnow.se <br />
            +46 73 477 3003
          </p>
        </div>{" "}
        {/* /.address-info */}
      </div>
      {/* End .col */}

      <div className="col-md-4 col-sm-6">
        <div className="address-info">
          <div className="icon">
            <Image width="71" height="77" src="/images/icon/17.svg" alt="icon" />
          </div>
          <div className="title">Sociala medier</div>
          <p className="font-rubik">Följa oss på linkedin</p>
          <ul className="d-flex justify-content-center">
            {socialContent.map((val, i) => (
              <li key={i}>
                <a href={val.link} target="_blank" rel="noreferrer">
                  <i className={`fa ${val.icon}`}></i>
                </a>
              </li>
            ))}
          </ul>
        </div>{" "}
        {/* /.address-info */}
      </div>
      {/* End .col */}
    </div>
  );
};

export default ContactAddressTwo;
