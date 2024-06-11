import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Skeleton from "../Skeleton";

describe("Skeleton Component", () => {
  it("should render correctly and match snapshot", () => {
    const { asFragment } = render(<Skeleton />);
    expect(asFragment()).toMatchSnapshot();
  });
});
