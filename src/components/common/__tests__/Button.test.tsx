import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Button from "../Button";

describe("Button component", () => {
  it("renders correctly and matches snapshot", () => {
    const { asFragment } = render(<Button variant="primary">Click Me</Button>);
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders with default variant", () => {
    render(<Button>Click Me</Button>);
    const buttonElement = screen.getByRole("button", { name: /click me/i });
    expect(buttonElement).toHaveClass("btn btn-primary");
  });

  it("renders with specified variant", () => {
    render(<Button variant="secondary">Click Me</Button>);
    const buttonElement = screen.getByRole("button", { name: /click me/i });
    expect(buttonElement).toHaveClass("btn btn-secondary");
  });
});
