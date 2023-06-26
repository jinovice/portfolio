// import React, {useEffect, useRef, useState } from "react";
import './PortfolioDetail.scss';
import React from "react";

export default function Giordano({pf}) {

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
              During the project, I was involved in the UI/UX design for the admin pages of two brand e-commerce websites: Giordano, BSX, and Concepts One. The objective was to create a user-friendly and intuitive interface that effectively catered to the needs of administrators managing various aspects of the online stores. Here's a step-by-step overview of the process:
            </p>
          </div>

          <div className="gridCell img background c21">
            <img src={`/images/portfolios/${pf.code}/${pf.code}1.jpg`} alt=""/>
          </div>

          <div className="gridCell txt c21">
            <h2>Research and Analysis</h2>
            <ul>
              <li>
                Conducted thorough research on the target audience, including administrators and store managers.
              </li>
              <li>
                Analyzed the existing admin interfaces to identify pain points and areas for improvement.
              </li>
              <li>
                Studied industry best practices and emerging trends in e-commerce admin UI/UX.
              </li>
            </ul>
          </div>

          <div className="gridCell img background c21">
            <img src={`/images/portfolios/${pf.code}/${pf.code}2.jpg`} alt=""/>
          </div>

          <div className="gridCell txt c21">
            <h2>Wireframing and Prototyping</h2>
            <ul>
              <li>
                Created low-fidelity wireframes to establish the layout, hierarchy, and flow of the admin pages.
              </li>
              <li>
                Collaborated closely with the development team to ensure technical feasibility.
              </li>
              <li>
                Iteratively refined the wireframes based on feedback and usability testing.
              </li>
              <li>
                Developed interactive prototypes using design tools to demonstrate functionality and user interactions.
              </li>
            </ul>
          </div>

          <div className="gridCell txt c21">
            <h2>Order Management</h2>
            <ul>
              <li>
                Developed an intuitive interface for managing orders, including order details, status updates, and customer information.
              </li>
              <li>
                Implemented features for searching, filtering, and sorting orders based on various criteria.
              </li>
              <li>
                Incorporated bulk actions for efficient order processing, such as batch updates and order exports.
              </li>
            </ul>
          </div>

          <div className="gridCell img background c21">
            <img src={`/images/portfolios/${pf.code}/${pf.code}3.jpg`} alt=""/>
          </div>

          <div className="gridCell txt c21">
            <h2>Inventory Management</h2>
            <ul>
              <li>
                Designed a comprehensive inventory management system to track product stock levels, variations, and availability.
              </li>
              <li>
                Created intuitive interfaces for adding new products, updating inventory quantities, and managing product attributes.
              </li>
              <li>
                Implemented inventory alerts and notifications to prevent stockouts and facilitate timely replenishment.
              </li>
            </ul>
          </div>

          <div className="gridCell img background c21">
            <img src={`/images/portfolios/${pf.code}/${pf.code}4.png`} alt=""/>
          </div>

          <div className="gridCell txt c21">
            <h2>Shipping Management</h2>
            <ul>
              <li>
                Developed features for managing shipping methods, carriers, and shipping rates.
              </li>
              <li>
                Designed an interface for generating shipping labels, tracking shipments, and handling returns or exchanges.
              </li>
              <li>
                Integrated with third-party shipping APIs to provide real-time shipping information to administrators.
              </li>
            </ul>
          </div>

        </div>
      )}
    </>
  )
}