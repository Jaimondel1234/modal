import { types } from "../types/types";

export const authLogin = (email, password) => ({
  type: types.authLogin,
  email,
  password,
});

export const authLogout = () => ({
  type: types.authLogout,
});
