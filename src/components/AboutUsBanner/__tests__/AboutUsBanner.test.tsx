import { describe, expect, it } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import AboutUsBanner from "..";

describe("AboutUsBanner Component", () => {
  it("renders the AboutUsBanner Component correctly", () => {
    render(
      <MemoryRouter>
        <AboutUsBanner />
      </MemoryRouter>
    );

    expect(screen.getByText(/Get In Touch With Us/i)).toBeInTheDocument();
    fireEvent.click(screen.getByRole("button"));
    expect(screen.getByRole("button")).toBeInTheDocument();
  });
});
