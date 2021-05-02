import React, { useState } from "react";
import BottomMenuItem from "./BottomMenu.model";
import { MenuIcon } from "@fluentui/react-icons-northstar";
import { Menu, tabListBehavior } from "@fluentui/react-northstar";
import ReactMegaMenu from "react-mega-menu";
import classes from "./styles.module.scss";

const BottomMenu = ({ menuItems }) => {
  const [menuActive, setMenuActive] = useState(false);
  const styleConfig = {
    containerProps: { className: classes.megaMenuContainer },
    menuItemProps: { className: classes.menuItem },
    menuItemSelectedProps: { className: classes.selected },
  };

  const subMenuItem = (
    <div className={classes.container}>
      <div className={classes.container_row}>
        <div className={classes.container_block}>
          <h2>My Career And Benefits</h2>
          <span>HRweb</span>
          <span>Benefits</span>
          <span>Learning Portal</span>
          <span>Internal Jobs</span>
          <span>Internal Jobs</span>
          <span>Company Store</span>
          <span>Give</span>
        </div>
        <div className={classes.container_block}>
          <h2>My Career And Benefits</h2>
          <span>HRweb</span>
          <span>Benefits</span>
          <span>Learning Portal</span>
          <span>Internal Jobs</span>
          <span>Internal Jobs</span>
          <span>Company Store</span>
          <span>Give</span>
        </div>
      </div>
      <div className={classes.container_row}>
        <div className={classes.container_block}>
          <h2>My Career And Benefits</h2>
          <span>HRweb</span>
          <span>Benefits</span>
          <span>Learning Portal</span>
          <span>Internal Jobs</span>
          <span>Internal Jobs</span>
          <span>Company Store</span>
          <span>Give</span>
        </div>
        <div className={classes.container_block}>
          <h2>My Career And Benefits</h2>
          <span>HRweb</span>
          <span>Benefits</span>
          <span>Learning Portal</span>
          <span>Internal Jobs</span>
          <span>Internal Jobs</span>
          <span>Company Store</span>
          <span>Give</span>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <Menu
        defaultActiveIndex={0}
        className={classes.container_menu}
        items={menuItems}
        underlined
        primary
        accessibility={tabListBehavior}
        aria-label="Nav"
      />
      {menuActive && (
        <ReactMegaMenu
          tolerance={50}
          styleConfig={styleConfig}
          data={[
            {
              key: "Sub Menu Item 1",
              label: "Sub Menu Item 1",
              items: subMenuItem,
            },
            {
              key: "Sub Menu Item 2",
              label: "Sub Menu Item 2",
              items: subMenuItem,
            },
            {
              key: "Sub Menu Item 3",
              label: "Sub Menu Item 3",
              items: subMenuItem,
            },
          ]}
        />
      )}
    </>
  );
};

export default BottomMenu;
