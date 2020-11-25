import React from 'react';
import { shallow } from 'enzyme';
import { HomeScreen } from '../../../components/home/HomeScreen';

describe('Test <HomeScreen/>', () => {
  const wrapper = shallow(<HomeScreen />);
  test('it must be displayed correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
  test('the welcome text must appear', () => {
    expect(wrapper.find('core__TextStyle').text()).toBe(
      'Welcome to the Notes App',
    );
  });
});
