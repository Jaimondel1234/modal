import React from 'react';
import { notesListMock } from '../../../__mocks__/notesListMock';
import { mount } from 'enzyme';
import { act } from 'react-dom/test-utils';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { ModalNoteInputs } from '../../../components/notes/ModalNoteInputs';
import { uiCloseModal } from '../../../actions/ui';
import { noteSetActive, noteUpdate, noteAddNew } from '../../../actions/note';
import Swal from 'sweetalert2';

jest.mock('../../../actions/note', () => ({
  noteUpdate: jest.fn(),
  noteSetActive: jest.fn(),
  noteAddNew: jest.fn(),
}));
jest.mock('../../../actions/ui', () => ({
  uiCloseModal: jest.fn(),
}));
jest.mock('sweetalert2', () => ({
  fire: jest.fn(),
}));
describe('Test <ModalNoteInputs/>', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  const mockStore = configureStore([]);
  const store = mockStore({
    notes: { activeNote: null },
  });
  store.dispatch = jest.fn();
  const wrapper = mount(
    <Provider store={store}>
      <ModalNoteInputs />
    </Provider>,
  );
  test('it must be displayed correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
  test('if a new note is created, the actions must be correct', () => {
    wrapper.find('input[name="title"]').simulate('change', {
      target: {
        name: 'title',
        value: 'the title',
      },
    });
    wrapper.find('textarea[name="description"]').simulate('change', {
      target: {
        name: 'description',
        value: 'the decription',
      },
    });

    act(() => {
      wrapper.find('form').at(0).prop('onSubmit')({
        preventDefault() {},
      });
      expect(Swal.fire).toHaveBeenCalledWith('Note Saved', '', 'success');
      expect(uiCloseModal).toHaveBeenCalled();
      expect(noteAddNew).toHaveBeenCalledWith([
        {
          id: expect.any(Number),
          title: 'the title',
          description: 'the decription',
          imgUrl: '',
        },
      ]);
    });
  });
  test('The title input is required', () => {
    wrapper.find('input[name="title"]').simulate('change', {
      target: {
        name: 'title',
        value: '',
      },
    });

    act(() => {
      wrapper.find('form').at(0).prop('onSubmit')({
        preventDefault() {},
      });
      expect(Swal.fire).toHaveBeenCalledWith(
        'The title is required',
        '',
        'error',
      );
    });
  });
  test('The description input is required', () => {
    wrapper.find('input[name="title"]').simulate('change', {
      target: {
        name: 'title',
        value: 'the title',
      },
    });
    wrapper.find('textarea[name="description"]').simulate('change', {
      target: {
        name: 'description',
        value: '',
      },
    });
    act(() => {
      wrapper.find('form').at(0).prop('onSubmit')({
        preventDefault() {},
      });
      expect(Swal.fire).toHaveBeenCalledWith(
        'The description is required',
        '',
        'error',
      );
    });
  });

  test('if there is an active note, the actions dispatched must be correct', () => {
    const mockStore = configureStore([]);
    const store = mockStore({
      notes: { activeNote: notesListMock[0] },
    });
    store.dispatch = jest.fn();
    const wrapper = mount(
      <Provider store={store}>
        <ModalNoteInputs />
      </Provider>,
    );
    wrapper.find('input[name="title"]').simulate('change', {
      target: {
        name: 'title',
        value: 'the title',
      },
    });

    act(() => {
      wrapper.find('form').at(0).prop('onSubmit')({
        preventDefault() {},
      });
    });
    expect(uiCloseModal).toHaveBeenCalled();
    expect(noteUpdate).toHaveBeenCalledWith({
      ...notesListMock[0],
      title: 'the title',
    });
    expect(noteSetActive).toHaveBeenCalledWith(false);
    expect(Swal.fire).toHaveBeenCalledWith('Note Saved', '', 'success');
  });
});
