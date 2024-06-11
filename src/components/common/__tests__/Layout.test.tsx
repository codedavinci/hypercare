import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Layout from "../Layout";

describe("Layout Component", () => {
  const sampleChildren = (
    <>
      <div>Child 1</div>
      <div>Child 2</div>
    </>
  );

  it("should render correctly and match snapshot", () => {
    const { asFragment } = render(<Layout>{sampleChildren}</Layout>);
    expect(asFragment()).toMatchSnapshot();
  });

  it("should render children correctly", () => {
    render(<Layout>{sampleChildren}</Layout>);
    expect(screen.getByText("Child 1")).toBeInTheDocument();
    expect(screen.getByText("Child 2")).toBeInTheDocument();
  });

  it("should apply the correct classes", () => {
    render(<Layout>{sampleChildren}</Layout>);
    const layoutElement = screen.getByRole("group"); // We need to give the container a role for testing
    expect(layoutElement).toHaveClass("m-10");
    expect(layoutElement).toHaveClass("grid");
    expect(layoutElement).toHaveClass("grid-cols-1");
    expect(layoutElement).toHaveClass("sm:grid-cols-2");
    expect(layoutElement).toHaveClass("md:grid-cols-3");
    expect(layoutElement).toHaveClass("lg:grid-cols-4");
    expect(layoutElement).toHaveClass("gap-4");
  });
});
