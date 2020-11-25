import React from 'react';
import { notesListMock } from '../../../__mocks__/notesListMock';
import configureStore from 'redux-mock-store';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import { NoteList } from '../../../components/notes/NoteList';

describe('Test <NoteList/>', () => {
  const mockStore = configureStore([]);
  const initState = {
    notes: {
      notes: notesListMock,
    },
  };

  const store = mockStore(initState);

  const wrapper = mount(
    <Provider store={store}>
      <NoteList />
    </Provider>,
  );
  test('it must be displayed correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
  test('if the list is not empty , the cards of note must be showed', () => {
    expect(wrapper.find('NoteCard').at(0).exists()).toBe(true);
  });
});
