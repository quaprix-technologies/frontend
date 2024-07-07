import { describe, expect, it, vi } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import Card from "..";

describe("Card Component", () => {
  const mockProps = {
    icon: "icon.png",
    title: "Card title",
    content: "Card content",
    link: {
      label: "Link label",
      url: "test-url",
      elementId: "12345",
    },
    onLinkClick: vi.fn(),
  };

  it("renders the card correctly", () => {
    render(<Card {...mockProps} />);

    const iconElement = screen.getByAltText("icon");
    const titleElement = screen.getByText(mockProps.title);
    const contentElement = screen.getByText(mockProps.content);
    const linkLabelElement = screen.getByText(mockProps.link.label);

    expect(iconElement).toHaveAttribute("src", mockProps.icon);
    expect(titleElement).toBeInTheDocument();
    expect(contentElement).toBeInTheDocument();
    expect(linkLabelElement).toBeInTheDocument();
  });

  it("calls onLinkClick with correct arguments when the link is clicked", () => {
    render(<Card {...mockProps} />);

    const linkLabelElement = screen.getByText(mockProps.link.label);
    fireEvent.click(linkLabelElement);

    expect(mockProps.onLinkClick).toHaveBeenCalledWith(
      mockProps.link.url,
      mockProps.link.elementId,
    );
  });

  it("does not render the icon if not provided", () => {
    const { icon: _, ...restProps } = mockProps;
    render(<Card {...restProps} />);

    const iconElement = screen.queryByAltText("icon");
    expect(iconElement).not.toBeInTheDocument();
  });

  it("does not render the link if not provided", () => {
    const { link: _, ...restProps } = mockProps;
    render(<Card {...restProps} />);

    const linkLabelElement = screen.queryByText(mockProps.link.label);
    expect(linkLabelElement).not.toBeInTheDocument();
  });
});
