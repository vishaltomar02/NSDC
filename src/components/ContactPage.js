import React, { useEffect, useState } from 'react';
import CommonStrip from './CommonStrip';
import Loader from '../Loader/Loader';

// const socialIcons = [
//   { name: 'facebook-f', iconColor: 'rgb(66,103,178)' },
//   { name: 'twitter', iconColor: 'rgb(29,161,242)' },
//   { name: 'google-plus-g', iconColor: 'rgb(211, 72, 54)' },
//   { name: 'linkedin-in', iconColor: 'rgb(40,103,178)' }
// ];

const ContactPage = () => {

  const [loader, setLoader] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 3000);
  }, []);

  return (
    <div>
      {
        loader ? <Loader /> :
          <div>
            <CommonStrip title="Contact Us" />
            <div className="contact-page-container">
              <div className="footer-items">
                <div className="address-container">
                  <div style={{ marginTop: '10px' }}><i class="fas fa-globe-asia"></i></div>
                  <div className="karma-address contact">
                    <span >Karma Foundation</span>
                    <h6>
                      <span style={{fontWeight: 'bold'}}>Contact: </span>
                      21/4, Krishna Puram,
                      <br></br>
                      Baghpat Road, Meerut, 250002.
                      <br></br>
                      <span style={{fontWeight: 'bold'}}>Phone: </span> 9897941722, 9870966955
                      <br></br>
                      <span style={{fontWeight: 'bold'}}>E-Mail: </span> report @karmafoundation.ngo
                      <br></br>
                    </h6>
                    {/* <div className="social-icons contact">
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
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
      }
    </div>
  );
}

export default ContactPage;