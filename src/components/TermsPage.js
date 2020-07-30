import React, { useState, useEffect } from 'react';
import CommonStrip from './CommonStrip';
import Loader from '../Loader/Loader';

const TermsPage = (props) => {

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
          <div>
            <CommonStrip title="Privacy policy" {...props} />
            <div className="about-content-container">
              <section className="content">
                <section className="about-page-header">
                  <h1>Terms And Conditions</h1>
                </section>
                <br></br>
                {/* <h4></h4> */}
                <p>
                  We may employ third party companies or individuals, or can act as third party for various reasons like :-
                </p>
                <ul>
                  <li>
                    1.) to facilitate our service
                  </li>
                  <li>
                    2.) to provide the service on our behalf
                  </li>
                  <li>
                    3.)to assist us in analyzing about service usage
                  </li>
                </ul>
              </section>
            </div>
          </div>
      }
    </div>
  );
}

export default TermsPage;