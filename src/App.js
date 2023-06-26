import React, { useState, useEffect, useRef } from 'react';
// import 'normalize.css';
import './Components/base.scss';
import './App.scss';
// import './components.scss';
import ErrorBoundary from "./Components/ErrorBoundary";
// import LoadingScreen from "./Components/LoadingScreen";
import SkipNav from "./Components/SkipNav";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Portfolios from "./Components/Portfolios";
import Experiences from "./Components/Experiences";
import About from "./Components/About";
import Footer from "./Components/Footer";
import Dialog from "./Components/Dialog";
import Stt from "./Portfolios/Stt";

function App() {
  const [pfs, setPfs] = useState(null);
  const [isSticky, setIsSticky] = useState(false);

  const [activePf, setActivePf] = useState(undefined);
  // const [activePf, setActivePf] = useState(71);
  console.log(activePf);
  const updateActivePf = (id, clientX, clientY) => {
    // console.log(activePf + "  updateActivePf S " + id, clientX, clientY);
    setActivePf(activePf => {
      const updatedActivePf = [...activePf];
      updatedActivePf[0] = id;
      updatedActivePf[1] = clientX;
      updatedActivePf[2] = clientY;
      return updatedActivePf;
    });
  };

  const [screenWH, setScreenWH] = useState([0, 0]);
  const updateScreenWH = (screenX, screenY) => {
    // console.log(activePf + "  updateActivePf S " + id, clientX, clientY);
    setScreenWH(screenWH => {
      const updatedScreenWH = [...screenWH];
      updatedScreenWH[0] = screenX;
      updatedScreenWH[1] = screenY;
      return updatedScreenWH;
    });
  };

  const [isTouchDevice, setIsTouchDevice] = useState(false);
  // console.log(pfs);

  useEffect(() => {
    updateScreenWH(window.innerWidth, window.innerHeight);
    fetch('/data/portfolios.json')
      .then(response => response.json())
      .then(data => {
        setTimeout(() => {
          setPfs(data)
        }, 0);
      })
      .catch(error => console.error(error));

    const mediaQuery = window.matchMedia("(hover: none)");
    setIsTouchDevice(mediaQuery.matches);

  }, []);

  useEffect(() => {
    const scrollElements = document.querySelectorAll(".eff-scroll");
    // const scrollEvents = document.querySelectorAll(".scroll-event");
    // console.log(scrollElements);
    const elementInView = (el, dividend = 1) => {
      const elementTop = el.getBoundingClientRect().top;

      return (
        elementTop <=
        (window.innerHeight || document.documentElement.clientHeight) / dividend
      );
    };

    const elementOutofView = (el) => {
      const elementTop = el.getBoundingClientRect().top;

      return (
        elementTop > (window.innerHeight || document.documentElement.clientHeight)
      );
    };

    const displayScrollElement = (element) => {
      element.classList.add("scrolled");
    };

    const hideScrollElement = (element) => {
      // element.classList.remove("scrolled");
    };

    const handleScrollAnimation = () => {
      // console.log((window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop), (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop)>20);
      setIsSticky(()=>(window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop)>160)
      scrollElements.forEach((el) => {
        if (elementInView(el, 1.15)) {
          displayScrollElement(el);
        } else if (elementOutofView(el)) {
          hideScrollElement(el)
        }
      })
    }

    window.addEventListener("scroll", () => {
      handleScrollAnimation();
      // console.log('scrolling');
    });

    // if (scrollEvents.length > 0) {
    //   scrollEvents.forEach((element) => {
    //     console.log(element);
    //     element.addEventListener("scroll", () => {
    //       handleScrollAnimation();
    //       console.log('scrolling');
    //     });
    //   });
    // }

    return () => {
      // scrollEvents.removeEventListener('scroll', handleScrollAnimation);
    };

  });

  if (!pfs) {
    return <div className="loading"><p>Loading...</p></div>;
    // return <LoadingScreen isLoading={!pfs} />;
  }
  return (
    <ErrorBoundary>
      <div className={`${isTouchDevice ? "touch-device" : ""} container`}>
        {/*<LoadingScreen isLoading={!pfs} />*/}
        <div className={`loading ${pfs ? "loaded" : ""}`}><p>Loading...</p></div>
        <SkipNav/>
        <Header isSticky={isSticky} />
        <Hero/>
        <Portfolios pfs={pfs} setActivePf={setActivePf}/>
        <Experiences/>
        <About/>
        <Footer/>
        <Dialog pfs={pfs} activePf={activePf} setActivePf={setActivePf} screenWH={screenWH} isTouchDevice={isTouchDevice} />
      </div>
    </ErrorBoundary>
  );
}

export default App;
