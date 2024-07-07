import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import PartnersBanner from "..";

describe("PartnerBanner Component", () => {
  it("renders the PartnerBanner correctly", () => {
    render(<PartnersBanner />);

    expect(screen.getByText("Our Partner")).toBeInTheDocument();
    const partnerIcon = screen.getByAltText("Partner Icon");
    expect(partnerIcon).toBeInTheDocument();
    expect(partnerIcon.tagName).toBe("IMG");
    expect(partnerIcon.getAttribute("src")).toMatch(/partner-icon\.png$/);
  });
});
