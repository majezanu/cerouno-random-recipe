import React from 'react';


const Button = (props) => {
  const actionHandler = (e) => {
    e.preventDefault();
    props.action()
  }
  return (
    <button onClick={actionHandler} className={props.customStyle ? props.customStyle : `btn btn-outline-secondary`}>
        {props.children}
    </button>
  );
};

export default Button;
