import * as React from 'react';
import { shallow } from 'enzyme';
import Landing from './Landing';

describe('<Landing />', () => {
  test('renders', () => {
    const wrapper = shallow(<Landing />);
    expect(wrapper).toMatchSnapshot();
  });
});
  