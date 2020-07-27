import React from 'react';

const usefulLinks = [
  'What we do',
  'Become a Volunteer',
  'Join With Us',
  'Privacy Policy',
  'Terms & Conditions',
  'Refund Poilcy'
];

const Footer = () => {
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
          {
            usefulLinks.map(
              (item, index) => {
                return (<a key={index} href='google.com' alt="">{item}</a>);
              }
            )
          }
        </div>
      </div>
      <div className="footer-items" style={{fontSize: '16px'}}>
        <h2>Recent Posts</h2>
        <a style={{marginBottom: '30px'}} href="google.com">We are Hiring</a>
        <a style={{marginBottom: '30px', textTransform: 'uppercase'}} href="google.com">ADMIT SPECIALLY ABLED CATS  AT YODHA</a>
        <a href="google.com">Celebrate this valentine's day with our karma animals.</a>
      </div>
      <div className="footer-items">
        <h2>Get In Touch</h2>
        <div className="address-container">
          <div><i class="fas fa-globe-asia"></i></div>
          <div className="karma-address">
            <span >Karma Foundation</span>
            <p style={{textTransform:'none',fontSize: '13px'}}> Bunglow No. 1, jacinta Villa, Opp. Sandalwood Society, Near Ambedkar Chowk,Near Medipoint Hospital, Aundh, Pune-4110007</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;