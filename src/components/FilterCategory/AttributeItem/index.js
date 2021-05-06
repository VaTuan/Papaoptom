import React, { memo } from "react";

function AttributeItem(props) {
  const { attribute, handleChange } = props;

  return (
    <div className="custom-control custom-checkbox">
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
    </div>
  );
}

export default memo(AttributeItem);
