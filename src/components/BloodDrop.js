import React, { useEffect, useState } from 'react';

const BloodDrop = ({ className, style }) => {
  const [isDropping, setIsDropping] = useState(false);

  useEffect(() => {
    const startDropping = () => {
      setIsDropping(true);
      setTimeout(() => {
        setIsDropping(false);
        setTimeout(() => {
          startDropping();
        }, Math.random() * 3000 + 2000); // Random delay between 2-5 seconds
      }, 2000);
    };

    const initialDelay = Math.random() * 2000;
    setTimeout(startDropping, initialDelay);
  }, []);

  const bloodDropSvg = `data:image/svg+xml;base64,${btoa(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 535.578 535.578" width="12px" height="12px">
      <defs>
        <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style="stop-color:rgb(150,0,0);stop-opacity:0.9" />
          <stop offset="100%" style="stop-color:rgb(255,0,0);stop-opacity:0.9" />
        </linearGradient>
      </defs>
      <g>
        <path d="M425.792,376.045c0-33.003-10.93-102.79-56.351-168.371C330.223,151.05,266.259,0,266.259,0s-60.904,151.05-100.122,207.673c-45.421,65.581-56.351,135.368-56.351,168.372c0,87.086,69.778,157.863,156.473,159.495v0.038c0.511,0,1.02-0.015,1.53-0.019c0.511,0.005,1.02,0.019,1.531,0.019v-0.038C356.014,533.908,425.792,463.131,425.792,376.045z" fill="url(#grad1)"/>
      </g>
    </svg>
  `)}`;

  return (
    <img 
      className={`blood-drop ${className} ${isDropping ? `${className}--drop` : ''}`}
      style={style}
      src={bloodDropSvg}
      alt=""
    />
  );
};

export default BloodDrop;