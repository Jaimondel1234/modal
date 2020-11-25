import { authReducer } from "../../reducers/authReducer";
import { types } from "../../types/types";

describe("Auth Reducer Test", () => {
  const initState = {};
  test("it must return the default value ", () => {
    const state = authReducer(initState, {});
    expect(state).toEqual(initState);
  });
  test("it must log in to user", () => {
    const actionLogin = {
      type: types.authLogin,
      email: "j@gmail.com",
      password: "1234",
    };
    const stateLogin = authReducer(initState, actionLogin);
    expect(stateLogin.user).toEqual({ email: "j@gmail.com", password: "1234" });
  });
  test("it must log out", () => {
    const initState = { email: "j@gmail.com", password: "1234" };
    const actionLogin = {
      type: types.authLogout,
    };
    const stateLogin = authReducer(initState, actionLogin);
    expect(stateLogin.user).toEqual({});
  });
});
