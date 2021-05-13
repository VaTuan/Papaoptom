import styled from "styled-components";
import { color } from 'styled-system';

export const WrapperMenuMobile = styled.div`
  padding: 40px 20px;
  box-sizing: border-box;
`;

export const IconRight = styled.span`
    color : #213779;
    font-size : 18px
`
export const Level01 = styled.ul`
  display: flex;
  flex-direction: column;
`;

export const ItemLevel01 = styled.li`
  display : flex;
  align-items : center;
  margin-bottom : 8px;
  font-size : 18px;
  & > a {
      color : #000;
      margin-right : 20px;
  }
`;

export const MenuWithTitle = styled.div``;
export const MenuTitle = styled.h4``
export const Level02 = styled.ul``;
export const ItemLevel02 = styled.li`
  font-size : 16px;
  margin-bottom : 8px;
`;

export const Level03 = styled.ul``
export const ItemLevel03 = styled.li``
export const Level04 = styled.ul``
export const ItemLevel04 = styled.li``

export const BackIcon = styled.span`
  font-size : 22px;
  cursor : pointer;
   position: fixed;
   left : 10px;
   top : 10px;
   z-index: 9;
   color : #77798c
  
`