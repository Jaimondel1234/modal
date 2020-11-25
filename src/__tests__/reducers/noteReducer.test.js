import { types } from "../../types/types";
import { noteReducer } from "../../reducers/noteReducer";
import { notesListMock } from "../../__mocks__/notesListMock";

describe("Note Reducer Test", () => {
  const initState = {
    notes: [notesListMock[0]],
    activeNote: null,
    listMode: "oldToNew",
  };
  test("it must return the default value ", () => {
    const state = noteReducer(initState, {});
    expect(state).toEqual(initState);
  });
  test("it must add the note list", () => {
    const action = {
      type: types.noteAddNew,
      newNotes: [notesListMock[1]],
    };
    const state = noteReducer(initState, action);
    expect(state.notes).toEqual([notesListMock[0], notesListMock[1]]);
  });

  test("it must update a note", () => {
    const initState = {
      notes: [notesListMock[0]],
      activeNote: null,
      listMode: "oldToNew",
    };
    const action = {
      type: types.noteUpdate,
      note: {
        id: 125465,
        title: "first element modified",
        description: "description first element",
        imgUrl: "",
      },
    };
    const state = noteReducer(initState, action);
    expect(state.notes).toEqual([
      {
        id: 125465,
        title: "first element modified",
        description: "description first element",
        imgUrl: "",
      },
    ]);
  });
  test("it must delete a note of the list", () => {
    const action = {
      type: types.noteDeleted,
      noteId: notesListMock[0].id,
    };
    const state = noteReducer(initState, action);
    expect(state.notes).toEqual([]);
  });
  test("it must changer the active notes", () => {
    const action = {
      type: types.noteSetActive,
      activeNote: notesListMock[1],
    };
    const state = noteReducer(initState, action);
    expect(state.activeNote).toEqual(notesListMock[1]);
  });
  test("it must changer the mode to show a list", () => {
    const action = {
      type: types.noteSetListMode,
      mode: "newToOld",
    };
    const state = noteReducer(initState, action);
    expect(state.listMode).toBe("newToOld");
  });
  test("it must reset the list of notes", () => {
    const action = {
      type: types.noteReset,
    };
    const state = noteReducer(initState, action);
    expect(state).toEqual({
      notes: [],
      activeNote: null,
      listMode: "oldToNew",
    });
  });
});
