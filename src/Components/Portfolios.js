import React from 'react';
import './Portfolios.scss';

// function Portfolios({pfs, activePf, updateActivePf}) {
function Portfolios({pfs, setActivePf}) {

  // const handleMouseOver = (event) => {
  // };

  return (

    <section id="portfolios">

      <div className="sectionHeader">
        <h2>Portfolios</h2>
        <p>Showcasing my creativity and expertise in design</p>
      </div>

      <div className="portfoliosGrid">
        {pfs.filter(pf => pf.display).map(pf => (

          // <Portfolio key={pf.id} pf={pf} activePf={activePf} setActivePf={setActivePf}/>
          <button key={pf.id} name={`View ${pf.title} Details`} onClick={()=>setActivePf(pf.id)} className={`portfolio scroll-element eff-scroll fade-in ${'p'+pf.id} ${pf.size.join(' ')} ${pf.classes.join(' ')}`}/* style={{gridArea: pf.code}}*/>
            {/*<div className="portfolioContentContainer">*/}

              <div className="thumbnail">
              {/*<div className="thumbnail" style={{backgroundImage: `url(./images/portfolios/${pf.src})`}}>*/}
                <img src={`./images/portfolios/${pf.src}`} alt={`${pf.title} Logo`} />
              </div>

              <div className="content">
                <div className="subtitle">{pf.subtitle}</div>
                <h3 className="title">{pf.title}</h3>

                {/*<ul className="tags roles dark">*/}
                {/*  {pf.roles.map((role, index) => (<li key={index}>{role}</li>))}*/}
                {/*</ul>*/}
                <ul className="tags dark">
                  {pf.skills.map((skill, index) => (<li key={index}><strong className={`badges ${skill}`}>{skill}</strong></li>))}
                </ul>

              </div>

              {pf.url !== "/" &&
                <>
                  <div className="button" style={{backgroundColor: pf.color}}>
                    <div className="more">
                      <div className="comment">{pf.comment}</div>
                    </div>

                    {/*<img src="/images/icons/arrowRight.svg" className="icon" alt="" />*/}
                  </div>

                  <strong className="viewDetailTxt">VIWE DETAIL</strong>
                  <svg width="20" height="20" className="viewDetailIcon" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.66675 13H22.3334M22.3334 13L13.0001 3.6665M22.3334 13L13.0001 22.3332" stroke="#000000" strokeWidth="5.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </>
              }

              {/*<div className="eff">*/}
              {/*  <div className="effArticle"></div>*/}
              {/*  <div className="effArticle"></div>*/}
              {/*</div>*/}
            {/*</div>*/}
          </button>

          ))}
      </div>

    </section>);
}

export default React.memo(Portfolios);
