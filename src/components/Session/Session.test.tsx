import * as React from 'react';
import { shallow } from 'enzyme';
import Session from './Session';

describe('<Session />', () => {
  test('renders', () => {
    const wrapper = shallow(<Session />);
    expect(wrapper).toMatchSnapshot();
  });
});
  