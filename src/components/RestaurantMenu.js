import { useState } from "react";
import { useParams } from "react-router";
import ShimmerUI from "./ShimmerUi";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

function RestaurantMenu() {
  const { resId } = useParams();
  const [resInfo, category] = useRestaurantMenu(resId);
  const [showIndex, setShowIndex] = useState(0);
  // const [showItems, setShowItems] = useState(false);
  const handleClick = (index) =>
    index === showIndex ? setShowIndex(null) : setShowIndex(index);

  //   const [resInfo, setResInfo] = useState(null);
  //   const [menu, setMenu] = useState(null);
  if (!resInfo) return <ShimmerUI />;
  console.log(resInfo, category);
  const { name, cuisines } = resInfo;
  return (
    <div
      key={resInfo.id}
      className="flex flex-wrap justify-center w-6/12 m-auto"
    >
      <div key={resInfo.id} className="w-full">
        <h1 className="font-bold text-5xl mb-3">{name}</h1>
        <h3>{cuisines.join(", ")}</h3>
        <div>
          {category?.map((category, index) => (
            <RestaurantCategory
              categoryData={category?.card?.card}
              showitems={index === showIndex}
              setShowIndex={() => handleClick(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default RestaurantMenu;
