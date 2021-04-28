import React from "react";
import { Menu, tabListBehavior } from "@fluentui/react-northstar";
import { useHistory } from "react-router-dom";
import {
  BellIcon,
  ChatIcon,
  TeamsMonochromeIcon,
  CalendarIcon,
  FilesAftereffectsIcon,
  AppsIcon,
  SettingsIcon,
  QuestionCircleIcon,
  MoreIcon,
  SearchIcon,
} from "@fluentui/react-icons-northstar";
import SidebarMenuItem from "./Sidebar.model";
import classes from "./styles.module.scss";

const Sidebar = () => {
  const handleClick = (path: string) => {
    history.push("/");
  };
  const history = useHistory();
  const sidebarItems: SidebarMenuItem[] = [
    {
      key: "Intranet",
      content: "Intranet",
      onClick: () => handleClick("/"),
      icon: <SearchIcon />,
    },
    {
      key: "Dashboard",
      icon: <BellIcon disabled />,
      content: "Activity",
      onClick: () => handleClick("/"),
    },
    {
      key: "chat",
      icon: <ChatIcon outline={true} bordered />,
      content: "Chat",
      onClick: () => handleClick("/"),
    },
    {
      key: "teams",
      icon: <TeamsMonochromeIcon />,
      onClick: () => handleClick("/"),
      content: "Teams",
    },
    {
      key: "calendar",
      icon: <CalendarIcon className={classes.container_icon} />,
      onClick: () => handleClick("/"),
      content: "Calendar",
    },
    {
      key: "question",
      icon: <FilesAftereffectsIcon className={classes.container_icon} />,
      content: "Files",
      onClick: () => handleClick("/"),
    },
    {
      key: "meet",
      onClick: () => handleClick("/"),
      icon: <MoreIcon outline={true} />,
    },
    {
      key: "stonre",
      icon: <AppsIcon />,
      content: "Store",
      onClick: () => handleClick("/"),
    },
    {
      key: "meet",
      onClick: () => handleClick("/"),
      icon: <QuestionCircleIcon />,
    },
    {
      key: "meet",
      onClick: () => handleClick("/"),
      icon: <SettingsIcon />,
    },
  ];

  return (
    <>
      <Menu
        defaultActiveIndex={0}
        items={sidebarItems}
        vertical
        pointing="start"
      />
    </>
  );
};

export default Sidebar;
