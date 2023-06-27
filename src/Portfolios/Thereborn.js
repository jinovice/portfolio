// import React, {useEffect, useRef, useState } from "react";
import './PortfolioDetail.scss';
import React from "react";

export default function Thereborn({pf}) {

  return (
    <>
      {pf && (
        <div className="portfolioContent gridContainer c2">

          <div className="gridCell img c21">
            <img src={`/images/portfolios/${pf.code}/${pf.code}1.jpg`} alt=""/>
          </div>

          <div className="gridCell txt c21">
            <p>
              Logo Design Symbolizing the Movement of the Brand Name 리본(Ribbon)
            </p>
          </div>

          <div className="gridCell img c21">
            <img src={`/images/portfolios/${pf.code}/${pf.code}2.jpg`} alt=""/>
          </div>

          <div className="gridCell txt c21">
            <p>
              The brand name "리본 (Ribbon)" is a wordplay inspired by the English word "Ribbon." To visually represent the concept of movement associated with ribbons, I designed a logo that incorporates this symbolism.
            </p>
          </div>

          <div className="gridCell img c21">
            <img src={`/images/portfolios/${pf.code}/${pf.code}3.jpg`} alt=""/>
          </div>

          <div className="gridCell txt c21">
            <p>
              By infusing the essence of flowing ribbons into the logo, I aimed to create a dynamic and visually appealing design. The logo embodies the graceful and elegant movement of ribbons, evoking a sense of style, versatility, and beauty.
            </p>
          </div>

          <div className="gridCell img c21">
            <img src={`/images/portfolios/${pf.code}/${pf.code}4.jpg`} alt=""/>
          </div>
          <div className="gridCell img c21">
            <img src={`/images/portfolios/${pf.code}/${pf.code}5.jpg`} alt=""/>
          </div>

          <div className="gridCell txt c21">
            <p>
              Through careful consideration of shapes, colors, and typography, I ensured that the logo effectively communicates the brand identity of "리본 (Ribbon)." The flowing lines and curves within the logo capture the fluidity and energy of ribbons, while the chosen colors and typography harmonize to convey a sense of sophistication and charm.
            </p>
          </div>

          <div className="gridCell img c21">
            <img src={`/images/portfolios/${pf.code}/${pf.code}6.jpg`} alt=""/>
          </div>
          {/*<div className="gridCell img c21">*/}
          {/*  <img src={`/images/portfolios/${pf.code}/${pf.code}7.jpg`} alt=""/>*/}
          {/*</div>*/}

          <div className="gridCell txt c21">
            <p>
              The logo design for "리본 (Ribbon)" symbolizes the graceful movement associated with ribbons, creating a visual representation that captures the essence of the brand.
            </p>
          </div>

          <div className="gridCell img c21">
            <img src={`/images/portfolios/${pf.code}/${pf.code}8.jpg`} alt=""/>
          </div>

        </div>
      )}
    </>
  )
}