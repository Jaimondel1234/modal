import { types } from '../../types/types';
import {
  noteAddNew,
  noteDelete,
  noteSetActive,
  noteUpdate,
  setListMode,
  noteReset,
} from '../../actions/note';
import { notesListMock } from '../../__mocks__/notesListMock';

describe('Notes actions test', () => {
  test('Add New note must be correct', () => {
    expect(noteAddNew(notesListMock[0])).toEqual({
      type: types.noteAddNew,
      newNotes: notesListMock[0],
    });
  });
  test('Delete Note action must be correct', () => {
    expect(noteDelete(1245)).toEqual({
      type: types.noteDeleted,
      noteId: 1245,
    });
  });
  test('Set Active Note action must be correct', () => {
    expect(noteSetActive(notesListMock[1])).toEqual({
      type: types.noteSetActive,
      activeNote: notesListMock[1],
    });
  });
  test('Update Note action must be correct', () => {
    expect(noteUpdate(notesListMock[1])).toEqual({
      type: types.noteUpdate,
      note: notesListMock[1],
    });
  });
  test('Set List Note Mode action must be correct', () => {
    expect(setListMode('AToZ')).toEqual({
      type: types.noteSetListMode,
      mode: 'AToZ',
    });
  });
  test('Rest Note Action must be correct', () => {
    expect(noteReset()).toEqual({
      type: types.noteReset,
    });
  });
});
