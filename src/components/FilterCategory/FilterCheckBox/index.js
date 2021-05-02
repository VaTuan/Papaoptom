import React, { useState } from "react";
import styled from "styled-components";

function FilterCheckBox(props) {
  const { value } = props;

  const [valueSeleted, setValueSelected] = useState("");

  //   const handleInputChange = (e) => {
  //     setValueSelected(e.target.value);
  //   };

  //   console.log("value selected : ", valueSeleted);
  return (
    <WrapperFilterCheckboxItem title="Checkbox item">
      <input
        type="checkbox"
        value={value}
        // checked={}
        name="valueSeleted"
        // onChange={handleInputChange}
      />
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
