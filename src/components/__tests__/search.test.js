import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Body from "../Body";
import mockData from "../../utils/mockResListData.json";
import { act } from "react";
import { BrowserRouter } from "react-router-dom";

//needed to write since fetch is a browser api and not presesnt in jsdom hence need to mock it.
global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => Promise.resolve(mockData),
  });
});

test("Integration testing of searching", async () => {
    //needed to write act since setstae is based on fetch api which is async
  await act(
    async () =>
      await render(
        //needed to write as jest doesn't understand Link tag
        <BrowserRouter>
          <Body />
        </BrowserRouter>
      )
  );
  const cardBeforeSearch = screen.getAllByTestId("resCard")
  expect(cardBeforeSearch.length).toBe(20);
  const searchInput = screen.getByTestId("searchInput");
  fireEvent.change(searchInput, { target: { value: "burger" } });
  const searchButton = screen.getByRole("button", { name: "Search" });
  fireEvent.click(searchButton);
  const cardAfterSearch= screen.getAllByTestId("resCard");
  expect(cardAfterSearch.length).toBe(2);
});
