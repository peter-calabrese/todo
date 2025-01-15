import { useState } from 'react';
import check from '../../../assets/check.svg';

import './circlebutton.css';
const CircleButton = ({
  completed,
  updateData,
  index,
}: {
  completed: boolean;
  updateData: any;
  index: number;
}) => {
  const handleClick = () => {
    updateData(index, 'completed', !completed);
  };

  return (
    <button
      onClick={handleClick}
      className='circle'
      style={{
        backgroundColor: completed ? 'var(--dark-purple)' : 'transparent',
        border: completed ? 'none' : '1px solid var(--blue)',
      }}
    >
      {completed ? <img className='circleImage' src={check} /> : ''}
    </button>
  );
};

export default CircleButton;
