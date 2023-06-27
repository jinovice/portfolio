// import React, {useEffect, useRef, useState } from "react";
import './PortfolioDetail.scss';
import React from "react";

export default function Thereborn({pf}) {

  return (
    <>
      {pf && (
        <div className="portfolioContent gridContainer c2">

          <div className="gridCell imgCenter logo c21">
            <img src={`/images/portfolios/${pf.src}`} alt=""/>
          </div>
          {/*<div className="gridCell txt c21 dark">*/}
          {/*  <p className="comment">{pf.comment}</p>*/}
          {/*</div>*/}

          <div className="gridCell txt c21">
            <h2>Design Renewal and Web Accessibility Enhancement</h2>
            <p>
              As the Front-end Web Development Team Leader, I actively participated in the design renewal and web accessibility enhancement project for the Kolon shopping mall. Collaborating closely with the UI/UX design team, we aimed to improve user convenience and satisfaction. By incorporating user-centered design principles, we successfully revamped the visual interface and optimized the overall user experience.
            </p>
          </div>

          {/*<div className="gridCell img c21">*/}
          {/*  <img src={`/images/portfolios/${pf.code}/${pf.code}1.jpg`} alt=""/>*/}
          {/*</div>*/}

          <div className="gridCell img c21">
            <img src={`/images/portfolios/${pf.code}/${pf.code}2.jpg`} alt=""/>
          </div>

          <div className="gridCell txt c21">
            <h2>Front-end Web Development</h2>
            <p>
              In my role as the Front-end Web Development Team Leader, I led the development team in implementing the new design and ensuring seamless functionality. Leveraging my expertise in front-end technologies, including HTML, CSS, and JavaScript, we brought the revamped design to life. We focused on responsive layouts, smooth navigation, and efficient data handling to create a user-friendly and visually appealing shopping experience.
            </p>
          </div>

          <div className="gridCell img c21">
            <img src={`/images/portfolios/${pf.code}/${pf.code}3.jpg`} alt=""/>
          </div>

          <div className="gridCell txt c21">
            <h2>UI/UX Design Collaboration</h2>
            <p>
              Throughout the project, I actively collaborated with the UI/UX design team to ensure a cohesive and user-centric approach. By incorporating user feedback and usability testing, we iteratively refined the design elements and interactions to meet the needs and expectations of the users. Our collaborative efforts resulted in an intuitive and engaging interface that enhanced the overall user experience.
            </p>
          </div>

          <div className="gridCell img c21">
            <img src={`/images/portfolios/${pf.code}/${pf.code}4.jpg`} alt=""/>
          </div>

          <div className="gridCell txt c21">
            <h2>Client Satisfaction and Successful Outcome</h2>
            <p>
              By effectively managing the project and fostering a collaborative work environment, we achieved client satisfaction and delivered a successful outcome. The revamped Kolon shopping mall website not only showcased an improved visual design but also addressed web accessibility guidelines, making it more inclusive and user-friendly. The positive feedback from the client and the increased user engagement demonstrated the success of our project.
            </p>
          </div>

          <div className="gridCell img c21">
            <img src={`/images/portfolios/${pf.code}/${pf.code}5.jpg`} alt=""/>
          </div>

          <div className="gridCell img c21">
            <img src={`/images/portfolios/${pf.code}/${pf.code}6.jpg`} alt=""/>
          </div>
          {/*<div className="gridCell img c21">*/}
          {/*  <img src={`/images/portfolios/${pf.code}/${pf.code}7.jpg`} alt=""/>*/}
          {/*</div>*/}

          <div className="gridCell txt c21">
            <p>
              Overall, my role as the Front-end Web Development Team Leader in the design renewal and web accessibility enhancement project for the Kolon shopping mall involved collaborative UI/UX design participation, successful front-end web development, and client satisfaction, resulting in a highly impactful and successful project.
            </p>
          </div>

        </div>
      )}
    </>
  )
}