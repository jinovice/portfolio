// import React, {useEffect, useRef, useState } from "react";
import './PortfolioDetail.scss';
import React from "react";

export default function Notepad({pf}) {

  return (
    <>
      {pf && (
        <div className="portfolioContent gridContainer c2">

          <div className="gridCell displayTxt c21 dark">
            <p className="comment">{pf.description}</p>
          </div>

          <div className="gridCell txt c21">
            <h2>Introduction</h2>
            <p>
              This solution features a web-based responsive design and seamlessly integrates an interactive whiteboard
              with an online learning platform. The following is a concise overview of the step-by-step process I
              undertook to deliver this comprehensive tool that enables digital sketching, drawing, and interactive
              online lessons across various devices.
            </p>
          </div>

          <div className="gridCell img background c21">
            <img src={`/images/portfolios/${pf.code}/${pf.code}S1.jpg`} alt=""/>
          </div>

          <div className="gridCell txt c21">
            <h2>Project Initiation and Requirements Gathering</h2>
            <p>
              Collaborated with stakeholders to understand their vision and requirements for the cross-device online
              solution. Conducted thorough research to identify the best approach for integrating an interactive whiteboard within
              the existing online learning platform. Defined project goals, user personas, and technical constraints to establish a solid foundation for the
              development process.
            </p>
          </div>
          <div className="gridCell img background c21">
            <img src={`/images/portfolios/${pf.code}/${pf.code}S2.jpg`} alt=""/>
          </div>

          <div className="gridCell txt c21">
            <h2>User Interface (UI) and User Experience (UX) Design</h2>
            <p>
              Created wireframes and interactive prototypes to visualize the layout, functionality, and flow of the solution. Ensured a user-friendly and intuitive interface by implementing best practices in UI/UX design. Collaborated closely with designers and stakeholders to refine the design, incorporating feedback and making necessary iterations.
            </p>
          </div>

          <div className="gridCell img background">
            <img src={`/images/portfolios/${pf.code}/${pf.code}S3.jpg`} alt=""/>
          </div>
          <div className="gridCell img background">
            <img src={`/images/portfolios/${pf.code}/${pf.code}S4.jpg`} alt=""/>
          </div>

          <div className="gridCell txt c21">
            <h2>Responsive Web Development</h2>
            <p>
              Developed the front-end of the solution using HTML, CSS, and JavaScript, ensuring a responsive and
              adaptive design across devices.
              Implemented media queries and responsive techniques to optimize the user experience on different screen
              sizes and resolutions.
              Tested the solution on various devices and browsers to ensure compatibility and seamless functionality.
            </p>
          </div>

          {/*<div className="gridCell img background">*/}
          {/*  <img src={`/images/portfolios/${pf.code}/${pf.code}S5.jpg`} alt=""/>*/}
          {/*</div>*/}

          <div className="gridCell img background">
            <img src={`/images/portfolios/${pf.code}/${pf.code}1.jpg`} alt=""/>
          </div>
          <div className="gridCell img background">
            <img src={`/images/portfolios/${pf.code}/${pf.code}2.jpg`} alt=""/>
          </div>

          <div className="gridCell txt c21">
            <h2>Interactive Whiteboard Integration</h2>
            <p>
              Integrated the interactive whiteboard functionality into the online learning platform, allowing users to
              engage in digital sketching, drawing, and annotation.
              Implemented real-time collaboration features, enabling multiple users to interact and collaborate on the
              whiteboard simultaneously.
              Optimized the performance and responsiveness of the whiteboard tools and features for a smooth and
              interactive user experience.
            </p>
          </div>

          <div className="gridCell img background">
            <img src={`/images/portfolios/${pf.code}/${pf.code}3.jpg`} alt=""/>
          </div>

          <div className="gridCell img background">
            <img src={`/images/portfolios/${pf.code}/${pf.code}4.jpg`} alt=""/>
          </div>

          <div className="gridCell txt c21">
            <h2>Cross-Browser and Cross-Device Testing</h2>
            <p>
              Conducted comprehensive testing on different browsers (Chrome, Firefox, Safari, etc.) to ensure
              cross-browser compatibility.
              Tested the solution on various devices, including desktops, tablets, and mobile devices, to ensure
              consistent functionality and usability.
              Addressed any compatibility or performance issues encountered during testing, making necessary adjustments
              and optimizations.
            </p>
          </div>

          <div className="gridCell img background">
            <img src={`/images/portfolios/${pf.code}/${pf.code}5.jpg`} alt=""/>
          </div>
          <div className="gridCell img background">
            <img src={`/images/portfolios/${pf.code}/${pf.code}6.jpg`} alt=""/>
          </div>

          <div className="gridCell txt c21">
            <h2>Deployment and Launch</h2>
            <p>
              Deployed the cross-device online solution on a production server, following industry best practices and
              security measures.
              Conducted final quality assurance checks to ensure all features and functionalities were working as
              intended.
              Collaborated with the client's team to coordinate the solution's launch, providing technical support and
              guidance as needed.
              By summarizing your project's key steps and achievements in a concise and professional manner, you can
              effectively showcase your expertise in developing a versatile cross-device online solution with an
              integrated interactive whiteboard. Customize the provided information with specific details from your
              project to create a compelling portfolio piece.
            </p>
          </div>

          <div className="gridCell img background c21">
            <img src={`/images/portfolios/${pf.code}/${pf.code}7.jpg`} alt=""/>
          </div>

        </div>
      )}
    </>
  )
}