import React from 'react';

/*
  Enables scroll ability for events section
*/

const Scroll = (props) => {
  return (
    <div style={{overflowY: 'scroll', height: '800px'}}>
      {props.children}
    </div>
  );
};

export default Scroll;
