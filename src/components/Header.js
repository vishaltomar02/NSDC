import React from 'react';


// const socialIcons = [
//   { name: 'facebook-f', iconColor: 'rgb(66,103,178)' },
//   { name: 'twitter', iconColor: 'rgb(29,161,242)' },
//   { name: 'google-plus-g', iconColor: 'rgb(211, 72, 54)' },
//   { name: 'linkedin-in', iconColor: 'rgb(40,103,178)' }
// ];

const Header = () => {

  return (
    <div className="header">
      <div className="header-inner">
        {/* <div className="header-content">
          <div className="report-email">
            <div>
              <i style={{ marginRight: '5px' }} class="fa fa-envelope" aria-hidden="true"></i>
              report@karmafoundation.ngo
            </div>
          </div>
          <div className="social-icons">
            <ul >
              {
                socialIcons.map((item) => {
                  return (<li key={item.name}>
                    <div className={`social-circle ${item.name}`}>
                      <i style={{ color: `${item.iconColor}`, fontSize: '12px' }} class={`fab fa-${item.name}`} />
                    </div>
                  </li>);
                })
              }
            </ul>
          </div>
          <div className="header-buttons">
            <button className="top-buttons" style={{ marginRight: '5px' }}>Register a Case</button>
            <button className="top-buttons">Sterilize a stray animal</button>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default Header;