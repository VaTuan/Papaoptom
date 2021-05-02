import React, { memo } from "react";

function AttributeItem(props) {
  return (
    <div className="custom-control custom-checkbox">
      <input
        type="checkbox"
        className="custom-control-input"
        id={`customCheck1-${product.slug}`}
        checked={product.checked}
        onChange={() => handleChange(product.slug)}
      />
      <label
        className="custom-control-label"
        htmlFor={`customCheck1-${product.slug}`}
      >
        {product.name}
      </label>
    </div>
  );
}

export default memo(AttributeItem);
