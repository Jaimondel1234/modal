import React from 'react';
import configureStore from 'redux-mock-store';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import { SelectionButtons } from '../../../components/notes/SelectionButtons';
import { setListMode } from '../../../actions/note';

jest.mock('../../../actions/note', () => ({
  setListMode: jest.fn(),
}));
describe('Test <SelectionButtons/>', () => {
  const mockStore = configureStore([]);
  const store = mockStore({});
  store.dispatch = jest.fn();
  const wrapper = mount(
    <Provider store={store}>
      <SelectionButtons />
    </Provider>,
  );
  beforeEach(() => {
    jest.clearAllMocks();
  });
  test('it must be displayed correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
  test('clicking the button of ASC list must dispatch the correct action', () => {
    wrapper.find('button').at(0).prop('onClick')();
    expect(setListMode).toHaveBeenCalledWith('oldToNew');
  });
  test('clicking the button of DES list must dispatch the correct action', () => {
    wrapper.find('button').at(1).prop('onClick')();
    expect(setListMode).toHaveBeenCalledWith('newToOld');
  });

  test('clicking the button A-Z list must dispatch the correct action', () => {
    wrapper.find('button').at(2).prop('onClick')();
    expect(setListMode).toHaveBeenCalledWith('AToZ');
  });
  test('clicking the button Z-A list must dispatch the correct action', () => {
    wrapper.find('button').at(3).prop('onClick')();
    expect(setListMode).toHaveBeenCalledWith('ZToA');
  });
});
