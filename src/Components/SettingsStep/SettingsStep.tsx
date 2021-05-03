import React, { useState, useEffect } from "react";
import {
  Header,
  Button,
  Input,
  TriangleDownIcon,
  TriangleEndIcon,
  SearchIcon,
  AcceptIcon,
  Tree,
  Flex,
} from "@fluentui/react-northstar";
import INavbarItems from "./SettingsStep.model";
import classes from "./styles.module.scss";

const SettingsStep = ({ handleGetMenuItems }) => {
  const [createEntry, setCreateEntry] = useState(false);
  const [settingsMenu, setSettingsMenu] = useState(true);
  const [navItems, setNavItems] = useState<INavbarItems[]>([]);
  const [newEntry, setNewEntry] = useState("");

  useEffect(() => {
    let navData;
    navData = localStorage.getItem("navItems");
    setNavItems(JSON.parse(navData));
  }, []);

  useEffect(() => {
    console.log(navItems, "<==== NAV ITEMS")
  },[navItems])

  const handleChange = (e) => {
    setNewEntry(e.target.value);
  };

  const createNewEntry = () => {
    console.log(navItems.length, "<===== ID")
    let newEntryItem = {
      id: `tree-title-customization-item-${navItems.length + 1}`,
      key: `tree-title-customization-item-${navItems.length + 1}`,
      title: newEntry,
      content: newEntry,
    };
    setNavItems((prevstate) => [...prevstate, newEntryItem]);
  };

  const handleSave = () => {
    localStorage.setItem("navItems", JSON.stringify(navItems));
    handleGetMenuItems();
    setSettingsMenu(false);
  };

  const handleSearch = (e) => {
    let navData;
    navData = localStorage.getItem("navItems");
    let filtered = navData.filter((item) => {
      return item.title.includes(e.target.value);
    });
    setNavItems(filtered);
  };

  const titleRenderer = (
    Component: any,
    { content, expanded, open, hasSubtree, ...restProps }: any
  ) => (
    <Component
      expanded={expanded}
      className={classes.container_titleRendered}
      hasSubtree={hasSubtree}
      {...restProps}
    >
      {expanded ? (
        <div className={classes.container_icon}>
          <TriangleDownIcon />
        </div>
      ) : (
        <div className={classes.container_icon}>
          <TriangleEndIcon />
        </div>
      )}
      {content}
    </Component>
  );
  return (
    <>
      {settingsMenu && (
        <div className={classes.container}>
          <Header
            content="Configure Navigation"
            as="h2"
            description={{
              as: "p",
              content: "The Mega Menu can be configured  here",
            }}
          />
          <Header
            content="Add Navigation Entries"
            style={{ paddingBottom: "20px" }}
            as="h4"
            description={{
              as: "p",
              content: "The Mega Menu can be configured  here",
            }}
          />
          <Flex style={{ marginBottom: "20px" }}>
            {createEntry && (
              <Input
                autoFocus
                className={classes.container_createEntry}
                placeholder="Create New Entry"
                onChange={handleChange}
                icon={
                  <AcceptIcon
                    className={classes.container_icon}
                    onClick={createNewEntry}
                  />
                }
              />
            )}
            <Button
              content="+ Add Entry"
              primary
              onClick={() => setCreateEntry(!createEntry)}
            />
            <Input
              className={classes.container_search}
              icon={
                <div className={classes.container_icon}>
                  <SearchIcon />
                </div>
              }
              onChange={handleSearch}
              placeholder="Search for a navigation entry"
            />
          </Flex>
          <Tree
            aria-label="Custom title"
            items={navItems}
            renderItemTitle={titleRenderer}
          />
          <Flex style={{ justifyContent: "flex-end" }}>
            <Button
              content="Discard"
              style={{ margin: "5px" }}
              onClick={() => setSettingsMenu(!settingsMenu)}
            />
            <Button
              content="Save"
              primary
              style={{ margin: "5px" }}
              onClick={handleSave}
            />
          </Flex>
        </div>
      )}
    </>
  );
};

export default SettingsStep;
