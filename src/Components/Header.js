import './Header.scss';

function Header({isSticky}) {
  // console.log(isSticky,  isSticky ? 'sticky' : '' );

  // if (window.scrollY > 410) {
    // console.log(window.scrollY)
    // headerRef.current.classList.add('isSticky');
    // console.log(window.scrollY);
  // } else {
    // headerRef.current.classList.remove('isSticky');
    // console.log(window.scrollY);
  // }

  return (
    <header className={ isSticky ? 'sticky' : '' }>
      <div className="headerContainer">
        <h1><img src={process.env.PUBLIC_URL + '/images/jinovice.svg'} alt="Jinovice Logo" /> JINOVICE</h1>
        <nav>
          <ul>
            <li><a href={process.env.PUBLIC_URL + '/data/JinyongChoi_resume_202307_redacted.pdf'} className="resume" target="_blank">RESUME</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;