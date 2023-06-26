import '../Portfolios/PortfolioDetail.scss';

function Portfolio({pf, activePf, setActivePf}) {
  const { id, title, subtitle, roles, skills, comment, src, url } = pf;
  // console.log(pf);
  // console.log(id);

  const onClick = (id) => {
    id === activePf ? setActivePf('') : setActivePf(id);
    console.log(activePf + ":" + id);
  }

  return (

    <div className={`portfolio ${'p'+id}/* ${'p' + id === activePf ? 'active' : ''}*/`}>
      <div className="portfolioContent">

        <div className="thumbnail">
          <div className="screenshot">
            <img src={`./images/portfolios/${src}`} alt=""/>
          </div>
        </div>

        <div className="content">
          <div className="subtitle">{subtitle}</div>
          <div className="title">{title}</div>
          <ul className="tags roles dark">
            {roles.map((role, index) => (<li key={index}>{role}</li>))}
          </ul>
          <ul className="tags skills">
            {skills.map((skill, index) => (<li key={index}>{skill}</li>))}
          </ul>
          <div className="description">{comment}</div>
          {
            url !== "/" &&
            <div className="buttons">
              <button className="viewDetails" onClick={() => onClick(pf.id)}>View Details</button>
            </div>
          }
        </div>

      </div>
    </div>
  );
}

export default Portfolio;
