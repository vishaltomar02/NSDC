import React from 'react';

const CommonStrip = ({title}) => {

  return (
    <div className="common-strip">
      <div>
        <h1>{title}</h1>
        <div className="breadcrumb">
          {title}
          <div className="home-button-container">
            <div className="home-button">
              <i class="fas fa-home"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CommonStrip;