import React, { useState } from "react";
import TopNavigationbarProps from "./TopNavigationBar.model";
import { Menu, tabListBehavior } from "@fluentui/react-northstar";
import { AddIcon, SearchIcon } from "@fluentui/react-icons-northstar";
import BottomMenu from "../BottomMenu/BottomMenu";
import Settings from "../Settings/Settings";
import "office-ui-fabric-react/dist/css/fabric.css";

const TopNavigationbar = ({ menuItems, handleGetMenuItems }) => {
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

  const handleClick = () => {
    window.location.reload(false);
  };

  const itemsTest: TopNavigationbarProps[] = [
    {
      key: "Intranet",
      content: "Intranet",
      icon: <SearchIcon />,
      onClick: () => handleClick(),
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
      onClick: () => handleClick(),
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
        style={{ height: "70px", alignItems: "center" }}
        aria-label="Nav"
      />
      {dashbboardActive && <BottomMenu menuItems={menuItems} />}
      {settingsActive && !dashbboardActive && <Settings handleGetMenuItems={handleGetMenuItems} />}
    </>
  );
};

export default TopNavigationbar;
