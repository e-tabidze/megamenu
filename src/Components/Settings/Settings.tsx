import React, { useState } from "react";
import { OpenOutsideIcon } from "@fluentui/react-icons-northstar";
import { Text, Header, Flex } from "@fluentui/react-northstar";
import SettingsStep from "../SettingsStep/SettingsStep";
import classes from "./styles.module.scss";

const Settings = ({handleGetMenuItems}) => {
  const [settingsStepActive, setSettingsStepActive] = useState(false);

  return (
    <div className={classes.container}>
      <div>
        <Flex className={classes.container_sectionHeader}>
          <Text as="span" content="1" className={classes.container_number} />
          <Header as="h4" content="Settings" />
        </Flex>
        <Flex onClick={() => setSettingsStepActive(!settingsStepActive)}>
          <div className={classes.container_settingsIcon}>
            <OpenOutsideIcon />
          </div>
          <Text content="Step 1" />
        </Flex>
        <Flex>
          <div className={classes.container_settingsIcon}>
            <OpenOutsideIcon />
          </div>
          <Text content="Step 2" />
        </Flex>
        <Flex>
          <div className={classes.container_settingsIcon}>
            <OpenOutsideIcon />
          </div>
          <Text content="Step 3" />
        </Flex>
        <Flex className={classes.container_sectionHeader}>
          <Text as="p" content="2" className={classes.container_number} />
          <Header as="h4" content="Settings" />
        </Flex>
        <Flex>
          <div className={classes.container_settingsIcon}>
            <OpenOutsideIcon />
          </div>
          <Text content="Step 2" />
        </Flex>
        <Flex>
          <div className={classes.container_settingsIcon}>
            <OpenOutsideIcon />
          </div>
          <Text content="Step 3" />
        </Flex>
      </div>
      {settingsStepActive && <SettingsStep handleGetMenuItems={handleGetMenuItems} />}
    </div>
  );
};

export default Settings;
