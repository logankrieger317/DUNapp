import { useState } from 'react';

export default function Nav() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className='nav-bar'>
      <div className="logo"><img id="logo" src='src/assets/images/Logo.jpeg'></img></div>
      <div className={`menu ${showMenu ? 'show' : ''}`}>
        <a href="#"><p id='navP'>These Are Placeholders that we will put routes into</p> </a>
        <a href="#">These Are Placeholders that we will put routes into</a>
        <a href="#">These Are Placeholders that we will put routes into</a>
      </div>
      <div className="hamburger" onClick={() => setShowMenu(!showMenu)}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
    </nav>
  );
}