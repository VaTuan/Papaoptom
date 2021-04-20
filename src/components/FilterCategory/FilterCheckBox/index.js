import React from "react";
import styled from "styled-components";

// FilterSelect.prototype = {
//     title :
// }

function FilterCheckBox(props) {
  const { value } = props;
  return (
    <WrapperFilterCheckboxItem title="Checkbox item">
      <input type="checkbox" />
      <span>{value}</span>
    </WrapperFilterCheckboxItem>
  );
}

export default FilterCheckBox;

export const WrapperFilterCheckboxItem = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-bottom: 3px;

  input[type="checkbox"] {
    width: 18px;
    height: 18px;
    cursor: pointer;
    border: 2px solid #d5d5d5;
    border-radius: 2px;
    margin-right: 5px;
  }
  span {
    color: #545454;
    font-size: 14px;
  }
`;
