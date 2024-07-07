import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import AboutUsBanner from "..";

describe("AboutUsBanner Component", () => {
  it("renders AboutUsBanner Component correctly", () => {
    render(
      <MemoryRouter>
        <AboutUsBanner />
      </MemoryRouter>
    );

    expect(screen.getByText(/Get In Touch With Us/i)).toBeInTheDocument();
    expect(screen.getByRole("button")).toBeInTheDocument();
  });
});

