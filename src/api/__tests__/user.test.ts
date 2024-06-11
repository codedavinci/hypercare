import UserAPI from "../user";
import axios from "axios";

jest.mock("axios");

import rawUsers from "./usersMock.json";
const OPTIONS = {
  baseURL: "https://9e06da9a-97cf-4701-adfc-9b9a5713bbb9.mock.pstmn.io",
};

describe("UserAPI", () => {
  let userAPI: UserAPI;

  beforeEach(() => {
    userAPI = new UserAPI();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should fetch and normalize users correctly", async () => {
    jest.spyOn(axios, "get").mockResolvedValue({
      data: {
        data: {
          users: rawUsers,
        },
      },
    });

    const users = await userAPI.getUsers();

    expect(users).toEqual({
      "1": rawUsers[0],
      "2": rawUsers[1],
    });
    expect(axios.get).toHaveBeenCalledWith("/users", OPTIONS);
  });

  it("should handle empty user list", async () => {
    jest.spyOn(axios, "get").mockResolvedValue({
      data: {
        data: {
          users: [],
        },
      },
    });

    const users = await userAPI.getUsers();

    expect(users).toEqual({});
    expect(axios.get).toHaveBeenCalledWith("/users", OPTIONS);
  });
});
