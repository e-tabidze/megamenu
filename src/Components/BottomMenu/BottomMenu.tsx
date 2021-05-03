import React, { useEffect, useState } from "react";
import { Menu, tabListBehavior } from "@fluentui/react-northstar";
import ReactMegaMenu from "react-mega-menu";
import classes from "./styles.module.scss";

const BottomMenu = ({ menuItems }) => {
  const [activeMenuIndex, setActiveMenuIndex] = useState(0);
  const [dashNavItems, setDashNavItems] = useState([]);
  const styleConfig = {
    containerProps: { className: classes.megaMenuContainer },
    menuItemProps: { className: classes.menuItem },
    menuItemSelectedProps: { className: classes.selected },
  };

  useEffect(() => {
    if (menuItems.length > 0) {
      menuItems.map((item, index) => {
        item["onMouseEnter"] = () => setActiveMenuIndex(index);
      });
      setDashNavItems(menuItems);
    }
  }, [menuItems]);

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
        items={dashNavItems}
        activeIndex={activeMenuIndex}
        underlined
        primary
        accessibility={tabListBehavior}
        aria-label="Nav"
      />
      <ReactMegaMenu
        tolerance={50}
        styleConfig={styleConfig}
        data={[
          {
            key: "Sub Menu Item 1",
            label: `Sub Menu Item ${activeMenuIndex}`,
            items: subMenuItem,
          },
          {
            key: "Sub Menu Item 2",
            label: `Sub Menu Item ${activeMenuIndex}`,
            items: subMenuItem,
          },
          {
            key: "Sub Menu Item 3",
            label: `Sub Menu Item ${activeMenuIndex}`,
            items: subMenuItem,
          },
        ]}
      />
    </>
  );
};

export default BottomMenu;
