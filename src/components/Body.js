import { useContext, useEffect, useState } from "react";
import RestaurantCard, { withPromotedRestaurant } from "./RestaurantCard";
import ShimmerUI from "./ShimmerUi";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
// import mockData from "../utils/mock.json";
// const { Restaurants } = mockData;

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchTxt, setSearchTxt] = useState("");
  const { loggedInUser, setUserName } = useContext(UserContext);
  const onlineStatus = useOnlineStatus();
  const RestaurantCardOffers = withPromotedRestaurant(RestaurantCard);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.07480&lng=72.88560&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING",
      { mode: "cors" }
    );
    console.log(data);
    const json = await data.json();
    const cardData =
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    setListOfRestaurants(cardData);
    setFilteredRestaurants(cardData);
    console.log(json);
  };
  if (!onlineStatus)
    return <h1>Looks like your internet connection went off!!</h1>;
  if (listOfRestaurants.length === 0)
    return (
      <div className="flex flex-wrap">
        {[...Array(15)].map((some, index) => (
          <ShimmerUI key={index} />
        ))}
      </div>
    );
  return listOfRestaurants.length === 0 ? (
    <ShimmerUI />
  ) : (
    <div className="">
      <div className="flex justify-center m-4">
        <input
          data-testid="searchInput"
          type="text"
          className="border-solid border-2 border-black-700"
          value={searchTxt}
          onChange={(e) => {
            setSearchTxt(e.target.value);
          }}
        />
        <button
          className="bg-orange-400 text-white px-2"
          onClick={() => {
            const filteredRestaurants = listOfRestaurants.filter((restaurant) =>
              restaurant.info.name
                .toLowerCase()
                .includes(searchTxt.toLowerCase())
            );
            setFilteredRestaurants(filteredRestaurants);
          }}
        >
          Search
        </button>
        <label className="text-orange-400 m-2">Change User :</label>
        <input
          type="text"
          className="border-solid border-2 border-black-700"
          value={loggedInUser}
          onChange={(e) => {
            setUserName(e.target.value);
          }}
        />
      </div>
      <div className="flex justify-center m-4">
        <button
          className="bg-orange-400 text-white px-4 py-2"
          onClick={() => {
            setListOfRestaurants(
              listOfRestaurants.filter((res) => res.info.avgRating > 4)
            );
          }}
        >
          Top Rated restaurants
        </button>
      </div>
      <div className="flex flex-wrap m-4">
        {filteredRestaurants.map((restaurant) => {
          console.log(restaurant.info.aggaggregatedDiscountInfoV3, "shraddha");
          return (
            <Link
              className="border border-solid m-4"
              to={"/restaurant/" + restaurant.info.id}
            >
              {console.log(restaurant?.info?.id, "aggregatedDiscountInfoV3")}
              {restaurant?.info?.aggregatedDiscountInfoV3?.hasOwnProperty(
                "header"
              ) ? (
                <RestaurantCardOffers
                  key={restaurant.info.id}
                  restaurantInfo={restaurant.info}
                />
              ) : (
                <RestaurantCard
                  key={restaurant.info.id}
                  restaurantInfo={restaurant.info}
                />
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
