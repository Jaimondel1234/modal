import React from "react";
import { mount } from "enzyme";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";
import { types } from "../../types/types";
import { AppRouter } from "../../routers/AppRouter";

const user = { email: "admin", password: "1234" };
localStorage.setItem("user", JSON.stringify(user));

describe("Test <AppRouter/>", () => {
  const mockStore = configureStore([]);
  const initState = {
    auth: { user: {} },
  };

  const store = mockStore(initState);
  store.dispatch = jest.fn();

  test("it must be displayed correctly", () => {
    const wrapper = mount(
      <Provider store={store}>
        <AppRouter />
      </Provider>
    );
    expect(wrapper).toMatchSnapshot();
  });
  test("if logged in, user information must be stored in redux", () => {
    expect(store.dispatch).toHaveBeenCalledWith({
      type: types.authLogin,
      email: "admin",
      password: "1234",
    });
  });
});
