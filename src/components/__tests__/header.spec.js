import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import HeaderComponent from "../HeaderComponent";
import { Provider } from "react-redux";
import appStore from "../../utils/store";
import { BrowserRouter } from "react-router-dom";

test("should render header component", () => {
  render(
    <Provider store={appStore}>
      <BrowserRouter>
        <HeaderComponent />
      </BrowserRouter>
    </Provider>
  );
  const loginButton = screen.getByRole("button", { name: "Login" });
  expect(loginButton).toBeInTheDocument()
  fireEvent.click(loginButton);
  const logoutButton = screen.getByRole("button", { name: "Logout" });
  expect(logoutButton).toBeInTheDocument();
});
