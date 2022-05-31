import React from "react";
import { render, screen } from "@testing-library/react";

import InputFnComp03 from "./InputFnComp03";

describe("InputFnComp03", () => {
  test("renders the component", () => {
    render(<InputFnComp03 />);

    screen.getByText("Search:"); // implicit assertion - if not present, error is thrown.
    expect(screen.getByText("Search:")).toBeInTheDocument(); // explicit assertion
  });
  

  test("renders the component again - check for the textbox", () => {
    render(<InputFnComp03 />);

    expect(screen.getByRole("textbox")).toBeInTheDocument();
  });
});
