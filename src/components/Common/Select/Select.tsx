import React, {useState} from "react";
import {default as ReactSelect} from 'react-select';
import "./Select.scss";

export interface ISelectProps {
  label: string;
  options: ISelectOption[];
  width: number;
}

export interface ISelectOption {
  value: string;
  label: string;
}

export const getCustomStyles = (controlWidth: number) => {
  return {
    // @ts-ignore
    control: styles => (
      {
        ...styles,
        backgroundColor: 'transparent',
        border: 'none',
        boxShadow: 'none',
        fontWeight: 500,
        width: controlWidth
      }
    ),
    // @ts-ignore
    option: styles => (
      {...styles}
    ),
    indicatorSeparator: () => ({})
  }
};

export const Select = (props: ISelectProps) => {
  const {label, options, width} = props;
  const [selectedValue, selectValue] = useState(options && options[0]);
  let customStyles = getCustomStyles(width);

  const onChange = (value: ISelectOption | null) => {
    selectValue(value || selectedValue);
  };

  return (
    <div className='select'>
      <label className='select__label'>{label}</label>
      <ReactSelect
        options={options}
        styles={customStyles}
        value={selectedValue}
        onChange={onChange}
        placeholder='Выбрать'
      />
    </div>
  )
};