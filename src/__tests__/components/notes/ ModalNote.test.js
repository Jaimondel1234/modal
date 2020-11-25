import React from "react";
import { notesListMock } from "../../../__mocks__/notesListMock";
import { mount } from "enzyme";
import { NoteCard } from "../../../components/notes/NoteCard";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";
import { ModalNote } from "../../../components/notes/ModalNote";

describe("Test <ModalNote/>", () => {
  const mockStore = configureStore([]);

  const store = mockStore({
    ui: {
      modalOpen: true,
    },
    notes: {
      activeNote: null,
    },
  });

  const wrapper = mount(
    <Provider store={store}>
      <ModalNote />
    </Provider>
  );

  test("it must be displayed correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });
  test("If there is not an active note, the text must be correct", () => {
    expect(wrapper.find("core__TextStyle").at(0).text()).toBe(
      "Create your Note"
    );
  });
  test("If there is  an active note, the text must be correct", () => {
    const mockStore = configureStore([]);

    const store = mockStore({
      ui: {
        modalOpen: true,
      },
      notes: {
        activeNote: notesListMock[0],
      },
    });

    const wrapper = mount(
      <Provider store={store}>
        <ModalNote />
      </Provider>
    );
    expect(wrapper.find("core__TextStyle").at(0).text()).toBe(
      "Change your Note"
    );
  });
});
