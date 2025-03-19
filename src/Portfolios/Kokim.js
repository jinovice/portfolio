// import React, {useEffect, useRef, useState } from "react";
import './PortfolioDetail.scss';
import React from "react";

export default function Kokim({pf}) {

  return (
    <>
      {pf && (
        <div className="portfolioContent gridContainer c2">

        <div className="gridCell imgCenter screenshot c21">
          <img src={`/images/portfolios/${pf.code}/${pf.code}1.jpg`} alt=""/>
        </div>

          <div className="gridCell txt c21">
            <h2>Shopify Online Store Management</h2>
            <p>
              As the primary manager of the Shopify online store, I was responsible for overseeing all aspects of its operations to ensure an efficient and seamless experience for both customers and the business. This included managing product listings, tracking inventory levels, optimizing the user interface for enhanced shopping experiences, and coordinating customer support to resolve any issues promptly. I collaborated closely with the development and design teams to ensure that the website was user-friendly, visually appealing, and functionally robust.
            </p>
          </div>

          <div className="gridCell txt c21">
            <h2>Google Ads Campaign Management</h2>
            <p>
              In addition to store management, I took the lead in executing comprehensive digital marketing strategies, specifically focusing on Google Ads campaigns. I meticulously analyzed market trends, customer demographics, and keyword performance to create targeted advertisements that drove quality traffic to the site. Through constant monitoring and optimization, I ensured the campaigns were cost-effective and maximized return on investment (ROI), contributing to a significant increase in sales and customer acquisition.
            </p>
          </div>

          <div className="gridCell txt c21">
            <h2>SEO Strategy and Implementation</h2>
            <p>
              A key focus of my role was implementing SEO best practices to boost the store's organic search visibility. I conducted in-depth keyword research, optimized on-page content, and improved technical SEO elements to ensure the website ranked higher on search engines, ultimately driving more traffic and expanding the store's reach. This SEO strategy not only improved visibility but also played a crucial role in building long-term, sustainable growth for the business.
            </p>
          </div>

          <div className="gridCell imgCenter screenshot c21">
            <img src={`/images/portfolios/${pf.code}/${pf.code}2.jpg`} alt=""/>
          </div>

          <div className="gridCell txt c21">
            <h2>Review and Points Management System</h2>
            <p>
              I introduced and managed an innovative review and points management system, designed to incentivize customer engagement. By integrating this system, I encouraged users to leave reviews, which in turn enhanced the credibility and trustworthiness of the store. Additionally, the points program motivated repeat purchases and increased customer retention, contributing to higher lifetime value (LTV) for each customer. This initiative also led to a stronger, more active community of users who were more likely to engage with promotions and share their experiences with others, amplifying the brand's online presence.
            </p>
          </div>

          <div className="gridCell txt c21">
            <h2>Performance Tracking and Analytics</h2>
            <p>
              Throughout the entire process, I closely tracked performance metrics using Google Analytics and other reporting tools to assess the effectiveness of various campaigns and strategies. I collaborated with the team to iterate on findings and continuously improve our approach. This holistic strategy, combining operational oversight, advertising, SEO, and customer engagement, played a crucial role in driving the success of the online store and achieving key business objectives.
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