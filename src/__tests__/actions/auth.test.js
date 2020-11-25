import { types } from "../../types/types";
import { authLogin, authLogout } from "../../actions/auth";

describe("Auth actions test", () => {
  test("login action must be correct", () => {
    expect(authLogin("j@gmail.com", "12345")).toEqual({
      type: types.authLogin,
      email: "j@gmail.com",
      password: "12345",
    });
  });
  test("logout action must be correct", () => {
    expect(authLogout()).toEqual({
      type: types.authLogout,
    });
  });
});
