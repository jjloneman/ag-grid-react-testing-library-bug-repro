import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import App from "./App";

test("successfully clicks a button inside ag-grid", async () => {
  const mockOnClick = jest.fn();
  render(<App onClick={mockOnClick} />);

  const buttonElement = await screen.findByText("Click Me");
  expect(buttonElement).toBeInTheDocument();

  userEvent.click(buttonElement);
  expect(mockOnClick).toBeCalledTimes(1);
});
