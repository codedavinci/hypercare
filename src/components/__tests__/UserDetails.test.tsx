import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import UserDetails from "../UserDetails";

import RAW_USERS from "../../api/__tests__/usersMock.json";

const SAMPLE_USER = RAW_USERS[0];

describe("UserDetails Component", () => {
  it("should render correctly and match snapshot", () => {
    const { asFragment } = render(<UserDetails user={SAMPLE_USER} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("should render user details correctly", () => {
    const { getByText } = render(<UserDetails user={SAMPLE_USER} />);
    expect(getByText("@johndoe")).toBeInTheDocument();
    expect(getByText("user")).toBeInTheDocument(); // Assuming the role is displayed in lowercase
    expect(getByText("A sample user")).toBeInTheDocument();
    expect(getByText("Email: johndoe@example.com")).toBeInTheDocument();
    expect(
      getByText(
        `Starting Date: ${new Date(SAMPLE_USER.join_date).toLocaleDateString()}`
      )
    ).toBeInTheDocument();
  });
});
