import { render, screen } from "@testing-library/react";

import First from "../first";

describe("First", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<First />);
    expect(baseElement).toBeTruthy();

    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
  });
});
