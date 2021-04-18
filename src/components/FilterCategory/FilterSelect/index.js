import React from "react";

import Select from "react-select";
import makeAnimated from "react-select/animated";

function FilterSelect(props) {
  const { options } = props;
  const animatedComponents = makeAnimated();

  const listFilter = options.map((item) => item.title);
  console.log("====================================");
  console.log({ options });
  console.log("====================================");

  const colourOptions = [
    { value: "ocean", label: "Ocean", color: "#00B8D9", isFixed: true },
    { value: "blue", label: "Blue", color: "#0052CC", isDisabled: true },
    { value: "purple", label: "Purple", color: "#5243AA" },
    { value: "red", label: "Red", color: "#FF5630", isFixed: true },
    { value: "orange", label: "Orange", color: "#FF8B00" },
    { value: "yellow", label: "Yellow", color: "#FFC400" },
    { value: "green", label: "Green", color: "#36B37E" },
    { value: "forest", label: "Forest", color: "#00875A" },
    { value: "slate", label: "Slate", color: "#253858" },
    { value: "silver", label: "Silver", color: "#666666" },
  ];

  return (
    <Select
      closeMenuOnSelect={false}
      components={animatedComponents}
      defaultValue={[colourOptions[4], colourOptions[5]]}
      isMulti
      options={colourOptions}
    />
  );
}

export default FilterSelect;
