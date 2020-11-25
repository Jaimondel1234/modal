import React from "react";
import { mount } from "enzyme";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";
import { uiOpenModal } from "../../../actions/ui";
import { ModifyNoteFab } from "../../../components/ui/ModifyNoteFab";
import { notesListMock } from "../../../__mocks__/notesListMock";
import { noteSetActive } from "../../../actions/note";

describe("Test <ModifyNoteFab/>", () => {
  const mockStore = configureStore([]);

  const store = mockStore({});
  store.dispatch = jest.fn();
  const wrapper = mount(
    <Provider store={store}>
      <ModifyNoteFab note={notesListMock[0]} />
    </Provider>
  );
  test("it must be displayed correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });
  test("if the button is clicked, the open modal action must be dispatched", () => {
    wrapper.find("button").prop("onClick")();
    expect(store.dispatch).toHaveBeenNthCalledWith(
      1,
      noteSetActive(notesListMock[0])
    );
    expect(store.dispatch).toHaveBeenNthCalledWith(2, uiOpenModal());
  });
});
