import React from 'react';

require('../css/Heading.css');

const Heading = (props) => {
  return (
    <div>
      <div className="heading">
        <h1 className="lala"> Github Issues </h1>
      </div>
      <div className="color"><div className="arrow" /></div>
      {props.children}
    </div>
  );
};

export default Heading;
