// import React, {useEffect, useRef, useState } from "react";
import './PortfolioDetail.scss';
import React from "react";

function Stt({pf}) {

  return (
    <>
      {pf && (
        <div className="portfolioContent gridContainer c2">

          <div className="gridCell img background c21">
            <img src={`/images/portfolios/${pf.code}/${pf.code}1.jpg`} alt=""/>
          </div>
          <div className="gridCell txt c21 dark">
            <p>
              SAMIL TECHNOLOGY THAILAND, represented by the initials "STT," has embarked on a remarkable branding journey, where the essence of samil, technology, and Thailand harmoniously converge into a single logo, exuding a profound artistic symbolism.
            </p>
          </div>

          <div className="gridCell img background">
            <img src={`/images/portfolios/${pf.code}/${pf.code}2.jpg`} alt=""/>
          </div>
          <div className="gridCell img background">
            <img src={`/images/portfolios/${pf.code}/${pf.code}3.jpg`} alt=""/>
          </div>
          <div className="gridCell txt c21">
            <p>
              In this visionary branding endeavor, we have meticulously crafted a logo that encapsulates the spirit of SAMIL TECHNOLOGY THAILAND. Drawing inspiration from the powerful combination of samil, technology, and the vibrant culture of Thailand, the logo encapsulates the very essence of the brand's identity.
            </p>
          </div>

          <div className="gridCell img background c21">
            <img src={`/images/portfolios/${pf.code}/${pf.code}4.jpg`} alt=""/>
          </div>
          <div className="gridCell img background c21">
            <img src={`/images/portfolios/${pf.code}/${pf.code}5.jpg`} alt=""/>
          </div>
          <div className="gridCell txt c21">
            <p>
              The stylized initials "STT" form the centerpiece of the logo, elegantly entwined to create a captivating visual representation. Each letter, meticulously designed, represents the core values of samil, technology, and Thailand, seamlessly interwoven into a harmonious whole. The fluidity of the letterforms embodies the brand's dynamic nature, while the intricate details reflect its commitment to precision and craftsmanship.
            </p>
            {/*<p>*/}
            {/*  The color palette chosen for the logo further accentuates its artistic allure. Rich, vibrant hues inspired by the Thai landscape, culture, and traditions have been carefully selected to evoke a sense of energy, vibrancy, and authenticity. The interplay of bold and subtle tones creates a visual symphony, capturing the brand's multi-faceted nature and its deep connection to the Thai heritage.*/}
            {/*</p>*/}
            <p>
              The logo's composition and design elements have been thoughtfully orchestrated to create a captivating visual narrative. The flowing lines and organic shapes symbolize the brand's continuous evolution, adaptability, and commitment to innovation. Every curve and contour within the logo tells a story, inviting viewers to embark on a journey of discovery and unravel the brand's narrative.
            </p>
            <p>
              This artful logo design serves as a beacon, representing SAMIL TECHNOLOGY THAILAND's unwavering dedication to excellence, creativity, and the vibrant spirit of Thailand. It stands as a testament to the brand's ability to seamlessly fuse tradition and innovation, capturing the hearts and minds of audiences far and wide.
            </p>
          </div>
          <div className="gridCell img background c21">
            <img src={`/images/portfolios/${pf.code}/${pf.code}6.jpg`} alt=""/>
          </div>
          <div className="gridCell txt c21">
            <p>
              In conclusion, the SAMIL TECHNOLOGY THAILAND logo, born from the graceful fusion of samil, technology, and Thailand, emerges as a breathtaking symbol of artistry, sophistication, and cultural synergy. It embodies the brand's identity and aspirations, making a lasting impression on all who encounter it, and cementing its place as a visionary force in the industry.
            </p>
          </div>
          <div className="gridCell img background c21">
            <img src={`/images/portfolios/${pf.code}/${pf.code}7.jpg`} alt=""/>
          </div>
          {/*<div className="gridCell displayTxt c21">*/}
          {/*  <p className="comment">{pf.comment}</p>*/}
          {/*</div>*/}

        </div>
      )};
    </>
  )
}

export default Stt;