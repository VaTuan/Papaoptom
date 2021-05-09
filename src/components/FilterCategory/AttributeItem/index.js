import React, { memo } from "react";
import styled from "styled-components";

function AttributeItem(props) {
  const { attribute, handleChange } = props;

  return (
    <Wrapper className="custom-control custom-checkbox">
      <input
        type="checkbox"
        className="custom-control-input"
        id={`customCheck1-${attribute.id}`}
        checked={attribute.checked}
        onChange={() => handleChange(attribute.value)}
      />
      <label
        className="custom-control-label"
        htmlFor={`customCheck1-${attribute.id}`}
      >
        {attribute.value}
      </label>
    </Wrapper>
  );
}

export default memo(AttributeItem);

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  input[type="checkbox"] {
    width: 18px;
    height: 18px;
    cursor: pointer;
    border: 2px solid #d5d5d5;
    border-radius: 2px;
    margin-right: 5px;
  }
  label {
    color: #545454;
    font-size: 14px;
  }
`;
