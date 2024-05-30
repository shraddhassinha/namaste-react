import { addItem } from "../utils/cartSlice";
import { CDN_URL } from "../utils/constant";
import { useDispatch, useSelector } from "react-redux";

const ResMenuItems = ({ menu }) => {
  const dispatch = useDispatch();

  return (
    <div
      data-testid="menuItem"
      key={menu?.card?.info?.id}
      className="border-solid border-b-2 m-2 p-2 flex justify-between"
    >
      <div>
        <h4 className="font-bold font-serif">{menu?.card?.info?.name}</h4>
        <p>₹ {menu?.card?.info?.price / 100}</p>
        <p className="text-sm text-gray-500">{menu?.card?.info?.description}</p>
      </div>
      <div className="relative">
        <button
          className="absolute top-1 bg-black text-white w-max rounded-md"
          onClick={() => dispatch(addItem(menu))}
        >
          Add +
        </button>
        <img
          className="w-[200px] rounded-md"
          src={CDN_URL + menu?.card?.info?.imageId}
        />
      </div>
    </div>
  );
};
export default ResMenuItems;
