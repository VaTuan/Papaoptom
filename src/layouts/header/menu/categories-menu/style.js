import Link from "next/link";
import styled from "styled-components";

export const WrapperMenu = styled.div``;

export const CustomLink = styled.a`
  display: block;
  color: #000000;
  font-size: 16px;
  padding: ${({ padding }) => padding};
  color: ${({ color }) => color};
  padding-right: ${({ paddingRight }) => paddingRight};
  white-space: nowrap;
`;

export const TitleWithIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-width: 140px;
  width: 100%;
`;

export const Level01 = styled.ul`
  display: flex;
`;
export const ItemLevel01 = styled.li`
  cursor: pointer;
  color: #ffffff;
  position: relative;

  &:hover {
    ul.level_02 {
      display: block;
      top: 100%;
      left: 50%;
      transform: translateX(-50%);
    }
  }
`;

export const Level02 = styled.ul`
  /* width: 100%; */
  display: none;
  position: absolute;
  background-color: #fff;
  box-shadow: 0 3px 7px rgb(0 0 0 / 13%), 0 0.6px 2px rgb(0 0 0 / 10%);
`;
export const ItemLevel02 = styled.li`
  padding: 8px;
  display: flex;
  align-items: center;
  color: #000000;
  justify-content: space-between;
  transition: 0.3s all ease-in-out;
  &:hover {
    background-color: #ebebeb;
  }

  position: relative;

  &:hover {
    ul.level_03 {
      display: block;
      top: 100%;
      top: 0;
      left: 100%;
    }
    ul.mega-menu__level_03.index_custom-1 {
      top: -100%;
    }
  }
`;

export const Level03 = styled.ul`
  position: absolute;
  display: none;
  width: 100%;
  background-color: #fff;
  box-shadow: 0 3px 7px rgb(0 0 0 / 13%), 0 0.6px 2px rgb(0 0 0 / 10%);

  &.mega-menu__level_03 {
    display: none;
    height: 500px;
    width: 200px;
    overflow-y: scroll;
    overflow-x: hidden;
    ::-webkit-scrollbar {
      width: 5px;
    }
    ::-webkit-scrollbar-track {
      background: #f1f1f1;
    }

    ::-webkit-scrollbar-thumb {
      background: #888;
    }
    ::-webkit-scrollbar-thumb:hover {
      background: #555;
    }
  }
`;
export const ItemLevel03 = styled.li`
  padding: 8px;
  transition: 0.3s all ease-in-out;
  &:hover {
    background-color: #ebebeb;
  }
  position: relative;

  &:hover {
    ul.level_04 {
      display: block;
      top: 0;
      left: 100%;
    }
  }
`;

export const Level04 = styled.ul`
  position: absolute;
  display: none;
  width: 100%;
  background-color: #fff;
  box-shadow: 0 3px 7px rgb(0 0 0 / 13%), 0 0.6px 2px rgb(0 0 0 / 10%);

  &.mega-menu__level_04 {
    display: none;
    height: 400px;
    width: 200px;
    overflow-y: scroll;
    overflow-x: hidden;
    ::-webkit-scrollbar {
      width: 5px;
    }
    ::-webkit-scrollbar-track {
      background: #f1f1f1;
    }

    ::-webkit-scrollbar-thumb {
      background: #888;
    }
    ::-webkit-scrollbar-thumb:hover {
      background: #555;
    }
  }
`;

export const ItemLevel04 = styled.li`
  padding: 8px;
  transition: 0.3s all ease-in-out;
  &:hover {
    background-color: #ebebeb;
  }

  position: relative;

  &:hover {
    ul.level_05 {
      display: block;
      right: 100%;
      top: 0;
    }
    ul.mega-menu__level_05.index_custom-1 {
      top: -100%;
    }
    ul.mega-menu__level_05.index_custom-2 {
      top: -200%;
    }
  }
`;

export const Level05 = styled.ul`
  position: absolute;
  display: none;
  width: 100%;
  background-color: #fff;
  box-shadow: 0 3px 7px rgb(0 0 0 / 13%), 0 0.6px 2px rgb(0 0 0 / 10%);
  z-index: 99;
  &.mega-menu__level_05 {
    display: none;
    height: 400px;
    width: 200px;
    overflow-y: scroll;
    overflow-x: hidden;
    ::-webkit-scrollbar {
      width: 5px;
    }
    ::-webkit-scrollbar-track {
      background: #f1f1f1;
    }

    ::-webkit-scrollbar-thumb {
      background: #888;
    }
    ::-webkit-scrollbar-thumb:hover {
      background: #555;
    }
  }
`;

export const ItemLevel05 = styled.li`
  padding: 8px;
  transition: 0.3s all ease-in-out;
  &:hover {
    background-color: #ebebeb;
  }
`;
