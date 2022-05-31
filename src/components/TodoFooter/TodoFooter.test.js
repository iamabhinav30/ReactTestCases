import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import TodoFooter from "./TodoFooter";

test("WHen no of incomplete task is one", () => {
  render(
    <BrowserRouter>
      <TodoFooter numberOfIncompleteTasks={1} />
    </BrowserRouter>
  );
  expect(screen.getByText(/task/)).toBeInTheDocument();
});

xtest("REGRESSION : When no of incomplete task is more than one", () => {
  render(
    <BrowserRouter>
      <TodoFooter numberOfIncompleteTasks={10} />
    </BrowserRouter>
  );
  expect(screen.getByText(/tasks/)).toBeInTheDocument();
});
