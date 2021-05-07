import React from "react";
import { MenuList } from "./style";
import { Menu, MenuItem, MenuButton, SubMenu } from "@szhsin/react-menu";
import "@szhsin/react-menu/dist/index.css";

function RenderMenuItem(props) {
  const categories = this.props.categories;
  return (
    <>
      {categories.map((c) => {
        if (c.children && c.children.length > 0) {
          return (
            <SubMenu key={c.id} label={c.title ? c.title : "hello"}>
              <RenderMenuItem categories={c.children} />
            </SubMenu>
          );
        } else {
          return <MenuItem key={c.id}>{c.title ? c.title : "hello"}</MenuItem>;
        }
      })}
    </>
  );
}

const CategoryMenu = (props) => {
  const { items } = props;
  const renderMenuItem = (categories) => {
    return (
      <>
        {categories.map((c) => {
          if (c.children && c.children.length > 0) {
            return (
              <SubMenu key={c.id} label={c.title ? c.title : "hello"}>
                {renderMenuItem(c.children)}
              </SubMenu>
            );
          } else {
            return (
              <MenuItem key={c.id}>{c.title ? c.title : "hello"}</MenuItem>
            );
          }
        })}
      </>
    );
  };
  return (
    <div style={{ display: "flex", justifyItems: "center" }}>
      {items.map((m) => {
        return (
          <Menu key={m.id} menuButton={<h5>{m.title ? m.title : "hello"}</h5>}>
            {renderMenuItem(m.children)}
          </Menu>
        );
      })}
    </div>
  );
};

export default CategoryMenu;
