import React, { useState } from "react";
import TopNavigationbarProps from "./TopNavigationBar.model";
import { Menu, tabListBehavior } from "@fluentui/react-northstar";
import { useHistory } from "react-router-dom";
import {
  AddIcon,
  MoreIcon,
  ExclamationCircleIcon,
  CallVideoIcon,
  SearchIcon,
  ChevronDownIcon,
} from "@fluentui/react-icons-northstar";
import BottomMenu from "../BottomMenu/BottomMenu";
import Settings from "../Settings/Settings";

import "office-ui-fabric-react/dist/css/fabric.css";

const TopNavigationbar = () => {
  const [dashbboardActive, setDashboardActive] = useState(false);
  const [settingsActive, setSettingsActive] = useState(false);

  const toggleDashboard = () => {
    setSettingsActive(false);
    setDashboardActive(!dashbboardActive);
  };

  const toggleSettings = () => {
    setDashboardActive(false);
    setSettingsActive(!settingsActive);
  };

  const handleClick = (path: string) => {
    history.push("/");
    console.log("link");
  };
  const history = useHistory();
  const itemsTest: TopNavigationbarProps[] = [
    {
      key: "Intranet",
      content: "Intranet",
      icon: <SearchIcon />,
      onClick: () => handleClick("/"),
    },
    {
      key: "Dashboard",
      content: "Dashboard",
      onClick: () => toggleDashboard(),
    },
    {
      key: "settings",
      content: "Settings",
      onClick: () => toggleSettings(),
    },
    {
      key: "add",
      icon: <AddIcon />,
      onClick: () => handleClick("/"),
    },
    {
      key: "add",
      icon: <MoreIcon />,
      onClick: () => handleClick("/"),
    },
    {
      key: "question",
      icon: <ExclamationCircleIcon />,
      onClick: () => handleClick("/"),
    },
    {
      key: "meet",
      content: "Meet",
      onClick: () => handleClick("/"),
      icon: <CallVideoIcon />,
    },
    {
      key: "meet",
      onClick: () => handleClick("/"),
      icon: <ChevronDownIcon />,
    },
  ];

  return (
    <>
      <Menu
        defaultActiveIndex={0}
        items={itemsTest}
        underlined
        primary
        accessibility={tabListBehavior}
        aria-label="Nav"
      />
      {dashbboardActive && <BottomMenu />}
      {settingsActive && !dashbboardActive && <Settings />}
    </>
  );
};

export default TopNavigationbar;
