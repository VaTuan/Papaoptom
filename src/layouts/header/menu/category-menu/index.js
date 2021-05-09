import React from "react";
import { WrapperMenu, MenuItemRoot } from "./style";
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
        return (
          <MenuItem key={c.id} className="tuan_qua_dz">
            {c.title}
          </MenuItem>
        );
      }
    });
  };
  return (
    <WrapperMenu>
      {items.map((m) => {
        return (
          <Menu
            className="menu_item"
            key={m.id}
            menuButton={<MenuItemRoot>{m.title}</MenuItemRoot>}
          >
            {renderMenuItem(m.children)}
          </Menu>
        );
      })}
    </WrapperMenu>
  );
};

export default CategoryMenu;
