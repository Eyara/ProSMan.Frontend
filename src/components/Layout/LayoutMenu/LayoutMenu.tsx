import React from "react";
import './LayoutMenu.scss';
import ILayoutListItemModel from "../../../interfaces/layoutListItem.model";
import {LayoutListItem} from "../LayoutListItem/LayoutListItem";

export const LayoutMenu = () => {
  const layoutListItems: ILayoutListItemModel[] = [
    {icon: 'view_list', path: '/projects'},
    {icon: 'today', path: '/today'},
    {icon: 'assessment', path: '/dashboard'},
    {icon: 'logout', path: '/logout', className: 'list-item-pinned-to-bottom'},
  ];

  return (
    <div className='layout-menu'>
      <div className='layout-menu__list'>
        {
          layoutListItems.map(item =>
            <LayoutListItem key={item.icon} listItem={item}/>
          )
        }
      </div>
    </div>
  )
};