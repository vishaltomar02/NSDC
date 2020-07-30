import React, { useState, useEffect } from 'react';
import { NavLink} from 'react-router-dom';
import AppLogo from '../images/praman-logo.jpeg';

const navOptions = [
  { name: 'Home', pathname: '/home'},
  { name: 'About Us', pathname: '/about'},
  { name: 'Vision & Mission', pathname: '/vision-n-mission' },
  { name: 'Contact Us', pathname: '/contact' },
  { name: 'Become A Volunteer', pathname: '/become-a-volunteer' }
]

const MenuNav = (props) => {
  const [selectedNav, setSelectedNav] = useState('Home');
  const [navSlide, setNavSlide] = useState(false);

  useEffect(() => {
    const { location: {pathname} } = props;
    const selectedItem = navOptions.find((item) => item.pathname === pathname);
    setSelectedNav(selectedItem && selectedItem.name);
  },[props]);

  const activeNavItem = (name) => {
    setSelectedNav(name);
    if(navSlide) {
      setNavSlide(false);
      document.getElementById("hamburg").classList.remove('open');
    }
    else if(name === selectedNav) return null;
  };

  const handleHamburger = () => {
    const elem = document.getElementById("hamburg");
    const appElement = document.getElementById("app");
    setNavSlide(!navSlide);
    if(elem.className.includes('open')) {
      appElement.classList.remove('fixed-height');
      elem.classList.remove('open');
    }
    else {
      appElement.classList.add('fixed-height');
      elem.classList.add('open');
    }
  }

  return (
    <div>
    <div className="menu-nav">
      <section className="menu-nav-inner">
        <a className="logo-container" href=" ">
          <img style={{ height: '100px', width: '100px' }} src={AppLogo} onClick={() => props.history.push({pathname: '/home'})} alt="Karma Foundation" />
        </a>
        <ul className={ `nav-options-container ${navSlide ? 'slide-in' : ''}`}>
          {navOptions.map((item) => {
            return (
              <li key={item.name}
                className={`nav-option ${item.name === selectedNav ? 'active' : ''}`}
                onClick={() => activeNavItem(item.name)}>
                {//eslint-disable-next-line
                  <NavLink 
                  className={`${navSlide ? 'open' : ''}`}
                  //style={navSlide ? {animationDelay: `${0.2*(index+1)}s`}:{}}
                  to={{pathname: item.pathname}}>{item.name}</NavLink>}
              </li>
            );
          })}
        </ul>
        {/* <div className="nav-buttons">
          <button className="shadow-buttons" style={{ marginRight: '10px' }}>Donate Now</button>
          <button className="shadow-buttons">Login</button>
        </div> */}
      </section>
    </div>
    <span id="hamburg" className="hamburger-menu" onClick={() => handleHamburger()}>
    <div>
      <div className="bar"></div>
    </div>
  </span>
  </div>
  );
}

export default MenuNav;