import React from "react";
import classNames from "classnames";
import "./Icon.scss";

export interface IIconProps {
  name: string;
  alt: string;
  className?: string;
}

export const Icon = (props: IIconProps) => {
  const {name, alt, className} = props;
  return (
    <img
      src={require(`../../../assets/icons/${name}.svg`).default}
      alt={alt}
      className={classNames('icon', className)}/>
  )
};