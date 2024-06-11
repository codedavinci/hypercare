import axios from "axios";
import { User } from "../types";

const BASE_URL =
  "https://9e06da9a-97cf-4701-adfc-9b9a5713bbb9.mock.pstmn.io" as const;

export type UserId = string;
export type UserMap = Record<UserId, User>;

class UserAPI {
  private normalizeUsers(rawUsers: User[]) {
    return rawUsers.reduce((acc, user) => {
      acc[user.id] = { ...user };

      return acc;
    }, {} as UserMap);
  }

  async getUsers(): Promise<UserMap> {
    const { data } = await axios.get("/users", {
      baseURL: BASE_URL,
    });

    const users = data?.data?.users as User[];

    return this.normalizeUsers(users);
  }
}

export default UserAPI;
