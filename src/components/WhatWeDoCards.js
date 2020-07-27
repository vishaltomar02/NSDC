import React from 'react';
import useScrollHook from '../CustomHooks/useScrollHook.js';
import animalRescue from '../images/animal-rescue.jpg';
import cutePuppy from '../images/cute-puupy.jpg';
import savePets from '../images/save-pets.jpg';


const imagesArray = [
  {
    imageSrc: animalRescue,
    headerText: 'Animal Rescue',
    textContent: 'There are so many animals day in & day out that are subjected to cruelty, road rage and medical concerns. Karma Foundation works towards helping such animals either on site or by admitting them into our facility.'
  },
  {
    imageSrc: cutePuppy,
    headerText: 'Animal Birth Control(ABC)',
    textContent: 'Karma foundation truly believes that the best way to reduce animal – human conflict & animal – animal conflict is birth control. We conduct ABC surgeries twice a week at our facility & keep the animal for Post Operative care until they are fit to be release back where they were picked up from.',
  },
  {
    imageSrc: savePets,
    headerText: 'Animal Adoption',
    textContent: 'Our team of Adoption volunteers work day in & day out finding good homes for the stray & abandoned animals. Every adoption happens after a strict screening & house visit by our approved volunteers.'
  }
]

const WhatWeDoCards = () => {

  const [ref, inView] = useScrollHook({ threshold: 0, triggerOnce: false });

  return (
    <div ref={ref} className="what-we-do-container" >
      <section className="welcome-header-text">
        <h1>What We Do</h1>
      </section>
      <section className="big-cards-container">
        {imagesArray.map((item, index) => {
          return (
            <div key={index} style={inView ? { transitionDelay: `${0.2 * (index + 1)}s` } : {}} className={`what-we-do-card ${inView ? 'appear' : ''}`}>
              <div className="cards" style={{overflow: 'hidden'}}>
                <div className="image-container">
                  <img src={item.imageSrc} alt="Could not display"></img>
                  <div className="hover-content">
                    <i class="fa fa-link"></i>
                  </div>
                </div>
                <h3 style={{ padding: '0.8em 1em 0.8em', fontWeight: 'normal' }}>{item.headerText}</h3>
                <p style={{ padding: '0 1em 1em' }}>{item.textContent}</p>
              </div>
              <div className="read-more"><i class="fas fa-arrow-circle-right"></i>&nbsp;Read More</div>
            </div>
          )
        })}
      </section>
    </div>
  );
}

export default WhatWeDoCards;