import React from 'react';
import { mount } from 'enzyme';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { Navbar } from '../../../components/ui/Navbar';
import { MemoryRouter } from 'react-router-dom';
import { types } from '../../../types/types';

describe('Test <Navbar/>', () => {
  Storage.prototype.removeItem = jest.fn();
  const mockStore = configureStore([]);
  const initState = {};

  const store = mockStore(initState);
  store.dispatch = jest.fn();
  const wrapper = mount(
    <Provider store={store}>
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    </Provider>,
  );
  test('it must be displayed correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
  test('if the button is clicked, the logout action must be dispatched', () => {
    wrapper.find('button').prop('onClick')();
    expect(localStorage.removeItem).toHaveBeenNthCalledWith(1, 'user');
    expect(localStorage.removeItem).toHaveBeenNthCalledWith(2, 'notes');
    expect(store.dispatch).toHaveBeenNthCalledWith(1, {
      type: types.authLogout,
    });
    expect(store.dispatch).toHaveBeenNthCalledWith(2, {
      type: types.noteReset,
    });
  });
});
