import React from 'react';

import s from './Button.module.scss';

type Size = 'normal' | 'large';

interface ButtonProps {
  title: string;
  type: string;
  size: Size;
  onClick: () => void;
}

const Button = (props: ButtonProps) => {
  let className = s.button;
  if (props.size === 'large') {
    className += ` ${s.button__large}`;
  }
  return (
    <button
      className={className}
      type={props.type}
      onClick={props.onClick}
    >
      {props.title}
    </button>
  );
};

Button.defaultProps = {
  onClick: (): any => undefined,
  size: 'normal',
  type: 'button',
};

export default Button;
