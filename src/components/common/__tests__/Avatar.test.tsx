import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Avatar from "../Avatar";

describe("Avatar", () => {
  it("renders correctly and matches snapshot", () => {
    const { asFragment } = render(
      <Avatar src="https://via.placeholder.com/150" altText="User Avatar" />
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders with correct src and alt attributes", () => {
    const src = "https://via.placeholder.com/150";
    const altText = "User Avatar";
    render(<Avatar src={src} altText={altText} />);

    const imgElement = screen.getByAltText(altText);
    expect(imgElement).toHaveAttribute("src", src);
    expect(imgElement).toHaveAttribute("alt", altText);
  });

  // Unit test for default alt attribute
  it("renders with default alt text if none is provided", () => {
    const src = "https://via.placeholder.com/150";
    render(<Avatar src={src} />);

    const imgElement = screen.getByRole("img");
    expect(imgElement).toHaveAttribute("src", src);
    expect(imgElement).toHaveAttribute("alt", " ");
  });
});
