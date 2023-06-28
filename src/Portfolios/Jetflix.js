// import React, {useEffect, useRef, useState } from "react";
import './PortfolioDetail.scss';
import React from "react";

export default function Jetflix({pf}) {

  return (
    <>
      {pf && (
        <div className="portfolioContent gridContainer c2">

          <div className="gridCell imgCenter screenshot c21">
            <img src={`/images/portfolios/${pf.code}/${pf.code}S1.jpg`} alt=""/>
          </div>

          <div className="gridCell displayTxt dark c21">
            <p>
              Figma-based UI/UX Design for a Mobile Video Playback Application with Dark Mode
            </p>
          </div>

          <div className="gridCell imgCenter screenshot c21">
            <img src={`/images/portfolios/${pf.code}/${pf.code}S2.jpg`} alt=""/>
          </div>

          <div className="gridCell txt c21">
            <p>
              I focused on optimizing libraries and components to create reusable and logical source code. With a thorough understanding of HTML5 and CSS3, I dedicated considerable effort to leveraging Figma as a collaborative tool and exploring effective communication methods. My goal was to ensure seamless collaboration and maximize efficiency in utilizing Figma while contemplating the best practices for teamwork.            </p>
          </div>

          <div className="gridCell imgCenter screenshot c21">
            <img src={`/images/portfolios/${pf.code}/${pf.code}S4.jpg`} alt=""/>
          </div>

          <div className="gridCell txt c21">
            <p>
              The project also focused on enhancing the user's interaction with the app by implementing a dark mode feature. By providing a sleek and visually pleasing dark interface, the application ensures a comfortable viewing experience even in low-light environments.
            </p>
          </div>

          <div className="gridCell img c21">
            <img src={`/images/portfolios/${pf.code}/${pf.code}1.jpg`} alt=""/>
          </div>

          <div className="gridCell txt c21">
            <p>
              Using Figma's powerful design tools, I crafted a comprehensive set of components that maintained consistency throughout the application. These components enabled seamless navigation and intuitive user interactions, contributing to an immersive video playback experience.
            </p>
            <p>
              In addition to the component library, I created detailed wireframes that visualized the app's structure and layout. The wireframes served as a blueprint, guiding the development process and ensuring that the final product met the intended design goals.
            </p>
          </div>

          <div className="gridCell img c21">
            <img src={`/images/portfolios/${pf.code}/${pf.code}2.jpg`} alt=""/>
          </div>

          <div className="gridCell txt c21">
            <p>
              To enhance the user experience further, I developed user flows that outlined the various paths users could take within the application. This helped identify potential pain points and allowed me to optimize the navigation and overall usability of the app.
            </p>
            <p>
              Throughout the project, I aimed to strike a balance between improving my skills and exploring my personal creative preferences. This personal touch added a unique flair to the design, making the project feel more like a passion-driven endeavor.
            </p>
          </div>

          <div className="gridCell img c21">
            <img src={`/images/portfolios/${pf.code}/${pf.code}3.jpg`} alt=""/>
          </div>

          {/*<div className="gridCell img c21">*/}
          {/*  <img src={`/images/portfolios/${pf.code}/${pf.code}6.jpg`} alt=""/>*/}
          {/*</div>*/}

          <div className="gridCell txt c21">
            <p>
              By undertaking this personal project, I not only honed my UI/UX design skills using Figma but also gained valuable experience in conceptualizing and executing a mobile application with a focus on video playback.
            </p>
          </div>

          <div className="gridCell imgCenter c21">
            <img src={`/images/portfolios/${pf.src}`} alt=""/>
          </div>

        </div>
      )}
    </>
  )
}