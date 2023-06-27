// import React, {useEffect, useRef, useState } from "react";
import './PortfolioDetail.scss';
import React from "react";

export default function M2({pf}) {

  return (
    <>
      {pf && (
        <div className="portfolioContent gridContainer c2">

          <div className="gridCell img background c21">
            <img src={`/images/portfolios/${pf.code}/${pf.code}4.jpg`} alt=""/>
          </div>

          <div className="gridCell txt c21">
            <h2>UI/UX Design : Creating an Intuitive User Experience</h2>
            <p>
              During the UI/UX design phase, I actively participated in the creation of an intuitive and user-friendly interface for the building material calculator application. By conducting user research, wireframing, and prototyping, I ensured that the user experience was seamless and efficient. Collaborating with the design team, we focused on creating a visually appealing and intuitive layout that would enhance user engagement and satisfaction.
            </p>
          </div>

          <div className="gridCell imgCenter mobileScreenshot background">
            <img src={`/images/portfolios/${pf.code}/${pf.code}2.jpg`} alt=""/>
          </div>

          <div className="gridCell imgCenter mobileScreenshot background">
            <img src={`/images/portfolios/${pf.code}/${pf.code}3.jpg`} alt=""/>
          </div>

          <div className="gridCell txt c21">
            <h2>Front-end Web Development: Implementing Interactive Features</h2>
            <p>
              As a front-end web developer, I played a vital role in implementing the interactive functionality of the building material calculator application. Leveraging my expertise in HTML, CSS, and JavaScript, I developed responsive layouts, integrated input fields for capturing building type and dimensions, and incorporated dynamic calculations based on the provided information. By utilizing modern web development technologies and following best practices, I ensured a smooth and engaging user experience.
            </p>
          </div>

          <div className="gridCell txt c21">
            <h2>Back-end Integration: Enabling Seamless Data Communication</h2>
            <p>
              Working closely with the back-end development team, I facilitated the integration of the front-end and back-end components of the hybrid application. Through RESTful API communication, I ensured the seamless exchange of data between the user interface and the server, allowing for real-time updates and accurate material calculations. By collaborating with the team, I contributed to the development of a robust and reliable application architecture.
            </p>
          </div>

          <div className="gridCell img background c21">
            <img src={`/images/portfolios/${pf.code}/${pf.code}1.jpg`} alt=""/>
          </div>

          <div className="gridCell txt c21">
            <h2>Automated Material Calculation: Enhancing Construction Planning</h2>
            <p>
              One of the key features of the building material calculator application was its ability to automatically calculate the required materials based on the inputted building type and dimensions. I actively participated in designing and implementing the algorithm that determined the necessary materials such as lumber, windows, doors, and other construction components. This automated calculation process streamlined construction planning and significantly reduced manual effort and errors.
            </p>
          </div>

          <div className="gridCell imgCenter screenshot c21">
            <img src={`/images/portfolios/${pf.code}/${pf.code}5.jpg`} alt=""/>
          </div>

          <div className="gridCell txt c21">
            <h2>Responsive Design: Ensuring Compatibility Across Devices</h2>
            <p>
              Recognizing the importance of mobile accessibility, I ensured that the building material calculator application was responsive and compatible across various devices and screen sizes. By utilizing responsive design techniques, such as media queries and flexible layouts, I optimized the user experience on smartphones, tablets, and desktop computers. This allowed users to access and utilize the application seamlessly regardless of their preferred device.
            </p>
          </div>

          <div className="gridCell imgCenter screenshot c21">
            <img src={`/images/portfolios/${pf.code}/${pf.code}7.jpg`} alt=""/>
          </div>

          <div className="gridCell txt c21">
            <h2>Effective Collaboration: Driving Success Through Teamwork</h2>
            <p>
              Throughout the project, I actively engaged in effective collaboration with cross-functional teams, including designers, back-end developers, and project managers. By maintaining clear communication channels, participating in regular meetings, and sharing progress updates, we ensured that the project was executed smoothly and delivered within the defined timeline. This collaborative approach fostered a positive team dynamic and facilitated the successful completion of the building material calculator application.
            </p>
          </div>

          <div className="gridCell imgCenter screenshot c21">
            <img src={`/images/portfolios/${pf.code}/${pf.code}8.jpg`} alt=""/>
          </div>

          <div className="gridCell txt c21">
            <h2>Conclusion</h2>
            <p>
              Please note that the provided portfolio description is an example, and you can customize it further based on your actual experience and achievements in the project.
            </p>
          </div>

          {/*<div className="gridCell imgCenter logo c21">*/}
          {/*  <img src={`/images/portfolios/${pf.code}/${pf.code}9.jpg`} alt=""/>*/}
          {/*</div>*/}

        </div>
      )};
    </>
  )
}