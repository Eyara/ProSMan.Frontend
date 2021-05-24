import React, {useState} from "react";
import {default as ReactSelect, OptionsType} from 'react-select';
import "./Select.scss";
import {getCustomStyles, ISelectOption, ISelectProps} from "./Select";

export const MultiSelect = (props: ISelectProps) => {
  const {label, options, width} = props;
  const [selectedValue, selectValue] = useState(options && [options[0]]);
  let customStyles = getCustomStyles(width);

  const onChange = (value: OptionsType<ISelectOption> | null) => {
    if (!value) return;
    selectValue(value.map(v => v));
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
        isMulti={true}
      />
    </div>
  )
};