import React from 'react';

import s from './Button.module.scss';

interface ButtonProps {
  title: string;
}

const Button = ({ title }: ButtonProps) => (
  <button className={s.button}>
    {title}
  </button>
);

export default Button;
