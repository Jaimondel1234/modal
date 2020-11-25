import { types } from '../types/types';

const initialState = {
  notes: JSON.parse(localStorage.getItem('notes')) || [],
  activeNote: null,
  listMode: 'oldToNew',
};

/* 
 Note Reducer
*/
export const noteReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.noteAddNew:
      return {
        ...state,
        notes: [...state.notes, ...action.newNotes],
      };
    case types.noteDeleted:
      return {
        ...state,
        notes: state.notes.filter((note) => note.id !== action.noteId),
      };
    case types.noteSetActive:
      return {
        ...state,
        activeNote: action.activeNote,
      };
    case types.noteUpdate:
      return {
        ...state,
        notes: state.notes.map((note) =>
          note.id === action.note.id ? action.note : note,
        ),
      };
    case types.noteSetListMode:
      return {
        ...state,
        listMode: action.mode,
      };
    case types.noteReset:
      return {
        notes: [],
        activeNote: null,
        listMode: 'oldToNew',
      };

    default:
      return state;
  }
};
