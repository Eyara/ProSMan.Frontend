import LogoIcon from "../../../assets/icons/project-management.svg";
import React from "react";
import "./AppBar.scss";
import {LayoutToolbar} from "../LayoutToolbar/LayoutToolbar";
import {LayoutSidebar} from "../LayoutSidebar/LayoutSidebar";
import {LayoutMenu} from "../LayoutMenu/LayoutMenu";

export const AppBar = () => {
  return (
    <div className={'app-bar'}>
      <img src={LogoIcon} className={'app-bar__logo-icon'} alt='logo'/>
      <LayoutMenu/>
      <LayoutToolbar/>
      <LayoutSidebar/>
    </div>
  )
};