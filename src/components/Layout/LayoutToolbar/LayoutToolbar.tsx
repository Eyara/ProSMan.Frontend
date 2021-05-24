import {Button} from "../../Common/Button/Button";
import React from "react";
import "./LayoutToolbar.scss";

export const LayoutToolbar = () => {
  return (
    <div className={'layout-toolbar'}>
      <label className={'layout-toolbar__label'}>
        Проекты
      </label>
      <Button text='Создать проект' className='layout-toolbar__button'/>
    </div>
  )
};