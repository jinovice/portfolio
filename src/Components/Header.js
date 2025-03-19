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
        <h1><a href="/"><img src={process.env.PUBLIC_URL + '/images/jinovice.svg'} alt="" /> JINO </a><span>IT Manager</span></h1>
        <nav>
          <ul>
            <li><a href={process.env.PUBLIC_URL + '/data/JinyongChoi_resume.pdf'} className="resume" target="_blank" rel="noreferrer">RESUME</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;