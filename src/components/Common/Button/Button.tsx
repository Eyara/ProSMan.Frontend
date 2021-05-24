import React from "react";
import classNames from "classnames";
import './Button.scss';

export interface IButtonProps {
  text: string;
  className?: string;
}

export const Button = (props: IButtonProps) => {
  const {className, text} = props;
  return (
    <button className={classNames('btn', className)}>{text}</button>
  )
};