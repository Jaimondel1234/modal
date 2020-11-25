import React from "react";
import { NotesScreen } from "../../../components/notes/NotesScreen";
import { notesListMock } from "../../../__mocks__/notesListMock";
import configureStore from "redux-mock-store";
import { mount } from "enzyme";
import { Provider } from "react-redux";

describe("Test <NotesScreen/>", () => {
  const mockStore = configureStore([]);
  const initState = {
    notes: {
      notes: notesListMock,
    },
    ui: {
      modalOpen: true,
    },
  };

  const store = mockStore(initState);

  const wrapper = mount(
    <Provider store={store}>
      <NotesScreen />
    </Provider>
  );
  test("it must be displayed correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });
  test("if modal open true, the modal must be showed", () => {
    expect(wrapper.find("ModalNote").at(0).exists()).toBe(true);
  });
});
