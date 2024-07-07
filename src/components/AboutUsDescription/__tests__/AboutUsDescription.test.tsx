import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import AboutUsDescription from "..";

describe("AboutUsDescription Component", () => {
  it("render AboutUsDescription correctly", () => {
    render(<AboutUsDescription />);

    const aboutusdescriptionHeading = screen.getByText("About Us");
    expect(aboutusdescriptionHeading).toBeInTheDocument();
    const firstParagraphElement = screen.getByText(
      /At Quaprix, we're dedicated to providing cutting-edge information technology \(IT\) services that drive your business forward\./
    );
    expect(firstParagraphElement).toBeInTheDocument();

    const secondParagraphElement = screen.getByText(
      /Working as a partner with our clients, we are dedicated to developing effective outsourcing partnerships in order to reduce operational cost and empowering them to devote more time to their core business\./
    );
    expect(secondParagraphElement).toBeInTheDocument();

    const thirdParagraphElement = screen.getByText(
      /We have served different industries like field service management, IoT-Utilities, healthcare, predictive analysis, financial services, retail & eCommerce, blockchain, and workflow automation etc\. We deliver solutions that open a world of possibilities for our clients\./
    );
    expect(thirdParagraphElement).toBeInTheDocument();
  });
});
