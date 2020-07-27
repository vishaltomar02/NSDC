import React from 'react';
// import kfcImage from '../images/kfc.png';
// import mcdImage from '../images/mcd.png';
//import flyEmiratesImage from '../images/fly-emirates.jpg';
// import rakutenImage from '../images/rakuten.png';
// import jeepImage from '../images/download.png';
import NSDCLogo from '../images/NSDC-Logo.png';
import slFinal from '../images/sl-final.jpg';
import useScrollHook from '../CustomHooks/useScrollHook';
import imageSkill from '../images/image-skill.jpg';

const sponsorsCards = [
  { sponsorName: 'NSDC', imageSrc: NSDCLogo },
  { sponsorName: 'Skills', imageSrc: imageSkill },
  { sponsorName: 'SL_FInal', imageSrc: slFinal }
]

const Sponsors = () => {

  const [setRef, inView] = useScrollHook({ threshold: 0, triggerOnce: true });

  return (
    <div className="welcome-content-container">
      <div ref={setRef} className={`welcome-header-text ${inView ? 'fade-up' : ''}`}>
        <h1>Sponsors and Partners</h1>
      </div>
      <div className="sponsors-cards-container">
        {
          sponsorsCards.map((item, index) => {
            return (
              <div className="sponsor-card">
                <img src={item.imageSrc} style={{ height: '150px', width: '150px', borderRadius: '50%' }} alt="could not display"></img>
                <h2 style={{marginTop: '20px'}}>{item.sponsorName}</h2>
                <a href='www.google.com' >Website</a>
              </div>
            );
          })
        }
      </div>
    </div>
  );
}

export default Sponsors;