import * as React from 'react';
import { shallow } from 'enzyme';
import PasswordForget from './PasswordForget';

describe('<PasswordForget />', () => {
  test('renders', () => {
    const wrapper = shallow(<PasswordForget />);
    expect(wrapper).toMatchSnapshot();
  });
});
  