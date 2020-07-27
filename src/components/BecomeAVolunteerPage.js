import React, { useEffect, useState } from 'react';
import Loader from '../Loader/Loader';

const BecomeAVolunteerPage = () => {

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
          <div className="volunteer-form-container">
            <div className="volunteer-inner"></div>
          </div>
      }
    </div>
  );
}

export default BecomeAVolunteerPage;