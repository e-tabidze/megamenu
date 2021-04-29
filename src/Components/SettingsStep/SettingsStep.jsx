import React, { useState, useEffect } from "react";
import {
  Header,
  Button,
  Input,
  TriangleDownIcon,
  TriangleEndIcon,
  SearchIcon,
  Tree,
  Flex,
} from "@fluentui/react-northstar";
import classes from "./styles.module.scss";

const items = [
  {
    id: "tree-title-customization-item-1",
    title: "Navigation Item 1",
    items: [
      {
        id: "tree-title-customization-item-2",
        title: "Sub Navigation Item 1",
        items: [
          {
            id: "tree-title-customization-item-3",
            title: "Sub Sub Navigation Item 1",
          },
        ],
      },
    ],
  },
  {
    id: "tree-title-customization-item-4",
    title: "Navigation Item 2",
    items: [
      {
        id: "tree-title-customization-item-5",
        title: "Sub Navigation Item 1",
        items: [
          {
            id: "tree-title-customization-item-6",
            title: "Sub Sub Navigation Item 1",
          },
        ],
      },
    ],
  },
  {
    id: "tree-title-customization-item-7",
    title: "Navigation Item 3",
    items: [
      {
        id: "tree-title-customization-item-8",
        title: "Sub Navigation Item 4",
        items: [
          {
            id: "tree-title-customization-item-9",
            title: "Sub Sub Navigation Item 1",
          },
        ],
      },
    ],
  },
  {
    id: "tree-title-customization-item-10",
    title: "Navigation Item 5",
    items: [
      {
        id: "tree-title-customization-item-11",
        title: "Sub Navigation Item 1",
        items: [
          {
            id: "tree-title-customization-item-12",
            title: "Sub Sub Navigation Item 1",
          },
        ],
      },
    ],
  },
  {
    id: "tree-title-customization-item-13",
    title: "Navigation Item 6",
    items: [
      {
        id: "tree-title-customization-item-14",
        title: "Sub Navigation Item 1",
        items: [
          {
            id: "tree-title-customization-item-15",
            title: "Sub Sub Navigation Item 1",
          },
        ],
      },
    ],
  },
  {
    id: "tree-title-customization-item-16",
    title: "Navigation Item 1",
    items: [
      {
        id: "tree-title-customization-item-17",
        title: "Sub Navigation Item 1",
        items: [
          {
            id: "tree-title-customization-item-18",
            title: "Sub Sub Navigation Item 1",
          },
        ],
      },
    ],
  },
];

const SettingsStep = () => {
  const [createEntry, setCreateEntry] = useState(false);
  const [settingsMenu, setSettingsMenu] = useState(true);
  const [navItems, setNavItems] = useState([]);
  const [newEntry, setNewEntry] = useState("");

  const createNewEntry = (e) => {
    let newItem = {
      id: `Navigation Item ${items.length + 1}`,
      title: newEntry,
    };
    setNavItems((prevstate) => [...prevstate, newItem]);
    localStorage.setItem("newItem", newItem.title);
  };

  const handleChange = (e) => {
    setNewEntry(e.target.value);
  };

  const newItem = localStorage.getItem("newItem");
  items.push(newItem);
  console.log(items);

  useEffect(() => {
    setNavItems(items);
  }, []);

  const handleSearch = (e) => {
    let filtered = items.filter((item) => {
      return item.title.includes(e.target.value);
    });
    setNavItems(filtered);
  };

  const titleRenderer = (
    Component,
    { content, expanded, open, hasSubtree, ...restProps }
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
              onClick={createNewEntry}
            />
          </Flex>
        </div>
      )}
    </>
  );
};

export default SettingsStep;
