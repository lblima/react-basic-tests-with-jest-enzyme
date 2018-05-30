import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { shallow, mount } from 'enzyme';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('shallow render without crashing', () => {
  const wrapper = shallow(<App />);
  const welcome = <h1 className="App-title">Welcome to React Basic Tests</h1>;
  expect(wrapper.contains(welcome)).toEqual(true);
});

it('should change the state after change the input value', () => {
  const newValue = 'testing component';
  const wrapper = mount(<App />);
  const input = wrapper.find('input');

  input.simulate('change', { target: { value: newValue }});

  expect(wrapper.state().basicValue).toEqual(newValue);
});