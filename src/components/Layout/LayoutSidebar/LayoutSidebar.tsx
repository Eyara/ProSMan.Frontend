import React from "react";
import "./LayoutSidebar.scss";
import {Icon} from "../../Common/Icon/Icon";

export const LayoutSidebar = () => {
  return (
    <div className={'layout-sidebar'}>
      <Icon name='person' alt='profile' className={'layout-sidebar__icon'}/>
      <Icon name='notifications' alt='notifications' className={'layout-sidebar__icon'}/>
    </div>
  )
};