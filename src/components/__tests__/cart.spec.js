import { fireEvent, render, screen } from "@testing-library/react";
import RestaurantMenu from "../RestaurantMenu";
import mockdata from "../../utils/mockResMenuData.json";
import { act } from "react";
import { Provider } from "react-redux";
import appStore from "../../utils/store";
import HeaderComponent from "../HeaderComponent";
import Cart from '../Cart'
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";

global.fetch = jest.fn(() =>
  Promise.resolve({ json: () => Promise.resolve(mockdata) })
);

test("on page load ", async () => {
  await act(() =>
    render(
      <Provider store={appStore}>
        <RestaurantMenu />
      </Provider>
    )
  );
  const menuItems = screen.getAllByTestId("menuItem");
  expect(menuItems.length).toBe(46);
});

test("on closing accordian", async () => {
  await act(() =>
    render(
      <Provider store={appStore}>
        <RestaurantMenu />
      </Provider>
    )
  );
  const getAccordian = screen.getByText("McSaver Combos (2pc Combos)");
  fireEvent.click(getAccordian);
  expect(screen.queryByTestId("menuItem")).not.toBeInTheDocument();
});

test("on adding items to cart, change in header", async () => {
  await act(() =>
    render(
      <Provider store={appStore}>
        <BrowserRouter>
          <HeaderComponent />
          <RestaurantMenu />
          <Cart/>
        </BrowserRouter>
      </Provider>
    )
  );
  const addButton = screen.getAllByRole("button", { name: "Add +" });
  fireEvent.click(addButton[0]);
  fireEvent.click(addButton[1]);
  const cartText = screen.getAllByText(/Cart/)
  expect(cartText[0]).toBeInTheDocument();
  const menuItems = screen.getAllByTestId("menuItem");
  //46 elements  in menu page and 2 items that were added in cart also in document
  expect(menuItems.length).toBe(48);
});
