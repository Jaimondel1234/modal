import { types } from "../types/types";

export const noteAddNew = (newNotes) => ({
  type: types.noteAddNew,
  newNotes,
});

export const noteDelete = (noteId) => ({
  type: types.noteDeleted,
  noteId,
});

export const noteSetActive = (activeNote) => ({
  type: types.noteSetActive,
  activeNote,
});

export const noteUpdate = (note) => ({
  type: types.noteUpdate,
  note,
});

export const setListMode = (mode) => ({
  type: types.noteSetListMode,
  mode,
});

export const noteReset = () => ({
  type: types.noteReset,
});
