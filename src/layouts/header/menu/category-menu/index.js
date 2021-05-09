import React from "react";
import { WrapperMenu, MenuItemRoot } from "./style";
import { Menu, MenuItem, MenuButton, SubMenu } from "@szhsin/react-menu";
import "@szhsin/react-menu/dist/index.css";

const CategoryMenu = (props) => {
  const { items } = props;

  const handleMenuClick = (e) => {
    console.log(e);
  };
  const renderMenuItem = (categories, callBack) => {
    return categories.map((c) => {
      if (c.children && c.children.length > 0) {
        if (c.title) {
          return (
            <SubMenu onChange={() => callBack(c)} key={c.id} label={c.title}>
              {renderMenuItem(c.children)}
            </SubMenu>
          );
        } else {
          return renderMenuItem(c.children);
        }
      } else {
        return (
          <MenuItem
            onChange={() => callBack(c)}
            key={c.id}
            className="tuan_qua_dz"
          >
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
            overflow="auto"
            position="auto"
            className="menu_item"
            key={m.id}
            onChange={() => {
              handleMenuClick(m);
            }}
            value={m}
            onClick={handleMenuClick}
            menuButton={<MenuItemRoot>{m.title}</MenuItemRoot>}
          >
            {renderMenuItem(m.children, handleMenuClick)}
          </Menu>
        );
      })}
    </WrapperMenu>
  );
};

export default CategoryMenu;
