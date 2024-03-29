import React from 'react';

import classes from './Button.css';

const Button = (props) => {
  return (
    <button id='btn' className={classes.button} type={props.type || 'button'} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
