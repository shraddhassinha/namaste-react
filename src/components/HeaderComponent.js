import { LOGO_URL } from "../utils/constant";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useContext } from "react";
import { useSelector } from "react-redux";
import { useState } from "react";

const HeaderComponent = () => {
  const { loggedInUser } = useContext(UserContext);
  const cartItems = useSelector((store) => store.cart.items);
  const [val, setVal] = useState("Login");
  return (
    <div className="flex justify-between bg-rose-100">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL}></img>
      </div>
      <div className="flex flex-wrap content-center">
        <ul className="flex">
          <li className="m-4">
            Online Status : {useOnlineStatus() ? "✅" : "❌"}
          </li>
          <li className="m-4">
            <Link to="/">Home</Link>
          </li>
          <li className="m-4">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="m-4">
            <Link to="/about">About Us</Link>
          </li>
          <li className="m-4">
            <Link to="/cart">Cart-({cartItems.length})</Link>
          </li>
          <li>
            <button
              className="m-4"
              onClick={() =>
                val !== "Logout" ? setVal("Logout") : setVal("Login")
              }
            >
              {val}
            </button>
          </li>
          <li className="m-4 font-bold">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default HeaderComponent;
