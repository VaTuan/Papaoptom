import React, { memo, useState } from "react";
import styled from "styled-components";
import { AttributeItem } from "..";

function Attributes(props) {
  const { attributes } = props;
  //   console.log("attributes : ", attributes);

  const listAttributes = attributes.map((item) => {
    return { ...item, checked: false };
  });

  const [attributeSelected, setAttributeSelected] = useState(listAttributes);

  const handleChange = (value) => {
    const copyProducts = [...attributeSelected];
    const modifiedProducts = copyProducts.map((attribute) => {
      if (value === attribute.value) {
        attribute.checked = !attribute.checked;
      }

      return attribute;
    });

    setAttributeSelected(modifiedProducts);
  };

  //   console.log("list adsadsasd: ", attributeSelected);

  const test = [...attributeSelected]
    .filter((x) => x.checked)
    .map((y) => y.value);

  console.log("====================================");
  console.log("checked : ", test);
  console.log("====================================");

  return (
    <WrapperAttributes>
      {attributeSelected &&
        attributeSelected.map((item, index) => (
          <AttributeItem
            key={index}
            attribute={item}
            handleChange={handleChange}
          />
        ))}
    </WrapperAttributes>
  );
}

export default memo(Attributes);

const WrapperAttributes = styled.div``;
