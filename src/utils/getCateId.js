const getCateId = (item) => {
  if (item?.query === null) {
    return "a";
  } else if (item?.query?.categoryIds?.length > 0) {
    return item?.query?.categoryIds[0];
  } else {
    return "a";
  }
};
export default getCateId;
