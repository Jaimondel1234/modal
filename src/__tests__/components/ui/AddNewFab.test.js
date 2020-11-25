import React from "react";
import { mount } from "enzyme";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";
import { AddNewFab } from "../../../components/ui/AddNewFab";
import { uiOpenModal } from "../../../actions/ui";

describe("Test <AddNewFab/>", () => {
  const mockStore = configureStore([]);
  const initState = {};

  const store = mockStore(initState);
  store.dispatch = jest.fn();
  const wrapper = mount(
    <Provider store={store}>
      <AddNewFab />
    </Provider>
  );
  test("it must be displayed correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });
  test("if the button is clicked, the open modal action must be dispatched", () => {
    wrapper.find("button").prop("onClick")();
    expect(store.dispatch).toHaveBeenCalledWith(uiOpenModal());
  });
});
