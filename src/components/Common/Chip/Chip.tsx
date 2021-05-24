import React from "react";
import classNames from "classnames";
import "./Chip.scss";

export interface IChipProps {
  text: string;
  className?: string;
}

export const Chip = (props: IChipProps) => {
  const {text, className} = props;
  return (
    <div className={classNames('chip', className)}>
      {text}
    </div>
  )
};