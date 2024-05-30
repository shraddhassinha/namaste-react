import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("contact us test suite", () => {
  it("should load contact us page", () => {
    render(<Contact />);
    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
  });
  it("should load contact us page", () => {
    render(<Contact />);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });
  it("should load contact us page", () => {
    render(<Contact />);
    // const input = screen.getByRole("textbox", { name: "Name" });
    // expect(heading).toBeInTheDocument();
  });
});
