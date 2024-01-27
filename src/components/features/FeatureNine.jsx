import React from "react";
import Image from "next/image";
const FeatureContent = [
  {
    icon: "158",
    meta: "Registera ditt företag",
    subTitle: `Skapa en detaljerad profil och beskriv din verksamhet.`,
  },
  {
    icon: "174",
    meta: "Publicera ditt uppdrag",
    subTitle: `Ange de specifika kraven och tidsramar för ditt bemanningsbehov.`,
  },
  {
    icon: "22",
    meta: "Välj matchningar",
    subTitle: `Bläddra bland matchande bemanningsföretag, välj den som bäst passar dina behov och inled samarbete.`,
  },
];

const FeatureNine = () => {
  return (
    <div className="row justify-content-center">
      {FeatureContent.map((val, i) => (
        <div
          className="col-lg-4 col-md-6"
          key={i}
          data-aos="fade-up"
          data-aos-duration="1200"
        >
          <div className="block-style-fourteen">
            <div className="illustration">
              <Image width={150} height={120} style={{objectFit:'contain'}}     src={`/images/icon/${val.icon}.svg`} alt="icon" />
            </div>
            <div className="title">{val.meta}</div>
            <p className="font-rubik">{val.subTitle}</p>
          </div>
          {/* /.block-style-fourteen */}
        </div>
      ))}
    </div>
    // /.row
  );
};

export default FeatureNine;
