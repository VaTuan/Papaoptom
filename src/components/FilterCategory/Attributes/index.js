import React, { memo } from "react";

function Attributes(props) {
  const { attributes } = props;
  console.log({ attributes });
  return <div></div>;
}

export default memo(Attributes);
