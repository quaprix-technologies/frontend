import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import Copyright from "..";

describe("Copyright Component", () => {
  it("render the Copyright correctly", () => {
    render(<Copyright />);

    const hr = screen.getByRole("separator");
    expect(hr).toBeInTheDocument();

    const copyrightMessage = screen.getByText(
      /Copyright © 2024 Quaprix Technologies - All Rights Reserved./i
    );
    expect(copyrightMessage).toBeInTheDocument();
  });
});
