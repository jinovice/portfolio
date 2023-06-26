import './Header.scss';

function Header({isSticky}) {
  // console.log(isSticky,  isSticky ? 'sticky' : '' );

  if (window.scrollY > 110) {
    // headerRef.current.classList.add('isSticky');
    // console.log(window.scrollY);
  } else {
    // headerRef.current.classList.remove('isSticky');
    // console.log(window.scrollY);
  }

  return (
    <header className={ isSticky ? 'sticky' : '' }>
      <div className="headerContainer">
        <h1>JINYONG CHOI</h1>
        <nav>
          <ul>
            <li><a href="#">(i) Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
