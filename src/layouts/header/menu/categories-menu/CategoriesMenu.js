import React from "react";

function CategoriesMenu(props) {
  const { items } = props;

  const removeTitle = (categories) => {
    return categories?.map((x) => {
      if (!x.title) {
        return "abc";
      }
      //   if (!x?.title && x?.children?.length > 0) {
      //     return [...x.children];
      //   }
      return x;
    });
  };

  const formatData = (items) => {
    console.log({ items });
    return removeTitle(items).map((item) => {
      if (item?.children?.length > 0) {
        formatData(item.children);
      }
      return item;
    });
  };

  console.log("itme nè : ", formatData(items));
  return (
    <div>
      <h2>Menu</h2>
    </div>
  );
}

export default CategoriesMenu;
