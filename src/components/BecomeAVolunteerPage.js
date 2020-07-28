import React, { useEffect, useState } from 'react';
import Loader from '../Loader/Loader';

const BecomeAVolunteerPage = () => {

  const [loader, setLoader] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 500);
  }, []);

  return (
    <div>
      {
        loader ? <Loader /> :
          <div className="volunteer-form-container">
            <div className="volunteer-inner">
              <div className="volunteer-label">Become A Volunteer</div>
              <div className="volunteer-input">
                <label htmlFor="full-name">
                  <i class="far fa-user"/>
                </label>
                <input
                  type="text"
                  placeholder="Full Name"
                  className="input-control"
                  autoFocus
                  name="FullName"
                  id="full-name"/>
              </div>
              <div className="volunteer-input">
                <label htmlFor="email">
                  <i class="far fa-envelope"/>
                </label>
                <input
                  type="text"
                  placeholder="Email"
                  className="input-control"
                  name="Email"
                  id="email"/>
              </div>
              <div className="volunteer-input">
                <label htmlFor="mobile-no">
                  <i class="fas fa-mobile-alt"/>
                </label>
                <input
                  type="text"
                  placeholder="Mobile Number"
                  className="input-control"
                  name="MobileNumber"
                  id="mobile-no"/>
              </div>
              <div className="volunteer-input">
                <label htmlFor="address">
                  <i class="fas fa-map-marked-alt"/>
                </label>
                <textarea
                  type="text"
                  placeholder="Permanent Address"
                  className="input-control"
                  name="Address"
                  id="address"
                  maxLength="200"/>
              </div>
              <div className="volunteer-input">
                <label htmlFor="age">
                  <i class="far fa-id-badge"/>
                </label>
                <input
                  type="number"
                  placeholder="Age"
                  className="input-control"
                  name="Age"
                  id="age"
                  maxLength="3"/>
              </div>
              <div className="welcome-button">
                <button type="submit" >Submit</button>
              </div>
            </div>
          </div>
      }
    </div>
  );
}

export default BecomeAVolunteerPage;