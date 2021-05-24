import React from "react";
import ILayoutListItemModel from "../../../interfaces/layoutListItem.model";
import {Link} from "react-router-dom";
import './LayoutListItem.scss';
import {Icon} from "../../Common/Icon/Icon";
import classNames from "classnames";

interface ILayoutListItemProps {
  listItem: ILayoutListItemModel;
}

export const LayoutListItem = (props: ILayoutListItemProps) => {
  const {listItem} = props;
  const {icon, path, className} = listItem;

  return (
    <Link to={path} className={classNames('list-item', className)}>
        <div className='list-item__icon'>
          <Icon name={icon} alt={icon}/>
      </div>
    </Link>
  )
};

