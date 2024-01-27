import React from "react";

import Header from "../../../components/header/Header";
import ContactAddressTwo from "../../../components/contact/address/ContactAddressTwo";
import ContactForm from "../../../components/contact/form/ContactForm";
import FooterSix from "../../../components/footer/Footer";
import CopyRight from "../../../components/footer/CopyRight";
export const metadata = {
    title: 'Contact Project Management || Deski-Saas & Software Nextjs Template',
    description: `Unleash the full potential of your software projects with our SaaS-focused Next.js template. Create engaging blogs, showcase your talented team, set up an online shop, provide helpful FAQs, and offer exceptional services with our feature-rich solution. Elevate your SaaS and software development with ease and drive growth. Try it now and take your projects to new heights.`,
  } 
const ContactProjectManagement = () => {
  return (
    <div className="main-page-wrapper">

      {/* End Page SEO Content */}

      
      {/* End Header */}

      {/* =============================================
				Fancy Hero One
			==============================================  */}
      <div className="fancy-hero-one">
        <div className="container">
          <div className="row">
            <div className="col-xl-9 col-lg-11 m-auto">
              <div className="page-title">Kontakta oss</div>
              <h2 className="font-rubik">
                Känn dig fri att kontakta oss när som helst.
              </h2>
            </div>
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}
        <div className="bubble-one"></div>
        <div className="bubble-two"></div>
        <div className="bubble-three"></div>
        <div className="bubble-four"></div>
        <div className="bubble-five"></div>
        <div className="bubble-six"></div>
      </div>
      {/* /.fancy-hero-one */}

      {/* 	=============================================
				Contact Us Light
			==============================================  */}
      <div className="contact-us-light pt-140 pb-200 md-pt-90 md-pb-80">
        <div className="bubble-one"></div>
        <div className="bubble-two"></div>
        <div className="bubble-three"></div>
        <div className="bubble-four"></div>
        <div className="container">
          <ContactAddressTwo />
          <div className="form-style-light">
            <ContactForm />
          </div>
        </div>
      </div>
      {/* /.contact-us-light */}

      {/* 	=====================================================
				Footer Style One
			===================================================== */}
      <footer className="theme-footer-one pt-130 md-pt-70">
        <div className="top-footer">
          <div className="container">
            <FooterSix />
          </div>
          {/* /.container */}
        </div>
        {/* /.top-footer */}

        <div className="container">
          <div className="bottom-footer-content">
            <CopyRight />
          </div>
          {/*  /.bottom-footer */}
        </div>
      </footer>
      {/* /.theme-footer-one */}
    </div>
  );
};

export default ContactProjectManagement;
