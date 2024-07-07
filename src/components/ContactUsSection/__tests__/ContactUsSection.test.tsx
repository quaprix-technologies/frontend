import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import ContactUsSection from "..";

describe("ContactUsSection Component", () => {
  it("render contact information correctly", () => {
    render(<ContactUsSection />);

    const contactUsText = screen.getByText("CONTACT US");
    const addressText = screen.getByText(
      "D-A-5, Veer Savarkar Block, Dayanand Colony, Shakarpur, New Delhi, Delhi, 110092"
    );
    const emailText = screen.getByText("info@quaprix.com");
    const phoneText = screen.getByText("+91-9958413035");

    expect(contactUsText).toBeInTheDocument();
    expect(addressText).toBeInTheDocument();
    expect(emailText).toBeInTheDocument();
    expect(phoneText).toBeInTheDocument();
  });

  it("renders images correctly", () => {
    render(<ContactUsSection />);

    const locationIcon = screen.getByAltText("Location");
    const mailIcon = screen.getByAltText("Mail");
    const phoneIcon = screen.getByAltText("Phone");

    expect(locationIcon).toBeInTheDocument();
    expect(locationIcon.tagName).toBe("IMG");
    expect(locationIcon.getAttribute("src")).toMatch(/location-icon\.png/);

    expect(mailIcon).toBeInTheDocument();
    expect(mailIcon.tagName).toBe("IMG");
    expect(mailIcon.getAttribute("src")).toMatch(/mail-icon\.png/);

    expect(phoneIcon).toBeInTheDocument();
    expect(phoneIcon.tagName).toBe("IMG");
    expect(phoneIcon.getAttribute("src")).toMatch(/phone-icon\.png/);
  });
});
