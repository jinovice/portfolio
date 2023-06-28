// import React, {useEffect, useRef, useState } from "react";
import './PortfolioDetail.scss';
import React from "react";

export default function Hyundai({pf}) {

  return (
    <>
      {pf && (
        <div className="portfolioContent gridContainer c2">

          <div className="gridCell imgCenter screenshot c21">
            <img src={`/images/portfolios/${pf.code}/${pf.code}1.jpg`} alt=""/>
          </div>

          <div className="gridCell txt c21">
            <h2>Introduction</h2>
            <p>
              In this project, as the team leader of the Front-end Web Development team, I was responsible for revamping, enhancing, and ensuring the adherence to responsive design, cross-browser compatibility, cross-device compatibility, and web accessibility standards for an existing website. This portfolio showcases my professional and official documentation outlining the step-by-step process and tasks performed during the project. As the team leader, I provided guidance, coordinated the efforts of the team members, and ensured the successful implementation of the project objectives.
            </p>
          </div>

          <div className="gridCell displayTxt c21 dark">
            <p className="comment">{pf.description}</p>
          </div>

          <div className="gridCell imgCenter screenshot c21">
            <img src={`/images/portfolios/${pf.code}/${pf.code}2.jpg`} alt=""/>
          </div>

          <div className="gridCell txt c21">
            <h2>Analysis and Planning</h2>
            <p>
              Conducted a comprehensive analysis of the existing website's design, functionality, and performance.
              Collaborated with the project team to define goals, target audience, and project requirements.
              Developed a detailed plan outlining the approach and strategies for the website revamp.
            </p>
          </div>

          <div className="gridCell imgCenter screenshot c21">
            <img src={`/images/portfolios/${pf.code}/${pf.code}3.jpg`} alt=""/>
          </div>

          <div className="gridCell txt c21">
            <h2>Responsive Design Implementation</h2>
            <p>
              Utilized modern HTML5 and CSS3 techniques to create a responsive layout that adapts to various screen sizes and resolutions.
              Employed media queries to apply specific styles based on viewport dimensions.
              Ensured a fluid and user-friendly experience across desktop, tablet, and mobile devices.
            </p>
          </div>

          <div className="gridCell imgCenter screenshot c21">
            <img src={`/images/portfolios/${pf.code}/${pf.code}4.jpg`} alt=""/>
          </div>

          <div className="gridCell txt c21">
            <h2>Cross-Browser Compatibility</h2>
            <p>
              Conducted thorough testing and debugging across multiple browsers, including Chrome, Firefox, Safari, and Internet Explorer.
              Implemented vendor-prefixing and fallback techniques to ensure consistent rendering across different browser engines.
              Resolved compatibility issues and inconsistencies to achieve a seamless browsing experience for all users.
            </p>
          </div>

          {/*<div className="gridCell imgCenter screenshot c21">*/}
          {/*  <img src={`/images/portfolios/${pf.code}/${pf.code}5.jpg`} alt=""/>*/}
          {/*</div>*/}

          <div className="gridCell txt c21">
            <h2>Cross-Device Compatibility</h2>
            <p>
              Designed and developed the website to be compatible with a wide range of devices, including desktop computers, laptops, tablets, and smartphones.
              Employed responsive design principles to optimize the user experience on various devices and screen sizes.
              Tested the website on different devices and resolutions to ensure consistent functionality and visual appeal.
            </p>
          </div>

          <div className="gridCell imgCenter screenshot c21">
            <img src={`/images/portfolios/${pf.code}/${pf.code}6.jpg`} alt=""/>
          </div>

          <div className="gridCell txt c21">
            <h2>Web Accessibility</h2>
            <p>
              Complied with WCAG (Web Content Accessibility Guidelines) to make the website accessible to users with disabilities.
              Implemented proper HTML structure, semantic tags, and alternative text for images to improve screen reader compatibility.
              Ensured sufficient color contrast, keyboard navigation support, and focus indicators for improved usability.
              Conclusion:
              Through this project, I successfully revamped and enhanced the existing website by implementing responsive design, cross-browser compatibility, cross-device compatibility, and web accessibility principles. The outcome is a modern, user-friendly, and accessible website that provides a seamless experience across various devices and platforms.

              Please note that this is a sample outline and you can tailor it to your specific project and achievements.
            </p>
          </div>

          <div className="gridCell txt c21 gray">
            <h2>Conclusion</h2>
            <p>
              Through this project, I successfully revamped and enhanced the existing website by implementing responsive design, cross-browser compatibility, cross-device compatibility, and web accessibility principles. The outcome is a modern, user-friendly, and accessible website that provides a seamless experience across various devices and platforms.
            </p>
          </div>

        </div>
      )}
    </>
  )
}