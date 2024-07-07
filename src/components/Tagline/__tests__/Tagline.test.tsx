import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import Tagline from "..";

describe("Tagline Component", () => {
  it("render the Tagline Component correctly ", () => {
    render(<Tagline />);

    const taglineHrading = screen.getByText(/Your vision/);
    expect(taglineHrading).toBeInTheDocument();

    const quoteImage = screen.getByAltText("Left quotation mark");
    expect(quoteImage).toBeInTheDocument();
    expect(quoteImage.tagName).toBe("IMG");
    expect(quoteImage.getAttribute("src")).toMatch(/quote-left\.png$/);

    const pointsImage = screen.getByAltText("Decorative points");
    expect(pointsImage).toBeInTheDocument();
    expect(pointsImage.tagName).toBe("IMG");
    expect(pointsImage.getAttribute("src")).toMatch(/point\.png$/);
  });
});
