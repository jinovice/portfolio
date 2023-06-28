// import React, {useEffect, useRef, useState } from "react";
import './PortfolioDetail.scss';
import React from "react";

export default function Daekyo({pf}) {

  return (
    <>
      {pf && (
        <div className="portfolioContent gridContainer c2">

          <div className="gridCell img background c21">
            <img src={`/images/portfolios/${pf.code}/${pf.code}S1.jpg`} alt=""/>
          </div>

          <div className="gridCell displayTxt c21 dark">
            <p className="comment">{pf.description}</p>
          </div>

          <div className="gridCell img background c21">
            <img src={`/images/portfolios/${pf.code}/${pf.code}S2.jpg`} alt=""/>
          </div>

          <div className="gridCell txt c21">
            <h2>Introduction</h2>
            <p>
              In this project, I played a key role in the revamp, redesign, and enhancement of an existing website, focusing on responsive design, cross-browser compatibility, cross-device compatibility, and web accessibility. This portfolio showcases my professional and official documentation, highlighting the step-by-step process, collaborative efforts with designers and stakeholders, and successful outcomes achieved.
            </p>
          </div>

          <div className="gridCell img background c21">
            <img src={`/images/portfolios/${pf.code}/${pf.code}S3.jpg`} alt=""/>
          </div>

          <div className="gridCell txt c21">
            <h2>Analysis and Planning</h2>
            <p>
              Conducted an in-depth analysis of the existing website's strengths, weaknesses, and user feedback.
              Collaborated closely with designers and stakeholders to gather requirements and align project goals.
              Participated in brainstorming sessions to contribute insights and suggestions for the website's revamp.
            </p>
          </div>

          <div className="gridCell txt c21">
            <h2>Design Collaboration and Implementation</h2>
            <p>
              Worked closely with the design team to translate their concepts and wireframes into functional and visually appealing web interfaces.
              Provided feedback and recommendations to ensure designs were responsive, user-friendly, and aligned with modern design trends.
              Implemented the design using HTML, CSS, and JavaScript, maintaining design fidelity and optimizing for performance.
            </p>
          </div>

          <div className="gridCell img background c21">
            <img src={`/images/portfolios/${pf.code}/${pf.code}S4.jpg`} alt=""/>
          </div>

          <div className="gridCell txt c21">
            <h2>Responsive Design and Development</h2>
            <p>
              Applied responsive design principles to ensure the website's compatibility with various screen sizes and devices.
              Utilized CSS media queries and flexible grid systems to create fluid layouts that adapt seamlessly to different viewport dimensions.
              Tested and refined the responsiveness across a range of devices and browsers to ensure consistent user experiences.
            </p>
          </div>

          <div className="gridCell txt c21">
            <h2>Cross-Browser Compatibility</h2>
            <p>
              Conducted comprehensive testing on multiple browsers (Chrome, Firefox, Safari, Edge, etc.) to identify and address any compatibility issues.
              Employed vendor-prefixing, polyfills, and graceful degradation techniques to ensure consistent rendering and functionality across different browsers.
              Collaborated with the development team to find efficient solutions for browser-specific challenges.
            </p>
          </div>

          <div className="gridCell img background c21">
            <img src={`/images/portfolios/${pf.code}/${pf.code}S5.jpg`} alt=""/>
          </div>

          <div className="gridCell txt c21">
            <h2>Cross-Device Compatibility</h2>
            <p>
              Collaborated closely with the development team to optimize the website's performance and functionality across various devices and platforms.
              Utilized device testing tools and emulators to simulate user experiences on different devices, including desktops, tablets, and smartphones.
              Implemented touch-friendly interactions, device-specific optimizations, and responsive image techniques for a seamless cross-device experience.
            </p>
          </div>

          <div className="gridCell txt c21">
            <h2>Web Accessibility</h2>
            <p>
              Committed to complying with WCAG guidelines to ensure the website's accessibility for all users, including those with disabilities.
              Collaborated with the design and development teams to implement proper semantic structure, alt attributes for images, and ARIA roles.
              Conducted accessibility audits and user testing to identify and address any usability barriers, ensuring an inclusive user experience.
            </p>
          </div>


          <div className="gridCell img background c21">
            <img src={`/images/portfolios/${pf.code}/${pf.code}1.jpg`} alt=""/>
          </div>

          <div className="gridCell txt c21">
            <h2>Communication and Client Collaboration</h2>
            <p>
              Maintained regular communication with clients, providing progress updates, gathering feedback, and addressing any concerns or questions.
              Actively participated in meetings, discussions, and presentations, effectively communicating technical concepts to non-technical stakeholders.
              Collaborated with clients on content updates, feature additions, and change requests, ensuring client satisfaction throughout the project.
            </p>
          </div>

          <div className="gridCell img background c21">
            <img src={`/images/portfolios/${pf.code}/${pf.code}2.jpg`} alt=""/>
          </div>

          <div className="gridCell txt c21">
            <h2>Successful Outcome</h2>
            <p>
              The revamped website achieved significant improvements in user engagement, page load speed, and overall user experience.
              Received positive feedback from stakeholders and end users regarding the enhanced design, responsiveness, and accessibility.
              Demonstrated the successful integration of responsive design, cross-browser compatibility, cross-device compatibility, and web accessibility, resulting in a modern and user-friendly website.
              Please note that this is a sample outline, and you can adapt it to reflect your specific project details, accomplishments, and collaboration experiences.
            </p>
          </div>

        </div>
      )}
    </>
  )
}