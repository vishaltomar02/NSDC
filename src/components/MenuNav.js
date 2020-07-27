import React, { useState, useEffect } from 'react';
import { NavLink} from 'react-router-dom';
import AppLogo from '../images/app-logo.jpeg';

const navOptions = [
  { name: 'Home', pathname: '/home'},
  { name: 'About Us', pathname: '/about'},
  { name: 'Vision & Mission', pathname: '/vision-n-mission' },
  { name: 'Contact Us', pathname: '/contact' },
  { name: 'Become A Volunteer', pathname: '/become-a-volunteer' }
]

const MenuNav = (props) => {
  const [selectedNav, setSelectedNav] = useState('/home');

  useEffect(() => {
    const { location: {pathname} } = props;
    setSelectedNav(pathname);
  },[props]);

  const activeNavItem = (name) => {
    setSelectedNav(name);
  };

  return (
    <div className="menu-nav">
      <section className="menu-nav-inner">
        <a className="logo-container" href=" ">
          <img style={{ height: '100px', width: '100px' }} src={AppLogo} alt="Karma Foundation" />
        </a>
        <ul className="nav-options-container">
          {navOptions.map((item) => {
            return (
              <li key={item.name} className={`nav-option ${item.pathname === selectedNav ? 'active' : ''}`} onClick={() => activeNavItem(item.name)}>
                {//eslint-disable-next-line
                  <NavLink to={{pathname: item.pathname}}>{item.name}</NavLink>}
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
  );
}

export default MenuNav;