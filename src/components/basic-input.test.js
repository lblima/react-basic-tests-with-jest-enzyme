import React from 'react';
import ReactDOM from 'react-dom';

import { shallow } from 'enzyme';

import BasicInput from './basic-input';


describe('basic input component', () => {
    it('should renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<BasicInput />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('should render a placeholder', () => {
        const placeholder_text = 'type anything here';
        const wrapper = shallow(<BasicInput placeholder={placeholder_text} />);
        expect(wrapper.prop('placeholder')).toEqual(placeholder_text);
    });

    it('should render a correct type', () => {
        const type = 'password';
        const wrapper = shallow(<BasicInput type={type} />);
        expect(wrapper.prop('type')).toEqual(type);
    });
});