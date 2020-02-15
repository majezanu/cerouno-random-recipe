import React from 'react';
import './Image.css';

const Image = (props) => {
  return (
    <img src={props.image} className={props.customStyle ? props.customStyle : `card-img-top`} />
  );
};

export default Image;
