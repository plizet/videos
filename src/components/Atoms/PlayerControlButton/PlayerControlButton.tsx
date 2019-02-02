import React from 'react';

import './PlayerControlButton.css';

interface Props {
  onClick: (type: string) => void;
  src: string;
  title: string;
}

export default ({ onClick, src, title }: Props) => {
  const handleClick = () => {
    if (onClick) {
      onClick(title);
    }
  };

  return (
    <button className='player-button' onClick={handleClick} title={title}>
      <img alt={`${title} Button`} src={src} width={35} />
      <span className='hidden'>{title}</span>
    </button>
  );
};
