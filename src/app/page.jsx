import Link from "next/link";
import HeaderLanding from "@/components/header/landing/HeaderLanding";
import FaqClassic from "@/components/faq/FaqClassicTwo";
import SocialTwo from "@/components/social/SocialTwo";
import CounterOne from "@/components/counter/CounterOne";
import CallToActionFour from "@/components/call-to-action/CallToActionFour";
import Footer from "@/components/footer/Footer";
import CopyRight from "@/components/footer/CopyRight";

import Image from "next/image";



export const metadata = {
  title: 'StaffNow',
  description: `Staffnow är en digital plattform som effektivt matchar bemanningsföretag med lämpliga kunduppdrag. Genom smart teknik hittar bemanningsföretag enkelt potentiella uppdrag att bemanna baserat på kompetens och tillgänglighet. Plattformen erbjuder även smidig kommunikation med presumtiva kunder. Staffnow digitaliserar bemanning och förenklar för bemanningsföretag att hitta och växa med rätt uppdrag.`,
}
export default async function Home() {
  return (

    <div className="main-page-wrapper">

      {/* End Page SEO Content */}
      <HeaderLanding />

      {/* End Header */}

      {/* 
   =============================================
    Hero Banner One
  ============================================== */}
      <div className="hero-banner-one">
        <div className="hero-upper-container">
          <div className="icon-box-one">
            <Image width={29} height={27} src="/images/logo/01.png" alt="logo" />
          </div>
          <div className="icon-box-two">
            <Image width={42} height={36} src="/images/logo/02.png" alt="logo" />
          </div>
          <div className="icon-box-three">
            <Image width={30} height={30} src="/images/logo/03.png" alt="logo" />
          </div>
          <div className="icon-box-four">
            <Image width={40} height={40} src="/images/logo/04.png" alt="logo" />
          </div>
          <div className="icon-box-five">
            <Image width={40} height={35} src="/images/logo/05.png" alt="logo" />
          </div>
          <div className="icon-box-six">
            <Image width={54} height={53} src="/images/logo/06.png" alt="logo" />
          </div>
          <div className="icon-box-seven">
            <Image width={26} height={26} src="/images/logo/07.png" alt="logo" />
          </div>
          <div className="icon-box-eight">
            <Image width={30} height={30} src="/images/logo/08.png" alt="logo" />
          </div>

          <div className="bubble-one"></div>
          <div className="bubble-two"></div>
          <div className="bubble-three"></div>
          <div className="bubble-four"></div>
          <div className="bubble-five"></div>
          <div className="bubble-six"></div>
          {/* End all bubble images */}

          <div className="container">
            <div className="row">
              <div className="col-xl-8 col-lg-10 m-auto">
                <h1 className=" sm:text-5xl text-3xl font-gilroy-bold">
                <span className=" text-blue-600 underline">StaffNow</span> bemanna och bli bemannad 
                </h1>
                <p className="hero-sub-heading">
               Staffnow marknadens smartaste lösning för bemanning
                </p>
              </div>
              {/* End .col */}
            </div>
            {/* End row */}
            <h4 className="">
              Registera dig:
            </h4>
            <Link
              className="theme-btn-twelve btn-lg mt-50 md-mt-30 rounded-sm m-3"
              href="bemanna-register"
            >
              För dig som vill bemanna
            </Link>
           
            <Link
              href="bemanning-register"
              className="theme-btn-two trial-button mt-50 md-mt-30 rounded-sm m-3"
            >

              För bemanningsföretag
            </Link>

          </div>
          {/* End .container */}
        </div>
        {/* /.hero-upper-container */}
      </div>
      {/* /.hero-banner-one */}

      {/* 
   =============================================
      Fancy Feature One
  ============================================== */}

      {/* /.fancy-feature-one */}

      {/* 
   =============================================
      Fancy Feature Two
  ============================================== */}
      <div className="fancy-feature-two">
        <div className="container">
          <div className="row">
            <div className="col-xl-7 col-lg-7 col-md-9 m-auto">
              <div className="title-style-one text-center mb-190 md-mb-100">
                <h2>Allt som du behöver veta om Staffnow</h2>
              </div>
              {/* /.title-style-one */}
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row align-items-center block-style-two pb-250 md-pb-90">
            <div className="col-lg-7 col-md-8 m-auto">
              <div data-aos="fade-right" data-aos-duration="1200">
                <div className="img-holder img-holder-two">
                  <div
                    className="cs-screen progress-line-one"
                    data-aos="fade-right"
                    data-aos-duration="1200"
                  ></div>
                  <div
                    className="cs-screen progress-line-two"
                    data-aos="fade-right"
                    data-aos-duration="1200"
                  ></div>
                  <Image width={674} height={604} style={{ height: 'fit-content' }} src="/images/assets/12643932_5031661.svg" alt="feature" className="screen-one  " />
                  <Image width={821} height={821}
                    src="/images/shape/1.svg"
                    alt="feature"
                    className="cs-screen screen-three"
                  />
                  <Image width={421} height={421}
                    src="/images/shape/2.svg"
                    alt="feature"
                    className="cs-screen dot-shape"
                  />
                  <div className="bubble-one"></div>
                  <div className="bubble-two"></div>
                  <div className="bubble-three"></div>
                  <div className="bubble-four"></div>
                </div>
                {/* /.img-holder */}
              </div>
            </div>
            {/* End .col */}
            <div className="col-lg-5">
              <div
                className="text-wrapper"
                data-aos="fade-left"
                data-aos-duration="1200"
              >
                
                <h3 className="font-gilroy-bold text-purple-500">
               Uppdragsgivare
                </h3>
                <p>
                Förenkla din rekryteringsprocess med Staffnow. 
                Upptäck en värld av kvalificerade och erfarna bemanningsföretag och frilansare, 
                redo att möta dina behov. 
                Vår plattform erbjuder enkel, snabb och pålitlig matchning för att hjälpa dig att hitta den 
                perfekta talangen för ditt företag. Minska din arbetsbelastning och öka din organisations flexibilitet och effektivitet.
                </p>
               
              </div>
              {/*  /.text-wrapper */}
            </div>{" "}
            {/* End .col */}
          </div>
          {/* /.block-style-two */}

          <div className="row align-items-center block-style-two pb-250 md-pb-90">
            <div className="col-lg-6 col-md-8 m-auto order-lg-last">
              <div data-aos="fade-left" data-aos-duration="1200">
                <div className="img-holder img-holder-two">
                  <Image width={550} height={616} style={{ height: 'fit-content' }} src="/images/assets/11668440_20943572.jpg" alt="feature" className="screen-one"/>
                 
                  <Image width={907} height={916}
                    src="/images/shape/3.svg" style={{ height: 'fit-content' }}
                    alt="feature"
                    className="cs-screen screen-two"
                  />
                  <Image width={362} height={362}
                    src="/images/shape/4.svg" style={{ height: 'fit-content' }}
                    alt="feature"
                    className="cs-screen dot-shape"
                  />
                  <div className="bubble-one"></div>
                  <div className="bubble-two"></div>
                  <div className="bubble-three"></div>
                  <div className="bubble-four"></div>
                </div>
                {/* /.img-holder */}
              </div>
            </div>{" "}
            {/* End .col */}
            <div className="col-lg-6 order-lg-first">
              <div
                className="text-wrapper ps-5 pe-5"
                data-aos="fade-right"
                data-aos-duration="1200"
              >
               
                <h3 className="font-gilroy-bold text-orange-600">Bemanningsföretag </h3>
                <p>
                Expandera din verksamhet och nå nya höjder med Staffnow. 
                Få tillgång till en mångfald av spännande och utmanande uppdrag över hela landet. 
                Vår plattform möjliggör för dig att bygga långsiktiga relationer med pålitliga uppdragsgivare och erbjuder dig
                 flexibiliteten att välja projekt som passar dina expertisområden och preferenser. 
                Med en enkel registreringsprocess är du bara ett steg bort från att upptäcka nya möjligheter.
                </p>
                
                {/*  /.quote */}
              </div>
              {/*  /.text-wrapper */}
            </div>{" "}
            {/* End .col */}
          </div>
          {/* /.block-style-two */}

         
          {/* /.block-style-two */}
        </div>
        {/* /.container */}
      </div>
      {/* /.fancy-feature-two */}

      {/* 
   =============================================
    Usable Tools Section
  ============================================== */}
      
      {/* /.useable-tools-section */}

      {/* 
   =============================================
      Fancy Feature Three
  ============================================== */}
      <div className="fancy-feature-three pt-200 md-pt-80">
        <div className="container">
          <div className="row">
          <div className="col-lg-6">
              <div className="clients-feedback-classic md-mt-80">
                <div
                  className="feedback-wrapper"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  <Image width={71} height={71}
                    src="/images/media/img_02.png"
                    alt="image"
                    className="media-meta"
                  />
                  <p>
                  Registrera ditt företag och skapa en profil på Staffnow. Berätta om din organisation och de 
                  specifika behoven du har för bemanning.
                   Ange kriterier såsom bransch, kompetensnivåer och projektets varaktighet.
                  </p>
                  
                </div>
                
                <div
                  className="feedback-wrapper"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  <Image width={71} height={71}
                    src="/images/media/img_03.png"
                    alt="image"
                    className="media-meta"
                  />
                  <h6 className="name">Rashed Ka.</h6>
                  <p>
                    it’s a great exprience to work with deski. They’r vey humble
                    and expert & the service has been excellent & super.
                  </p>
                  
                  
                </div>{" "}
                {/* /.feedback-wrapper */}
                <div
                  className="feedback-wrapper"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  <Image width={71} height={71}
                    src="/images/media/img_04.png"
                    alt="image"
                    className="media-meta"
                  />
                  <p>
                    it’s a great exprience to work with deski. They’r vey humble
                    and expert & the service has been excellent & super.
                  </p>
                  <h6 className="name">Zubayer Hasan</h6>
                  <span className="font-rubik disg-info">
                    Front-end coder HeloShape.
                  </span>
                </div>
                {/* /.feedback-wrapper */}
              </div>
              {/* /.clients-feedback-classic */}
            </div>

            <div className="col-lg-6">
              <div className="clients-feedback-classic md-mt-80">
                <div
                  className="feedback-wrapper"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  <Image width={71} height={71}
                    src="/images/media/img_02.png"
                    alt="image"
                    className="media-meta"
                  />
                  <p>
                    it’s a great exprience to work with deski. They’r vey humble
                    and expert & the service has been excellent & super.
                  </p>
                  <h6 className="name">Rena Singleton</h6>
                  <span className="font-rubik disg-info">
                    Former Assistant Jamuna Group.
                  </span>
                </div>{" "}
                {/* /.feedback-wrapper */}
                <div
                  className="feedback-wrapper"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  <Image width={71} height={71}
                    src="/images/media/img_03.png"
                    alt="image"
                    className="media-meta"
                  />
                  <p>
                    it’s a great exprience to work with deski. They’r vey humble
                    and expert & the service has been excellent & super.
                  </p>
                  <h6 className="name">Rashed Ka.</h6>
                  <span className="font-rubik disg-info">
                    UI designer Baper Inc.
                  </span>
                </div>{" "}
                {/* /.feedback-wrapper */}
                <div
                  className="feedback-wrapper"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  <Image width={71} height={71}
                    src="/images/media/img_04.png"
                    alt="image"
                    className="media-meta"
                  />
                  <p>
                    it’s a great exprience to work with deski. They’r vey humble
                    and expert & the service has been excellent & super.
                  </p>
                  <h6 className="name">Zubayer Hasan</h6>
                  <span className="font-rubik disg-info">
                    Front-end coder HeloShape.
                  </span>
                </div>
                {/* /.feedback-wrapper */}
              </div>
              {/* /.clients-feedback-classic */}
            </div>
          </div>
        </div>
      </div>
      {/* /.fancy-feature-three */}

      {/* 
   =============================================
    Call To Action
  ============================================== */}
      <div className="fancy-short-banner-one">
        <div className="container">
          <CallToActionFour />
        </div>
        {/* /.container */}
        <div className="bubble-one"></div>
        <div className="bubble-two"></div>
        <div className="bubble-three"></div>
        <div className="bubble-four"></div>
        <div className="bubble-five"></div>
        <div className="bubble-six"></div>
      </div>
      {/* /.fancy-short-banner-one */}

      {/* 
   =============================================
      Faq Classic
  ============================================== */}
      <div className="faq-classic pt-225 md-pt-120">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="title-style-one">
                <h6 className="font-rubik">Find your answers</h6>
                <h2>Have any thought? Look here.</h2>
              </div>
              {/* /.title-style-one */}
              <Link href="/faq" className="theme-btn-one mt-50 md-mt-30">
                {" "}
                Go to Faq
              </Link>
            </div>
            {/* End .col */}
            <div className="col-lg-6">
              <div className="md-mt-60">
                <FaqClassic />
              </div>
            </div>
            {/* End .col */}
          </div>
        </div>
      </div>
      {/* /.faq-classic */}

      {/* 
    =============================================
      Footer
    ============================================== */}
      <div className="footer-bg-wrapper">
        <div className="bubble-one"></div>
        <div className="bubble-two"></div>
        <div className="bubble-three"></div>
        <div className="fancy-short-banner-two">
          <div className="container">
            <div className="content-wrapper">
              <div
                className="
                bg-wrapper
                d-lg-flex
                align-items-center
                justify-content-between
              "
              >
                <h2 className="font-gilroy-bold">
                  Don’t find the answer? contact us for any query.
                </h2>
                <Link href="/contact-pm"> Contact us</Link>
                <div className="bubble-one"></div>
                <div className="bubble-two"></div>
                <div className="bubble-three"></div>
                <div className="bubble-four"></div>
                <div className="bubble-five"></div>
              </div>
              {/* /.bg-wrapper */}
            </div>
            {/*  /.content-wrapper */}
          </div>
          {/* /.container */}
        </div>
        {/* /.fancy-short-banner-two */}

        <footer className="theme-footer-one pt-130 md-pt-70">
          <div className="top-footer">
            <div className="container">
              <Footer />
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

    </div>
  )
}
