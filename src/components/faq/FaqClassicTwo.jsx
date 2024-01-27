'use client'

import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

const FaqContent = [
  {
    title: "Vad är Staffnow?",
    desc: ` Staffnow är en digital plattform som förenklar bemanningsprocessen, genom att effektivt matcha uppdragsgivare med bemanningsföretag för specifika projektbehov.`,
    expand: "a",
  },
  {
    title: "Vilken typ av projekt kan jag hitta på Staffnow?",
    desc: `Staffnow specialiserar sig på att tillhandahålla bemanning för en mängd olika projekt inom olika branscher, från kortvariga uppdrag till längre projekt.`,
    expand: "b",
  },
  {
    title: "Hur säkerställer Staffnow kvaliteten på bemanningsföretag?",
    desc: `Vi genomför noggranna kontroller och validering av alla bemanningsföretag som registrerar sig på vår plattform för att garantera hög kvalitet och pålitlighet.`,
    expand: "c",
  },
  {
    title: "Hur hanterar Staffnow personuppgifter?",
    desc: `Vi tar dataskydd och integritet på största allvar. Läs vår integritetspolicy för information om hur vi skyddar och hanterar dina uppgifter.`,
    expand: "d",
  },
  {
    title: "Vilka kostnader är förknippade med att använda Staffnow?",
    desc: `För att få detaljerad information om våra prissättningsmodeller, besök vår avdelning för prissättning eller kontakta oss för en personlig konsultation.`,
    expand: "e",
  },
];

const FaqClassic = () => {
  return (
    <div className="accordion-style-four">
      <div className="faq-wrraper">
        <Accordion preExpanded={["b"]} allowZeroExpanded>
          {FaqContent.map((item, i) => (
            <AccordionItem className="card" key={i} uuid={item.expand}>
              <AccordionItemHeading className="card-header">
                <AccordionItemButton>
                  <h5 className="mb-0">
                    <button className="btn btn-link">{item.title}</button>{" "}
                  </h5>
                </AccordionItemButton>
              </AccordionItemHeading>
              {/* Accordion Heading */}
              <AccordionItemPanel className="card-body fadeInUp">
                <p>{item.desc}</p>
              </AccordionItemPanel>
              {/* Accordion Body Content */}
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default FaqClassic;
