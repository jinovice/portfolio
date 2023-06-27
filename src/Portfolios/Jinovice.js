// import React, {useEffect, useRef, useState } from "react";
import './PortfolioDetail.scss';
import React from "react";

export default function Jinovice({pf}) {

  return (
    <>
      {pf && (
        <div className="portfolioContent gridContainer c2">

          <div className="gridCell displayTxt c21 dark">
            <p>
              As a side project, I designed and deployed my portfolio website using React and Sass. The website is fully compliant with WCAG standards and is cross-device and cross-browser compatible. I was responsible for the entire process, from UI/UX design to graphic design, development, and deployment. Please find below a step-by-step description of the project.
            </p>
          </div>

          <div className="gridCell txt c21">
            <h2>UI/UX Design</h2>
            <p>
              I started by conceptualizing and designing the user interface and user experience of the website. I carefully considered the layout, typography, color scheme, and overall visual appeal to create an engaging and intuitive design.
            </p>
          </div>

          <div className="gridCell img c21">
            <img src={`/images/portfolios/${pf.code}/${pf.code}4.jpg`} alt=""/>
          </div>

          <div className="gridCell txt c21">
            <h2>Graphic Design</h2>
            <p>
              To enhance the visual appeal of the website, I created custom graphics, icons, and illustrations. These elements were strategically placed throughout the website to convey information effectively and add a touch of creativity.
            </p>
          </div>

          <div className="gridCell img c21">
            <img src={`/images/portfolios/${pf.code}/${pf.code}2.jpg`} alt=""/>
          </div>

          <div className="gridCell txt c21">
            <h2>Development</h2>
            <p>
              Using React and Sass, I began the development phase of the project. I built reusable components, implemented responsive layouts, and integrated animations and transitions to create a smooth and interactive user experience. I ensured that the website was optimized for performance and accessibility.
            </p>
          </div>

          <div className="gridCell img c21">
            <img src={`/images/portfolios/${pf.code}/${pf.code}3.jpg`} alt=""/>
          </div>

          <div className="gridCell txt c21">
            <h2>Deployment</h2>
            <p>
              Once the development was complete, I deployed the portfolio website to a web hosting platform. I made sure that the website was properly configured and tested across different devices and browsers to ensure a consistent experience for all users.
            </p>
          </div>

          <div className="gridCell img c21">
            <img src={`/images/portfolios/${pf.code}/${pf.code}1.jpg`} alt=""/>
          </div>

          <div className="gridCell txt c21">
            <p>
              By completing this side project, I not only showcased my skills in UI/UX design, graphic design, and web development but also demonstrated my ability to take a project from conception to deployment. The portfolio website serves as a testament to my expertise and creativity in creating visually appealing and user-friendly digital experiences.
            </p>
          </div>

          <div className="gridCell img c21">
            <img src={`/images/portfolios/${pf.code}/${pf.code}5.jpg`} alt=""/>
          </div>

        </div>
      )}
    </>
  )
}