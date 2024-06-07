import React from 'react';
import classes from './IconSwitch.module.css';

export const IconSwitch = ({ icon, onSwitch }) => {
  return (
    <>
      <span onClick={onSwitch} className={`material-icons ${classes['icon']}`}>
        {icon}
      </span>
    </>
  );
};
