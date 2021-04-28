import React from "react";
import {
  Menu,
  Text,
  Header,
  Button,
  Input,
  TriangleDownIcon,
  TriangleEndIcon,
  SearchIcon,
  Tree,
} from "@fluentui/react-northstar";
import classes from "./styles.module.scss";

const SettingsStep = () => {
  const items = [
    {
      id: "tree-title-customization-item-1",
      title: "one",
      items: [
        {
          id: "tree-title-customization-item-2",
          title: "one one",
          items: [
            {
              id: "tree-title-customization-item-3",
              title: "one one one",
            },
          ],
        },
      ],
    },
    {
      id: "tree-title-customization-item-4",
      title: "two",
      items: [
        {
          id: "tree-title-customization-item-5",
          title: "two one",
        },
      ],
    },
  ];

  const titleRenderer = (
    Component,
    { content, expanded, open, hasSubtree, ...restProps }
  ) => (
    <Component expanded={expanded} hasSubtree={hasSubtree} {...restProps}>
      {expanded ? (
        <div className={classes.container_icon}>
          <TriangleDownIcon />{" "}
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
    <div className={classes.container}>
      <div>
        <Header
          content="Configure Navigation"
          as="h2"
          description={{
            as: "span",
            content: "The Mega Menu can be configured  here",
          }}
        />
        <Header
          content="Add Navigation Entries"
          as="h4"
          description={{
            as: "span",
            content: "The Mega Menu can be configured  here",
          }}
        />
      </div>
      <div>
        <Button content="+ Add Entry" primary />
        <Input
          icon={<SearchIcon />}
          placeholder="Search for a navigation entry"
        />
      </div>
      <div>
        <Tree
          aria-label="Custom title"
          items={items}
          renderItemTitle={titleRenderer}
        />
      </div>
    </div>
  );
};

export default SettingsStep;
