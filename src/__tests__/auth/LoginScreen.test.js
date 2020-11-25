import React from "react";
import { mount } from "enzyme";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";
import { LoginScreen } from "../../auth/LoginScreen";
import { types } from "../../types/types";

describe("Test <LoginScreen/>", () => {
  const mockStore = configureStore([]);
  const initState = {};

  const store = mockStore(initState);
  store.dispatch = jest.fn();
  const wrapper = mount(
    <Provider store={store}>
      <LoginScreen />
    </Provider>
  );
  test("it must be displayed correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });
  test("submitting the form, triggers the action to log", () => {
    wrapper.find("form").prop("onSubmit")({ preventDefault: () => {} });
    expect(store.dispatch).toHaveBeenCalledWith({
      type: types.authLogin,
      email: "admin@gmail.com",
      password: "admin",
    });
  });
});
