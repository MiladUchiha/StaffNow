import React from "react";
import Link from "next/link";

const socialContent = [
 
  {
    icon: "fa-linkedin",
    link: "https://www.linkedin.com/company/amm-staff-ab-www-staffnow-se/",
  },
];
import Image from "next/image";
const FooterSix = () => {
  return (
    <div className="row justify-content-center align-items-center">
      <div className="col-lg-4">
        <div className="logo">
          <Link     href="/">
            <h3>StaffNow</h3>
          </Link>
        </div>
      </div>
      {/* End .col */}

      <div className="col-lg-4">
        <div className="title">Nå oss på sociala medier</div>
        <ul className="flex space-x-3 justify-content-center social-icon">
          {socialContent.map((val, i) => (
            <li key={i}>
              <a href={val.link} target="_blank" rel="noreferrer">
                <i className={`fa ${val.icon}`}></i>
              </a>
            </li>
          ))}
        </ul>
        {/* End .social-icon */}
      </div>
      {/* End .col */}

      <div className="col-lg-4">
        <div className="title">help@staffnow.se</div>
        <div className="text-center">
          <a href="mailto:ib-themes21@gmail.com" className="email">
          
          </a>
        </div>
      </div>
      {/* End .col */}
    </div>
  );
};

export default FooterSix;
