import { CDN_URL } from "../utils/constant";

const RestaurantCard = (props) => {
  const { restaurantInfo } = props;
  const {
    name,
    costForTwo,
    cuisines,
    avgRatingString,
    slaString,
    cloudinaryImageId,
  } = restaurantInfo;
  return (
    <div
      data-testid="resCard"
      className=" min-h-96 w-48 m-1 p-1"
      style={{ backgroundColor: "#f0f0f0" }}
    >
      <img className="p-2" src={CDN_URL + cloudinaryImageId}></img>
      <h3>{name}</h3>
      <h6>{cuisines?.join(", ")}</h6>
      <h6>{avgRatingString} rating</h6>
      <h6>{slaString}</h6>
      <h6>{costForTwo}</h6>
    </div>
  );
};
// Higher order component
export const withPromotedRestaurant = (ResCard) => {
  return (props) => {
    const {
      restaurantInfo: { aggregatedDiscountInfoV3 },
    } = props;
    const {
      header,
      subHeader = "",
      discountTag = "",
    } = aggregatedDiscountInfoV3;
    return (
      <div className="relative">
        <div className="absolute text-lg bg-cyan-400 rounded-sm text-white">
          {header + " " + subHeader}
        </div>
        <div className="absolute text-lg bg-green-100 rounded-sm top-7">
          {discountTag}
        </div>
        <ResCard {...props} />
      </div>
    );
  };
};
export default RestaurantCard;
