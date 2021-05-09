import React, { useRef, useState, useEffect } from "react";
import { WrapperMenu, MenuItemRoot } from "./style";

import Menu, { SubMenu, MenuItem } from "rc-menu";
import "rc-menu/assets/index.css";
import animate from "css-animation";

const animation = {
  enter(node, done) {
    let height;
    return animate(node, "rc-menu-collapse", {
      start() {
        height = node.offsetHeight;
        node.style.height = 0;
      },
      active() {
        node.style.height = `${height}px`;
      },
      end() {
        node.style.height = "";
        done();
      },
    });
  },

  appear() {
    return this.enter.apply(this, arguments);
  },

  leave(node, done) {
    return animate(node, "rc-menu-collapse", {
      start() {
        node.style.height = `${node.offsetHeight}px`;
      },
      active() {
        node.style.height = 0;
      },
      end() {
        node.style.height = "";
        done();
      },
    });
  },
};

const CategoryMenu = (props) => {
  const { items } = props;

  //   console.log("====================================");
  //   console.log("items : ", items);
  //   console.log("====================================");

  const renderMenuItem = (categories) => {
    return categories.map((c) => {
      if (c.children && c.children.length > 0) {
        if (c.title) {
          return (
            <SubMenu
              key={c.id}
              title={<span className="submenu-title-wrapper">{c.title}</span>}
              popupOffset={[10, 15]}
            >
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
    <Menu
      triggerSubMenuAction="hover"
      openAnimation="slide-up"
      mode="horizontal"
      selectedKeys={["3"]}
    >
      {items.map((m) => {
        return (
          <SubMenu
            key={m.id}
            title={<span className="submenu-title-wrapper">{m.title}</span>}
            popupOffset={[10, 15]}
          >
            {renderMenuItem(m.children)}
          </SubMenu>
        );
      })}
    </Menu>
  );
};

export default CategoryMenu;
