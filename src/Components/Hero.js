import React, { useState, useEffect, useRef } from "react";
import { debounce } from 'lodash';
import './Hero.scss';
// import './heroAnimation';

function Hero() {

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const eventAreaRef = useRef(null);

  useEffect(() => {

    const depth1 = document.querySelectorAll(".depth1");
    const depth2 = document.querySelectorAll(".depth2");
    const depth3 = document.querySelectorAll(".depth3");
    const depth4 = document.querySelectorAll(".depth4");
    const depth5 = document.querySelectorAll(".depth5");
    const range = 40;
    const calcValue = (a, b) => (a/b*range-range/2).toFixed(1)
    let timeout;

    const effItems = document.querySelectorAll('.effItem');

    // const handleMouseMove = debounce((event) => {
    const handleMouseMove = (event) => {
      // console.log(mousePosition);
      const { clientX, clientY } = event;
      // console.log(clientX, clientY);

      setMousePosition({ x: clientX, y: clientY });
      // console.log(mousePosition);
      effItems.forEach((item) => {
        item.style.transform= `translate3d(${mousePosition.x / 10}px, ${
          mousePosition.y / 10
        }px, 0)`;
        // console.log(item);
      })
    };
    // }, 300); // 300ms의 디바운스 지연 시간

    // eventAreaRef.current.addEventListener('mousemove', handleMouseMove);

    eventAreaRef.current.addEventListener('mousemove', ({x, y}) => {
      // console.log(x, y);
      if (timeout) {
        window.cancelAnimationFrame(timeout);
      }

      timeout = window.requestAnimationFrame(() => {
        const yValue = calcValue(y, window.innerHeight);
        const xValue = calcValue(x, window.innerWidth);

        [].forEach.call(depth1, (d1) => {
          d1.style.transform = `rotateX(${-xValue*.45}deg) rotateY(${-yValue*.45}deg) translateZ(4px)`;
        });

        [].forEach.call(depth2, (d2) => {
          d2.style.transform = `translateX(${-xValue*.2}px) translateY(${-yValue*.2}px) translateZ(2px)`;
        });

        [].forEach.call(depth3, (d3) => {
          d3.style.transform = `translateX(${-xValue}px) translateY(${-yValue}px) translateZ(0)`;
        });

        [].forEach.call(depth4, (d4) => {
          d4.style.transform = `translateX(${-xValue*1.25}px) translateY(${-yValue*1.05}px) translateZ(-2px)`;
        });

        [].forEach.call(depth5, (d5) => {
          d5.style.transform = `translateX(${xValue*1.15}px) translateY(${-yValue*1.45}px) translateZ(-4px)`;
        });

      })
    }, false);


    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [mousePosition]);

  return (
      <section id="hero" className="fullScreen" ref={eventAreaRef}>
        {console.log('hero Rendered')}

        <div className="sectionContent fullScreenCenter">

          <div className="heroAnimation">
            <div className="itsMe depth1">
              <div className="myFace depth3">
                <div className="ex depth2"><img src="images/hero/ex.svg" alt=""/></div>
                <div className="face"><img src="images/hero/head.svg" alt=""/></div>
              </div>
              <div className="myBody depth3">
                <div className="eff depth2"><img src="images/hero/eff.svg" alt=""/></div>
                <div className="back depth1"><img src="images/hero/body.svg" alt=""/></div>
              </div>
              <div className="myBg depth5">
                <div className="bg1 depth1"><img src="images/hero/bg1.svg" alt=""/></div>
                <div className="bg2 depth3"><img src="images/hero/bg2.svg" alt=""/></div>
                <div className="bg3 depth2"><img src="images/hero/bg3.svg" alt=""/></div>
                {/*<div className="bg4 depth5"><img src="images/hero/bg4.svg" alt=""/></div>*/}
              </div>
            </div>
            {/*<div className="heroBg"></div>*/}
          </div>

          <div className="intro font-bold">
            <h1 className="line-1 anim-typewriter">Hi, I am Jinyong Choi.</h1>
            {/*<h1 className="line-1 anim-typewriter">HI, i AM JINYONG CHOI.</h1>*/}
            <p>
              A highly skilled UI/UX designer<br />with 10 years of experience.
              With over 10 years of experience in various IT industries, I have worked as a UI/UX designer for 2 years, a graphic designer for 4 years, and a web publisher for 4 years. As a detail-oriented professional, I have specialized in HTML, CSS, and JavaScript, and I am an expert in WCAG compliance. I take great pride in crafting effective and efficient code, and I have extensive experience collaborating with government and major corporate clients. I prioritize adherence to standards, security, and meeting stakeholders' requirements.
            </p>
            <ul className="tags">
              <li>UI/UX DESIGN</li>
              <li>FRONT-END DEVELOPMENT</li>
              <li>GRAPHIC DESIGN</li>
              <li>RESPONSIBLE DESIGN</li>
              <li>ACCESIBILITY</li>
            </ul>
          </div>
          {/*<script src="../src/index.js"></script>*/}

          {/*{console.log('rendered')}*/}

        </div>
      </section>

  );
}

export default React.memo(Hero);
