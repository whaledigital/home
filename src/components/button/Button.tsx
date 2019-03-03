import React from 'react';

import Link from 'components/Link';

import s from './Button.module.scss';

type Size = 'normal' | 'large';

interface ButtonProps {
  title: string;
  type: string;
  size: Size;
  onClick: () => void;
  to?: string;
}

const Button = (props: ButtonProps) => {
  let className = s.button;
  if (props.size === 'large') {
    className += ` ${s.button__large}`;
  }
  if (props.type === 'link' && props.to) {
    return (
      <Link to={props.to} className={className}>{props.title}</Link>
    );
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
  onClick: (): void => undefined,
  size: 'normal',
  type: 'button',
};

export default Button;
