// import React, {useEffect, useRef, useState } from "react";
import './PortfolioDetail.scss';
import React from "react";

export default function Olta({pf}) {

  return (
    <>
      {pf && (
        <div className="portfolioContent gridContainer c2">

          <div className="gridCell img background c21">
            <img src={`/images/portfolios/${pf.code}/${pf.code}1.jpg`} alt=""/>
          </div>

          <div className="gridCell txt c21">
            <p>
              Logo Design for Education Brand "OLTA" Incorporating Hand Gestures and Compass Symbol
            </p>
          </div>

          <div className="gridCell img c21">
            <img src={`/images/portfolios/${pf.code}/${pf.code}2.jpg`} alt=""/>
          </div>

          <div className="gridCell txt c21">
            <p>
              The brand name "OLTA" consists of the Korean letters ㅇ and ㅌ. In the logo design, I creatively represented these letters by incorporating hand gestures that resemble the shape of the letters. Additionally, I included a compass symbol to convey the idea of guiding students towards their destination.
            </p>
          </div>

          <div className="gridCell img c21">
            <img src={`/images/portfolios/${pf.code}/${pf.code}3.jpg`} alt=""/>
          </div>

          <div className="gridCell txt c21">
            <p>
              The hand gestures, resembling the letters ㅇ and ㅌ, symbolize affirmation and support, representing the encouragement and guidance provided by the OLTA brand. This design element creates a visual connection to the brand name while adding a human touch and fostering a sense of warmth and approachability.
            </p>
          </div>

          <div className="gridCell img c21">
            <img src={`/images/portfolios/${pf.code}/${pf.code}4.jpg`} alt=""/>
          </div>

          <div className="gridCell txt c21">
            <p>
              Furthermore, the compass symbol within the logo represents the brand's commitment to guiding students in the right direction, helping them navigate their educational journey. The compass symbolizes guidance, exploration, and finding one's path, aligning perfectly with OLTA's mission of providing quality education and empowering students to reach their goals.
            </p>
          </div>

          <div className="gridCell img c21">
            <img src={`/images/portfolios/${pf.code}/${pf.code}5.jpg`} alt=""/>
          </div>

          {/*<div className="gridCell img c21">*/}
          {/*  <img src={`/images/portfolios/${pf.code}/${pf.code}6.jpg`} alt=""/>*/}
          {/*</div>*/}

          <div className="gridCell txt c21">
            <p>
              By combining the hand gestures and compass symbol, the logo design for "OLTA" visually communicates the brand's core values of support, guidance, and direction. It captures the essence of the brand and creates a memorable and meaningful identity that resonates with students and parents alike.
            </p>
          </div>

          <div className="gridCell img c21">
            <img src={`/images/portfolios/${pf.code}/${pf.code}7.jpg`} alt=""/>
          </div>

        </div>
      )}
    </>
  )
}