import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import UserCard from "../UserCard";

import RAW_USERS from "../../api/__tests__/usersMock.json";

const SAMPLE_USER = RAW_USERS[0];

describe("UserCard Component", () => {
  it("should render correctly and match snapshot", () => {
    const { asFragment } = render(
      <UserCard
        id={SAMPLE_USER.id}
        firstname={SAMPLE_USER.firstname}
        lastname={SAMPLE_USER.lastname}
        avatar={SAMPLE_USER.avatar}
        description={SAMPLE_USER.description}
        role={SAMPLE_USER.role}
        onViewMore={() => {}}
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('should call onViewMore with correct user ID when "View More" button is clicked', () => {
    const onViewMoreMock = jest.fn();
    const { getByText } = render(
      <UserCard
        id={SAMPLE_USER.id}
        firstname={SAMPLE_USER.firstname}
        lastname={SAMPLE_USER.lastname}
        avatar={SAMPLE_USER.avatar}
        description={SAMPLE_USER.description}
        role={SAMPLE_USER.role}
        onViewMore={onViewMoreMock}
      />
    );
    const viewMoreButton = getByText("View More");
    fireEvent.click(viewMoreButton);
    expect(onViewMoreMock).toHaveBeenCalledWith(SAMPLE_USER.id);
  });
});
