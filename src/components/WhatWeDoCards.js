import React from 'react';
import useScrollHook from '../CustomHooks/useScrollHook.js';
//import animalRescue from '../images/animal-rescue.jpg';
// import cutePuppy from '../images/cute-puupy.jpg';
// import savePets from '../images/save-pets.jpg';
import imageSkill from '../images/image-skill.jpg';
import NSDCLogo from '../images/NSDC-Logo.png';
import slFinal from '../images/sl-final.jpg';

const imagesArray = [
  {
    imageSrc: imageSkill,
    headerText: 'Skill Development Training',
    textContent: 'We, at Praman Techno Foundation offer various skill development courses under schemes of Central Government and State Government. We cover IT-ITES,Apparel, Furniture and fittings, electronics, health and various sector skills. It helps Trainees to get Jobs and consultation in their own job role. If India wants to become a manufacturing-hub, given its requirement for employment generation to reap the demographic advantage; it must focus on skill development along with present education system. Since, India’s education system has been skewed in favour of formal education focusing on academics; it has done well in services/tertiary sector. As this sector is the most important recipient of formally educated work-force. Manufacturing processes, on the other hand, does not require academic skills to that extent, for majority of work-force. As a result, the people employed in this sector are either uneducated or unskilled as low-end firms can’t afford college graduates; or they are over-educated and yet unskilled at the task required, in case of firms that can pay.'
  },
  {
    imageSrc: NSDCLogo,
    headerText: 'Insource and Consulting',
    textContent: 'We also use to associate with other Renown Organizations to execute their livelihood, skill and various types of projects. We believe in providing employment in core service sectors through sector skill council’s qualification packs and other placement oriented training. We , Praman Techno Foundation Consults well known organizations for best quality outreach in society.',
  },
  {
    imageSrc: slFinal,
    headerText: 'Placements and Jobs',
    textContent: 'As providing jobs and Opportunities of business is a part of social service and professionalism, we consult under graduates, post graduates and intermediate pass out students for their career and direction towards their skills. Our main motive is to fill the skill Gap in youth, so that they can attain their profession or get self-employment in a precise manner.'
  }
]

const WhatWeDoCards = () => {

  const [ref, inView] = useScrollHook({ threshold: 0, triggerOnce: false });

  // const handleReadMore = (id) => {
  //   const element = document.getElementById(id);
  //   const buttonElem = document.getElementById(`${id}-button`)
  //   if (element.classList.contains('read-more-text')) {
  //     buttonElem.innerText = 'Read More';
  //     element.classList.remove('read-more-text');
  //   }
  //   else {
  //     element.classList.add('read-more-text');
  //     buttonElem.innerText = 'See Less';
  //   }
  //   console.log(element);
  // }

  return (
    <div ref={ref} className="what-we-do-container" >
      <section className="welcome-header-text">
        <h1>What We Do</h1>
      </section>
      <section className="big-cards-container">
        {imagesArray.map((item, index) => {
          return (
            <div key={index} style={inView ? { transitionDelay: `${0.2 * (index + 1)}s` } : {}} className={`what-we-do-card ${inView ? 'appear' : ''}`}>
              <div className="cards" style={{ overflow: 'hidden' }}>
                <div className="image-container">
                  <img src={item.imageSrc} alt="Could not display"></img>
                  <div className="hover-content">
                    <p id={index} class="what-we-do-text">{item.textContent}</p>
                  </div>
                </div>
                <h3 style={{ padding: '0.8em 1em 0.8em', fontWeight: 'normal' }}>{item.headerText}</h3>
              </div>
              {/* <div className="read-more" onClick={() => handleReadMore(index)}>
                <i class="fas fa-arrow-circle-right"></i>&nbsp;
                <span id={`${index}-button`}>Read More</span>
              </div> */}
            </div>
          )
        })}
      </section>
    </div>
  );
}

export default WhatWeDoCards;