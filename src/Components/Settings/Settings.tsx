import React, { useState } from "react";
import { OpenOutsideIcon } from "@fluentui/react-icons-northstar";
import { Menu, Text, Header } from "@fluentui/react-northstar";
import classes from "./styles.module.scss";
import SettingsStep from "../SettingsStep/SettingsStep";

const Settings = () => {
  const [settingsStepActive, setSettingsStepActive] = useState(false);
  const settingsItems = [
    {
      key: "Settings",
      content: (
        <>
          <Text content="Settings" weight="bold" />
        </>
      ),
      // onClick: () => handleClick("/"),
    },
    {
      key: "Settings",
      content: <Text content="Step 1" />,
      // onClick: () => handleClick("/"),
      icon: <OpenOutsideIcon />,
    },
    {
      key: "Settings",
      content: <Text content="Step 2" />,
      // onClick: () => handleClick("/"),
      icon: <OpenOutsideIcon />,
    },
    {
      key: "Settings",
      content: <Text content="Step 3" />,
      // onClick: () => handleClick("/"),
      icon: <OpenOutsideIcon />,
    },
    {
      key: "Settings",
      content: <Text content="Settings" weight="bold" />,
      // onClick: () => handleClick("/"),
    },
    {
      key: "Settings",
      content: <Text content="Step 1" />,
      // onClick: () => handleClick("/"),
      icon: <OpenOutsideIcon outline />,
    },
    {
      key: "Settings",
      content: <Text content="Step 2" />,
      // onClick: () => handleClick("/"),
      icon: <OpenOutsideIcon />,
    },
    {
      key: "Settings",
      content: <Text content="Step 3" />,
      // onClick: () => handleClick("/"),
      icon: <OpenOutsideIcon />,
    },
  ];
  return (
    <div className={classes.container}>
      {/* <Menu
        defaultActiveIndex={0}
        items={settingsItems}
        vertical
        pointing="start"
      /> */}
      {settingsStepActive && <SettingsStep />}
      <div>
        <div>
          <div>
            <div>1</div>
            <Header as="h4" content="Settings" />
          </div>
          <ul>
            <li>
              <div className={classes.container_settingsIcon}>
                <OpenOutsideIcon />
              </div>
              <Text
                content="Step 1"
                onClick={() => setSettingsStepActive(!settingsStepActive)}
              />
            </li>
            <li>
              <div className={classes.container_settingsIcon}>
                <OpenOutsideIcon />
              </div>
              <Text content="Step 2" />
            </li>
            <li>
              <div className={classes.container_settingsIcon}>
                <OpenOutsideIcon />
              </div>
              <Text content="Step 3" />
            </li>
          </ul>
        </div>
        <div>
          <div>
            <div>2</div>
            <Header as="h4" content="Settings" />
          </div>
          <ul>
            <li>
              <div className={classes.container_settingsIcon}>
                <OpenOutsideIcon />
              </div>
              <Text content="Step 2" />
            </li>
            <li>
              <div className={classes.container_settingsIcon}>
                <OpenOutsideIcon />
              </div>
              <Text content="Step 3" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Settings;
