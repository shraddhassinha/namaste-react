import { useState } from "react";
import ResMenuItems from "./ResMenuItems";

const RestaurantCategory = ({ categoryData, showitems, setShowIndex }) => {
  console.log(categoryData, "categorydata shra");
  const categoryTitle = categoryData?.title || categoryData?.categories?.title;
  const menuItems =
    categoryData?.itemCards || categoryData?.categories[0]?.itemCards;
  console.log(menuItems, "menuItems shra");
  return (
    <div className="border-b-8 border-gray-100">
      <div
        className="flex justify-between hover:bg-gray-100 cursor-pointer"
        onClick={setShowIndex}
      >
        <h2 className="m-4 text-2xl text-orange-400">{categoryTitle}</h2>
        <div className="text-3xl m-2">⌄</div>
      </div>
      {showitems && menuItems.map((menu) => <ResMenuItems menu={menu} />)}
    </div>
  );
};

export default RestaurantCategory;
