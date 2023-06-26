// import React, {useEffect, useRef, useState } from "react";
import './PortfolioDetail.scss';
import React from "react";

export default function Danahus({pf}) {

  return (
    <>
      {pf && (
        <div className="portfolioContent gridContainer c2">

          <div className="gridCell img background c21">
            <img src={`/images/portfolios/${pf.code}/${pf.code}1.jpg`} alt=""/>
          </div>
          <div className="gridCell txt c21 dark">
            <p className="comment">{pf.comment}</p>
          </div>
          <div className="gridCell txt c21 dark">
            <p className="comment">
              troduction:
              In this portfolio, I present my professional work as a graphic designer, showcasing a project where I successfully understood and collaborated with the client to create a brand design that encompassed their desired concept and direction. The project involved the creation of a logo and signage, resulting in a highly satisfactory outcome for the client. The following is an official and professional description of the step-by-step process and achievements.

              Client Consultation and Understanding:

              Initiated a detailed discussion with the client to comprehend their vision, values, target audience, and specific requirements for the brand design project.
              Actively listened to the client's preferences, expectations, and desired message to be conveyed through the logo and signage.
              Conducted research on the industry, competitors, and target market to gain valuable insights and ensure a well-informed design approach.
              Concept Development and Exploration:

              Brainstormed creative ideas and concepts based on the client's input, blending it with my design expertise and industry knowledge.
              Generated multiple design concepts, exploring different visual elements, typography, color schemes, and graphic styles that aligned with the client's brand identity.
              Presented the initial design concepts to the client, explaining the rationale behind each option and seeking their feedback for further refinement.
              Iterative Design Process:

              Collaborated closely with the client, engaging in open and effective communication to gather feedback and incorporate revisions.
              Iterated on the design concepts, refining and evolving them based on the client's preferences and constructive feedback.
              Demonstrated flexibility and adaptability in incorporating changes while maintaining the core essence of the brand identity throughout the design iterations.
              Design Execution and Presentation:

              Translated the finalized logo and signage concepts into visually compelling and impactful designs.
              Leveraged industry-standard graphic design software and tools to create high-quality digital assets and mockups.
              Prepared comprehensive design presentations that showcased the logo and signage in various contexts, such as on stationery, marketing materials, and physical installations.
              Client Satisfaction and Success:

              Maintained constant communication with the client to ensure alignment throughout the design process, addressing any concerns or queries promptly.
              Delivered the final logo and signage designs within the agreed-upon timeline, meeting or exceeding the client's expectations.
              Received highly positive feedback from the client, expressing their satisfaction with the brand design and its ability to effectively represent their business, attract customers, and differentiate their brand in the market.
              By including the above information and tailoring it to reflect your specific project details and achievements, you can create an official and professional description of your brand design work that showcases your skills, collaboration, and successful outcomes.
            </p>
          </div>

          <div className="gridCell img background">
            <img src={`/images/portfolios/${pf.code}/${pf.code}2.jpg`} alt=""/>
          </div>
          <div className="gridCell img background">
            <img src={`/images/portfolios/${pf.code}/${pf.code}3.jpg`} alt=""/>
          </div>

          <div className="gridCell img background c21">
            <img src={`/images/portfolios/${pf.code}/${pf.code}4.jpg`} alt=""/>
          </div>
          <div className="gridCell img background c21">
            <img src={`/images/portfolios/${pf.code}/${pf.code}5.jpg`} alt=""/>
          </div>
          <div className="gridCell txt c21">
            <p className="comment">{pf.title}</p>
            <p className="comment">{pf.subtitle}</p>
          </div>
          <div className="gridCell img background c21">
            <img src={`/images/portfolios/${pf.code}/${pf.code}6.jpg`} alt=""/>
          </div>
          <div className="gridCell img background c21">
            <img src={`/images/portfolios/${pf.code}/${pf.code}7.jpg`} alt=""/>
          </div>

        </div>
      )}
    </>
  )
}