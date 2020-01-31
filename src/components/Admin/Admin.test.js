import React from 'react';
import { shallow } from 'enzyme';
import Admin from './Admin';

describe('<Admin />', () => {
  test('renders', () => {
    const wrapper = shallow(<Admin />);
    expect(wrapper).toMatchSnapshot();
  });
});
