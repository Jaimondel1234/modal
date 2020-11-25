import React from 'react';
import { notesListMock } from '../../../__mocks__/notesListMock';
import { mount } from 'enzyme';
import { NoteCard } from '../../../components/notes/NoteCard';
import { act } from 'react-dom/test-utils';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';

describe('Test <NoteCard/>', () => {
  const mockStore = configureStore([]);

  const store = mockStore({});

  const wrapper = mount(
    <Provider store={store}>
      <NoteCard {...notesListMock[0]} />
    </Provider>,
  );

  test('it must be displayed correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
  test('if the mouse is over the image, the icons for deleting and editing image should appear', () => {
    act(() => {
      wrapper.find('core__PanelStyle').prop('onMouseOver')();
    });
    wrapper.update();
    expect(wrapper.find('DeleteEventFab').at(0).exists()).toBe(true);
    expect(wrapper.find('ModifyNoteFab').at(0).exists()).toBe(true);
  });
});
