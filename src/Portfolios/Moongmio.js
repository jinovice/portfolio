// import React, {useEffect, useRef, useState } from "react";
import './PortfolioDetail.scss';
import React from "react";

export default function Moongmio({pf}) {

  return (
    <>
      {pf && (
          <div className="portfolioContent gridContainer c2">

            {/*<ul className="tags skills">*/}
            {/*  <li><strong className="badges Instagram">Instagram</strong></li>*/}
            {/*</ul>*/}

            <div className="gridCell img background c21">
              <img src={`/images/portfolios/${pf.code}/${pf.code}1.jpg`} alt=""/>
            </div>

            <div className="gridCell txt c21">
              <p>
                In my portfolio, I showcase my expertise in SNS marketing, demonstrating my ability to effectively promote brands and engage with online audiences. Through strategic planning and execution, I have successfully managed social media campaigns for various clients, driving increased brand awareness and customer engagement.
              </p>
            </div>

            <div className="gridCell imgCenter mobileScreenshot">
              <img src={`/images/portfolios/${pf.code}/${pf.code}M2.jpg`} alt=""/>
            </div>

            <div className="gridCell imgCenter mobileScreenshot">
              <img src={`/images/portfolios/${pf.code}/${pf.code}M1.jpg`} alt=""/>
            </div>

            <div className="gridCell txt c21">
              <p>
                By analyzing target demographics and utilizing platforms such as Instagram and Facebook, I have developed engaging content that resonates with the audience. This includes creating visually appealing graphics, writing compelling captions, and leveraging trending hashtags to maximize reach and engagement.
              </p>
            </div>

            {/*<div className="gridCell txt c21">*/}
            {/*  <p>*/}
            {/*    I have also implemented data-driven strategies, closely monitoring analytics and metrics to optimize campaign performance. Through A/B testing and audience segmentation, I continuously refine and improve marketing strategies to ensure maximum impact and return on investment.*/}
            {/*  </p>*/}
            {/*</div>*/}

            <div className="gridCell imgCenter mobileScreenshot img3 c21">
              <img src={`/images/portfolios/${pf.code}/${pf.code}T1.jpg`} alt=""/>
              <img src={`/images/portfolios/${pf.code}/${pf.code}T2.jpg`} alt=""/>
              <img src={`/images/portfolios/${pf.code}/${pf.code}T3.jpg`} alt=""/>
            </div>

            <div className="gridCell txt c21">
              <h2>Character Design and Cartoon Serialization</h2>
              <p>
                I am currently serializing diverse stories based on my experiences in Australia through characters and cartoons on Instagram for Korean readers. As a part of my portfolio, I have been involved in character design, creating appealing and unique characters that effectively convey various narratives. Through cartoon serialization, I aim to bring joy and entertainment to my audience while sharing engaging stories.
              </p>
            </div>

            <div className="gridCell imgCenter mobileScreenshot img3 c21">
              <img src={`/images/portfolios/${pf.code}/${pf.code}T4.jpg`} alt=""/>
              <img src={`/images/portfolios/${pf.code}/${pf.code}T5.jpg`} alt=""/>
              <img src={`/images/portfolios/${pf.code}/${pf.code}T6.jpg`} alt=""/>
            </div>

            <div className="gridCell txt c21">
              <h2>Drawing and Product Design</h2>
              <p>
                In addition to character design and cartoon serialization, I have also been involved in drawing and product design. Utilizing tools such as Photoshop and Illustrator, I create visually captivating illustrations and designs. I have collaborated with English education company SPEAK and character merchandise production company Supigen Korea for advertising campaigns, leveraging my skills to develop promotional materials. By engaging with my followers, I ensure effective communication and continuously promote my Instagram account to reach a wider audience.
              </p>
            </div>

            <div className="gridCell imgCenter mobileScreenshot img3 c21">
              <img src={`/images/portfolios/${pf.code}/${pf.code}P1.jpg`} alt=""/>
              <img src={`/images/portfolios/${pf.code}/${pf.code}P2.jpg`} alt=""/>
              <img src={`/images/portfolios/${pf.code}/${pf.code}P3.jpg`} alt=""/>
            </div>

            <div className="gridCell txt c21">
              <p>
                Through designing and successfully growing my personal SNS account, I gained valuable experience in marketing and promotion. This experience deepened my understanding of how digital applications and services engage and interact with customers. It has been an insightful journey that can be showcased in my portfolio, highlighting my ability to connect with audiences and navigate the digital landscape effectively.              </p>
            </div>

          </div>
      )}
    </>
  )
}