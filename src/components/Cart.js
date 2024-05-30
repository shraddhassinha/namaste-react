import { useDispatch, useSelector } from "react-redux";
import ResMenuItems from "./ResMenuItems";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  return (
    <div className="w-6/12 m-auto">
      <h1 className="text-purple-950 text-2xl font-bold m-2 align-middle">
        CART ITEMS
      </h1>
      <button
        className="bg-purple-950 text-white rounded-sm p-2"
        onClick={() => dispatch(clearCart())}
      >
        Clear Cart
      </button>
      {cartItems.map((menu) => (
        <ResMenuItems menu={menu} />
      ))}
    </div>
  );
};
export default Cart;
