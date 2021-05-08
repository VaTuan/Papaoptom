import React from "react";
import { MenuList } from "./style";
import { Menu, MenuItem, MenuButton, SubMenu } from "@szhsin/react-menu";
import "@szhsin/react-menu/dist/index.css";

const CategoryMenu = (props) => {
  const { items } = props;

  console.log("====================================");
  console.log("items : ", items);
  console.log("====================================");

  const renderMenuItem = (categories) => {
    return categories.map((c) => {
      if (c.children && c.children.length > 0) {
        if (c.title) {
          return (
            <SubMenu key={c.id} label={c.title}>
              {renderMenuItem(c.children)}
            </SubMenu>
          );
        } else {
          return renderMenuItem(c.children);
        }
      } else {
        return <MenuItem key={c.id}>{c.title}</MenuItem>;
      }
    });
  };
  return (
    <div style={{ display: "flex", justifyItems: "center" }}>
      {items.map((m) => {
        return (
          <Menu
            key={m.id}
            menuButton={<h6 style={{ marginRight: "16px" }}>{m.title}</h6>}
          >
            {renderMenuItem(m.children)}
          </Menu>
        );
      })}
    </div>
  );
};

export default CategoryMenu;
