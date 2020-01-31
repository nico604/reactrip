import * as React from 'react';
import { shallow } from 'enzyme';
import Firebase from './Firebase';

describe('<Firebase />', () => {
  test('renders', () => {
    const wrapper = shallow(<Firebase />);
    expect(wrapper).toMatchSnapshot();
  });
});
  