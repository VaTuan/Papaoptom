import styled from "styled-components";
import { color } from "styled-system";

export const MenuList = styled.ul``;
export const WrapperMenu = styled.div`
  display: flex;
  background-color: #009e7f;
  width: 100%;
  justify-content: center;

  .menu_item {
    padding: 0px;
  }
  .rc-menu__item {
    /* padding: 14px 16px; */
  }
  .rc-menu.rc-menu--open.rc-menu--animation.rc-menu--dir-right {
    padding: 0px;
  }
  /* .mega_menu {
    width: 500px;
    height: auto;
    display: flex;
    flex-wrap: wrap;
  } */
`;
export const MenuItemRoot = styled.p`
  color: #ffffff;
  font-size: 16px;
  padding: 20px 20px;
  cursor: pointer;
`;
