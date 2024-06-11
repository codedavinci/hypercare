import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Ellipsis from "../Ellipsis";

describe("Ellipsis Component", () => {
  const sampleText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";

  it("should render correctly and match snapshot", () => {
    const { asFragment } = render(<Ellipsis text={sampleText} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("should display the provided text", () => {
    render(<Ellipsis text={sampleText} />);
    expect(screen.getByText(sampleText)).toBeInTheDocument();
  });

  it("should apply the correct class for line clamping", () => {
    render(<Ellipsis text={sampleText} />);
    const ellipsisElement = screen.getByText(sampleText);
    expect(ellipsisElement).toHaveClass("line-clamp-3");
  });
});
