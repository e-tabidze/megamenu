import "./App.css";
import { useState, useEffect } from "react";
import SearchBar from "./Components/SearchBar/SearchBar";
import TopNavigationBar from "./Components/TopNavigaitonBar/TopNavigationBar";
import INavbarItems from "./Components/SettingsStep/SettingsStep.model";
import "office-ui-fabric-react/dist/css/fabric.css";

const items: INavbarItems[] = [
  {
    id: "tree-title-customization-item-1",
    key: "tree-title-customization-item-1",
    title: "Navigation Item 1",
    content: "Navigation Item 1",
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
    id: "tree-title-customization-item-2",
    key: "tree-title-customization-item-4",
    title: "Navigation Item 2",
    content: "Navigation Item 2",
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
    id: "tree-title-customization-item-3",
    key: "tree-title-customization-item-7",
    title: "Navigation Item 3",
    content: "Navigation Item 3",
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
    id: "tree-title-customization-item-4",
    key: "tree-title-customization-item-10",
    title: "Navigation Item 5",
    content: "Navigation Item 5",
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
    id: "tree-title-customization-item-5",
    key: "tree-title-customization-item-13",
    title: "Navigation Item 6",
    content: "Navigation Item 6",
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
    id: "tree-title-customization-item-6",
    key: "tree-title-customization-item-16",
    title: "Navigation Item 1",
    content: "Navigation Item 1",
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

function App() {
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    handleSetMenuItems();
  }, []);

  const handleSetMenuItems = () => {
    if (localStorage.getItem("navItems") === null) {
      Promise.resolve()
        .then(() => {
          localStorage.setItem("navItems", JSON.stringify(items));
        })
        .then(() => {
          handleGetMenuItems();
        });
    }
  };

  const handleGetMenuItems = () => {
    let demoItems;

    demoItems = localStorage.getItem("navItems");
    setMenuItems(JSON.parse(demoItems));
  };

  useEffect(() => {}, [menuItems]);

  return (
    <div>
      <SearchBar />
      <div style={{ display: "flex" }}>
        <div style={{ width: "100%" }}>
          <TopNavigationBar
            menuItems={menuItems}
            handleGetMenuItems={handleGetMenuItems}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
