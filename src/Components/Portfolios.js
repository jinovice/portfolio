import React, {useEffect} from 'react';
import './Portfolios.scss';

// function Portfolios({pfs, activePf, updateActivePf}) {
function Portfolios({pfs, setActivePf}) {

  const handleMouseOver = (event) => {
  };

  return (

    <section id="portfolios">
      {console.log('Portfolios Rendered')}

      <div className="sectionHeader">
        <h2>Portfolios</h2>
        <p>Showcasing my creativity and expertise in design</p>
      </div>

      <div className="portfoliosGrid">
        {pfs.filter(pf => pf.display).map(pf => (

          // <Portfolio key={pf.id} pf={pf} activePf={activePf} setActivePf={setActivePf}/>
          <div key={pf.id} className={`portfolio scroll-element eff-scroll fade-in ${'p'+pf.id} ${pf.size.join(' ')} ${pf.classes.join(' ')}`}/* style={{gridArea: pf.code}}*/>
            {/*<div className="portfolioContentContainer">*/}

              <div className="thumbnail">
              {/*<div className="thumbnail" style={{backgroundImage: `url(./images/portfolios/${pf.src})`}}>*/}
                <img src={`./images/portfolios/${pf.src}`} alt={`${pf.title} Logo`} />
              </div>

              <div className="content">
                <div className="subtitle">{pf.subtitle}</div>
                <h3 className="title">{pf.title}</h3>
                <div className="comment">{pf.comment}</div>
              </div>

              {pf.url !== "/" &&
                <>
                  <button className="button" onClick={()=>setActivePf(pf.id)} style={{backgroundColor: pf.color}}>
                    <div className="more">

                      <h4 className="tagsTitle">Roles</h4>
                      <ul className="tags roles dark">
                        {pf.roles.map((role, index) => (<li key={index}>{role}</li>))}
                      </ul>
                      <h4 className="tagsTitle">Skills</h4>
                      <ul className="tags skills">
                        {pf.skills.map((skill, index) => (<li key={index}>{skill}</li>))}
                      </ul>

                    </div>

                    {/*<img src="/images/icons/arrowRight.svg" className="icon" alt="" />*/}
                  </button>

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
          </div>

          ))}
      </div>

    </section>);
}

export default React.memo(Portfolios);
