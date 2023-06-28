import React, { useTransition, useEffect, useRef, useState } from "react";
// import Hyundai from "../Portfolios/Hyundai";
import './Dialog.scss';

function Dialog({pfs, activePf, setActivePf, screenWH, isTouchDevice}) {
  const popupRef = useRef(null);
  const popupCloseRef = useRef(null);
  const body = document.querySelector("body");
  let popup;

  let pf={};
  if (activePf !== null) {
    pf = pfs.find(item => item.id === activePf);
  }

  const openPopup = () => {
    setTimeout(() => {
      // popupEff.style.transform = `translate(-50%, -50%)`;
      popup.classList.add('active');
      !isTouchDevice && body.classList.add('popuped');
    }, 0);
    setTimeout(() => {
      // popupCloseRef.current.focus();
      // popupRef.current.focus();
    }, 300);
  }

  const closePopup = () => {
    setActivePf(undefined);
    // console.log(popup.classList);
    popup.classList.remove('active');
    setTimeout(() => {
      body.classList.remove('popuped');
    }, 500);
  }

  useEffect(() => {
    popup = popupRef.current;
  });

  const [Portfolio, setPortfolio] = useState(null);

  useEffect(() => {
    // console.log("Updated activePF : " + activePf);

    if (popup) { //open
      // console.log(activePf);

      if (activePf !== undefined) {
        pf = pfs.find(item => item.id === activePf);
        openPopup();
        const importComponent = async () => {
          setPortfolio(null);

          // console.log(pf.code);
          const importedModule = await import(`../Portfolios/${pf.code && pf.code.charAt(0).toUpperCase() + pf.code.slice(1)}`);
          // const importedModule = await import(`../Portfolios/Hyundai`);
          const ImportedComponent = importedModule.default;

          setPortfolio(()=>ImportedComponent);
        };

        importComponent();
      } else {
      }
    }
    return () => {
      setPortfolio(null);
    };

  }, [activePf]);

  useEffect(() => {
  }, [activePf]);

  return (
    <div className="popup" ref={popupRef}>
      <div className="dimmed" onClick={closePopup} />
      <div className="popup-content">
        <>
          {pf && (
            <div className={`portfolioDetail ${pf.classes.join(' ')}`}>
              <div className="portfolioDetailHeader">
                <section className="info">
                  <h1>{pf.title}</h1>
                  <div className="subtitle">{pf.subtitle}</div>
                </section>
                <section className="roles">
                  {/*<ul className="tags roles dark">*/}
                  {/*  {pf.roles.map((role, index) => (<li key={index}>{role}</li>))}*/}
                  {/*</ul>*/}
                  {/*<ul className="tags skills">*/}
                  {/*  {pf.skills.map((role, index) => (<li key={index}>{role}</li>))}*/}
                  {/*</ul>*/}
                </section>
                <ul className="tags skills">
                  {pf.skills.map((skill, index) => (<li key={index}><strong className={`badges ${skill}`}>{skill}</strong></li>))}
                </ul>
              </div>

              {!Portfolio ? <p>Loading......</p> : <Portfolio pf={pf} />}

            </div>
          )};
        </>
        <button className="close" onClick={closePopup} ref={popupCloseRef}><span className="icon x">CLOSE</span></button>
      </div>
    </div>
  )
}

export default Dialog;