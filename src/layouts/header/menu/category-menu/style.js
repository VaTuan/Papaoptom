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
  .mega_menu {
    width: 500px;
    height: 500px;
    overflow-y: scroll;
    overflow-x: hidden;
    display: flex;
    flex-wrap: wrap;
    top: 100%;

    ::-webkit-scrollbar {
      width: 5px;
    }
    /* Track */
    ::-webkit-scrollbar-track {
      background: #f1f1f1;
    }
    /* Handle */
    ::-webkit-scrollbar-thumb {
      background: #009e7feb;
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
      background: #555;
    }
  }
`;
export const MenuItemRoot = styled.p`
  color: #ffffff;
  font-size: 16px;
  padding: 20px 20px;
  cursor: pointer;
`;
