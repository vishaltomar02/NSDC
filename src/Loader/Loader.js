import React from 'react';
import LoaderIcon from './LoaderIcon';

const Loader = () => {

  return (
    <div className="loader-container">
      <div className="loader">
        <LoaderIcon/>
      </div>
    </div>
  );
}

export default Loader;