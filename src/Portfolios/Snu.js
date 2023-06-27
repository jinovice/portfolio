// import React, {useEffect, useRef, useState } from "react";
import './PortfolioDetail.scss';
import React from "react";

export default function Snu({pf}) {

  return (
    <>
      {pf && (
        <div className="portfolioContent gridContainer c2">

          <div className="gridCell imgCenter logo c21">
            <img src={`/images/portfolios/${pf.code}/${pf.code}1.jpg`} alt=""/>
          </div>

          <div className="gridCell txt c21">
            <h2>Introduction</h2>
            <p>
              In this project, I took on the role of Front-End Web Development Team Leader for the development of a hybrid mobile application called "Seoul University Bus Information." This portfolio showcases my leadership and technical skills in leading the team and contributing to the successful completion of the project.
            </p>
          </div>

          <div className="gridCell imgCenter mobileScreenshot c21">
            <img src={`/images/portfolios/${pf.code}/${pf.code}2.jpeg`} alt=""/>
          </div>

          <div className="gridCell txt c21">
            <h2>Planning and Design Phase</h2>
            <p>
              During the planning and design phase, I collaborated with the project stakeholders to define the requirements and scope of the application. Together, we designed the user interface, ensuring a seamless and intuitive experience for users.
            </p>
          </div>

          <div className="gridCell imgCenter mobileScreenshot c21">
            <img src={`/images/portfolios/${pf.code}/${pf.code}3.jpeg`} alt=""/>
          </div>

          <div className="gridCell txt c21">
            <h2>Front-End Web Development</h2>
            <p>
              As the Front-End Web Development Team Leader, I collaborated closely with the full-stack developers to ensure smooth data communication and real-time updates. I leveraged my expertise in HTML, CSS, and JavaScript to create responsive layouts, interactive components, and seamless navigation throughout the application.
            </p>
          </div>

          <div className="gridCell imgCenter mobileScreenshot c21">
            <img src={`/images/portfolios/${pf.code}/${pf.code}4.jpeg`} alt=""/>
          </div>

          <div className="gridCell txt c21">
            <h2>User Experience Optimization</h2>
            <p>
              One of my key responsibilities was to ensure an exceptional user experience. I conducted thorough usability testing, identifying and addressing any usability issues or bottlenecks. I worked closely with the UX/UI designers to implement visually appealing designs, consistent branding, and intuitive user interactions. By incorporating user feedback and continuously iterating on the design and functionality, I was able to deliver a highly user-friendly and engaging mobile application.
            </p>
          </div>

          <div className="gridCell imgCenter mobileScreenshot c21">
            <img src={`/images/portfolios/${pf.code}/${pf.code}5.jpeg`} alt=""/>
          </div>

          <div className="gridCell txt c21">
            <h2>Quality Assurance and Deployment</h2>
            <p>
              I prioritized quality assurance to deliver a stable and reliable application. I conducted rigorous testing, including functional testing, cross-platform compatibility testing, and performance optimization. I collaborated closely with the Quality Assurance team to address any reported issues promptly and ensure a high-quality product. Finally, I oversaw the deployment process, working closely with the DevOps team to ensure a smooth release and successful launch of the application.
            </p>
          </div>

          <div className="gridCell imgCenter mobileScreenshot c21">
            <img src={`/images/portfolios/${pf.code}/${pf.code}6.jpeg`} alt=""/>
          </div>

          <div className="gridCell txt c21">
            <h2>Conclusion</h2>
            <p>
              Through my leadership and technical expertise as the Front-End Web Development Team Leader, the Seoul University Bus Information hybrid mobile application was successfully developed, providing users with convenient and up-to-date bus information. This portfolio reflects my strong project management skills, technical proficiency, and dedication to delivering high-quality web development solutions.
            </p>
          </div>

        </div>
      )}
    </>
  )
}