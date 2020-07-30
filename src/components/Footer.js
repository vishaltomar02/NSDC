import React from 'react';
import * as utils from '../HelperFiles/Utils.js';

const usefulLinks = [
  {name: 'Become a Volunteer', id: 'become-a-volunteer'},
  'Join With Us',
  {name: 'Privacy Policy', id: 'privacy-policy'},
  {name: 'Terms & Conditions', id: 'terms'},
  'Refund Poilcy'
];

const Footer = (props) => {

  const { history } = props;

  const handleScroll = (id) => {
    if(id==='what-we-do') utils.scrollToElement('what-we-do', 1000);
    else history.push({pathname: id});
  }

  return (
    <div className="footer-container">
      <div className="footer-items">
        <h2>Donate</h2>
        <p>
          We depend only on your donations to rescue, feed, provide necessary veterinary care, maintain the shelter, and fight for the animals.
        </p>
      </div>
      <div className="footer-items">
        <h2>Useful Links</h2>
        <div>
          <a href="#what-we-do">What We Do</a>
          {
            usefulLinks.map(
              (item, index) => {
                return (<a key={index} onClick={() => handleScroll(item.id)} alt="">{item.name}</a>);
              }
            )
          }
        </div>
      </div>
      {/* <div className="footer-items" style={{fontSize: '16px'}}>
        <h2>Recent Posts</h2>
        <a style={{marginBottom: '30px'}} href="google.com">We are Hiring</a>
        <a style={{marginBottom: '30px', textTransform: 'uppercase'}} href="google.com">ADMIT SPECIALLY ABLED CATS  AT YODHA</a>
        <a href="google.com">Celebrate this valentine's day with our karma animals.</a>
      </div> */}
      <div className="footer-items">
        <h2>Get In Touch</h2>
        <div className="address-container">
          <div><i class="fas fa-globe-asia"></i></div>
          <div className="karma-address">
            <span >Karma Foundation</span>
            <p style={{textTransform:'none',fontSize: '13px'}}>
              Address: 21/4, Krishna Puram, Baghpat Road, Meerut, 250002.
            </p>
            <p style={{textTransform:'none',fontSize: '13px'}}>
              Phone: 9897941722, 9870966955
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;