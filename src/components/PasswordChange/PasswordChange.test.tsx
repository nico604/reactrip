import * as React from 'react';
import { shallow } from 'enzyme';
import PasswordChange from './PasswordChange';

describe('<PasswordChange />', () => {
  test('renders', () => {
    const wrapper = shallow(<PasswordChange />);
    expect(wrapper).toMatchSnapshot();
  });
});
  