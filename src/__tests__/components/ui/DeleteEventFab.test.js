import React from "react";
import { mount } from "enzyme";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";
import { DeleteEventFab } from "../../../components/ui/DeleteEventFab";
import { noteDelete } from "../../../actions/note";

describe("Test <DeleteEventFab/>", () => {
  const mockStore = configureStore([]);
  const initState = {};

  const store = mockStore(initState);
  store.dispatch = jest.fn();
  const wrapper = mount(
    <Provider store={store}>
      <DeleteEventFab noteId={1234} />
    </Provider>
  );
  test("it must be displayed correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });
  test("if the button is clicked, the note delete action must be dispatched", () => {
    wrapper.find("button").prop("onClick")();
    expect(store.dispatch).toHaveBeenCalledWith(noteDelete(1234));
  });
});
