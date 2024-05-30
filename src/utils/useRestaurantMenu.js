import { useState, useEffect } from "react";
import { MENU_URL } from "../utils/constant";

const useRestaurantMenu = (resId) => {
  const [category, setCategory] = useState([]);
  const [resInfo, setResInfo] = useState(false);
  fetchResData = async () => {
    const data = await fetch(MENU_URL + resId);
    const json = await data.json();
    setResInfo(json?.data?.cards[2]?.card?.card?.info);
    const menuPageData =
      json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
    const menu = menuPageData.filter((data) => {
      console.log(data?.card?.card["@type"], "shracard");
      return data?.card?.card["@type"]?.includes("ItemCategory");
    });
    console.log(menu, "shra");
    setCategory(
      //   json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      //     ?.card?.itemCards
      menu
    );
  };
  useEffect(() => {
    fetchResData();
  }, []);
  return [resInfo, category];
};

export default useRestaurantMenu;
