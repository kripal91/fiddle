// Opportunity.js

import React from 'react';
import './Opportunity.css';

const Opportunity = () => {
  return (
    <div className='opportunities'>
      <div className="overlap-20">
          <div className="text-wrapper-18">Opportunities</div>
          <div className="text-wrapper-19">Just grab it!</div>
          <div className="rectangle-13" />
        </div>
        <div className="group-6">
          <div className="frame-2">
            <div className="text-wrapper-20">Competitons</div>
          </div>
          <img
            className="rectangle-14"
            alt="Rectangle"
            src="https://cdn.animaapp.com/projects/65d0faa38c0445adb27a86fa/releases/65d0fb6036a9e1840e06fda8/img/rectangle-35@2x.png"
          />
        </div>
        <div className="group-7">
        <div className="frame-2">
          <div className="text-wrapper-20">Gigs &amp; Work</div>
        </div>
        <img
          className="rectangle-14"
          alt="Rectangle"
          src="https://cdn.animaapp.com/projects/65d0faa38c0445adb27a86fa/releases/65d0fb6036a9e1840e06fda8/img/rectangle-35-1@2x.png"
        />
      </div>
      <div className="group-8">
        <div className="frame-2">
          <div className="text-wrapper-20">Fests &amp; Shows</div>
        </div>
        <img
          className="rectangle-15"
          alt="Rectangle"
          src="https://cdn.animaapp.com/projects/65d0faa38c0445adb27a86fa/releases/65d0fb6036a9e1840e06fda8/img/rectangle-35-2@2x.png"
        />
      </div>
      <div className="group-9">
      <div className="frame-2">
        <div className="text-wrapper-20">Workshops</div>
      </div>
      <img
        className="rectangle-16"
        alt="Rectangle"
        src="https://cdn.animaapp.com/projects/65d0faa38c0445adb27a86fa/releases/65d0fb6036a9e1840e06fda8/img/rectangle-35-3@2x.png"
      />
    </div>
    </div>
  );
};

export default Opportunity;
