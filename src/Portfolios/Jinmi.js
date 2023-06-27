// import React, {useEffect, useRef, useState } from "react";
import './PortfolioDetail.scss';
import React from "react";

export default function Jinmi({pf}) {

  return (
    <>
      {pf && (
        <div className="portfolioContent gridContainer c2">

          <div className="gridCell img background c21">
            <img src={`/images/portfolios/${pf.code}/${pf.code}1.jpg`} alt=""/>
          </div>

          <div className="gridCell img background c21">
            <img src={`/images/portfolios/${pf.code}/${pf.code}4.jpg`} alt=""/>
          </div>
          <div className="gridCell img background c21">
            <img src={`/images/portfolios/${pf.code}/${pf.code}5.jpg`} alt=""/>
          </div>
          <div className="gridCell img background c21">
            <img src={`/images/portfolios/${pf.code}/${pf.code}6.jpg`} alt=""/>
          </div>
          <div className="gridCell img background c21">
            <img src={`/images/portfolios/${pf.code}/${pf.code}7.jpg`} alt=""/>
          </div>
          <div className="gridCell img background c21">
            <img src={`/images/portfolios/${pf.code}/${pf.code}8.jpg`} alt=""/>
          </div>
          <div className="gridCell img background c21">
            <img src={`/images/portfolios/${pf.code}/${pf.code}9.jpg`} alt=""/>
          </div>
          <div className="gridCell img background c21">
            <img src={`/images/portfolios/${pf.code}/${pf.code}10.jpg`} alt=""/>
          </div>
          <div className="gridCell img background c21">
            <img src={`/images/portfolios/${pf.code}/${pf.code}11.jpg`} alt=""/>
          </div>

        </div>
      )}
    </>
  )
}