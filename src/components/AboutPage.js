import React, { useState, useEffect } from 'react';
import CommonStrip from './CommonStrip';
import Loader from '../Loader/Loader';

const HomePage = () => {

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
            <CommonStrip title="About Us" />
            <div className="about-content-container">
              <section className="content">
                <section className="about-page-header">
                  <h1>Work We Do</h1>
                </section>
                <br></br>
                <h4>Animal rescue</h4>
                <p>There are so many animals day in & day out that are subjected to cruelty, road rage or just medical issues. Karma Foundation works towards helping such animals either on site or by admitting them into our facility.</p>
                <h4>Animal Birth Control(ABC)</h4>
                <p>Karma foundation truly believes that the best way to reduce animal – human conflict & animal – animal conflict is birth control. We conduct ABC surgeries twice a week at our facility & keep the animal for Post Operative care until they are fit to be release back where they were picked up from.</p>
                <h4>Animal Adoption</h4>
                <p>Our team of Adoption volunteers work day in & day out finding good homes for the stray & abandoned animals. Every adoption happens after a strict screening & house visit by our approved volunteers.</p>
              </section>
            </div>
          </div>
      }
    </div>
  );
}

export default HomePage;