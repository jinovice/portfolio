// import React, {useEffect, useRef, useState } from "react";
import './PortfolioDetail.scss';
import React from "react";

export default function Snu({pf}) {

  return (
    <>
      {pf && (
        <div className="portfolioDetail">
          <div className="portfolioDetailHeader">
            <section className="info">
              <h1>{pf.title}</h1>
              <div className="subtitle">{pf.subtitle}</div>
            </section>
            <section className="roles">
              <ul className="tags roles dark">
                {pf.roles.map((role, index) => (<li key={index}>{role}</li>))}
              </ul>
              <ul className="tags skills">
                {pf.skills.map((role, index) => (<li key={index}>{role}</li>))}
              </ul>
            </section>
          </div>
          <div className="portfolioContent gridContainer c2">

            <div className="gridCell img background c21">
              <img src={`/images/portfolios/${pf.code}/${pf.code}1.jpg`} alt=""/>
            </div>
            <div className="gridCell txt c21 dark">
              <p className="comment">{pf.comment}</p>
            </div>

            <div className="gridCell img background">
              <img src={`/images/portfolios/${pf.code}/${pf.code}2.jpg`} alt=""/>
            </div>
            <div className="gridCell img background">
              <img src={`/images/portfolios/${pf.code}/${pf.code}3.jpg`} alt=""/>
            </div>

            <div className="gridCell img background c21">
              <img src={`/images/portfolios/${pf.code}/${pf.code}4.jpg`} alt=""/>
            </div>
            <div className="gridCell img background c21">
              <img src={`/images/portfolios/${pf.code}/${pf.code}5.jpg`} alt=""/>
            </div>
            <div className="gridCell txt c21">
              <p className="comment">{pf.title}</p>
              <p className="comment">{pf.subtitle}</p>
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
        </div>
      )}
    </>
  )
}