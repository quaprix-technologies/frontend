import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import ServicesBanner from "..";

describe("ServicesBanner Component", () => {
  it("render ServicesBanner correctly", () => {
    render(
      <MemoryRouter>
        <ServicesBanner />
      </MemoryRouter>
    );

    const serviceBannerText = screen.getByText(
      /Looking for a Partner to Support Your Business Growth or Monetize Your Idea\?/
    );
    expect(serviceBannerText).toBeInTheDocument();

    const contactButton = screen.getByRole("button");
    expect(contactButton).toBeInTheDocument();
  });
});
