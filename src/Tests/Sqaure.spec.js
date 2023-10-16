import React from 'react';
import { shallow } from 'enzyme';
import Square from '../Components/Square';
import { render } from '@testing-library/react';


describe('Square', () => {
    it('renders without crashing', () => {
        const wrapper = shallow(<Square value={null} onClick={() => { }} />);
        expect(wrapper).toMatchSnapshot();
    });

    it('displays the value passed as a prop', () => {
        const value = 'X';
        const wrapper = shallow(<Square value={value} onClick={() => { }} />);
        expect(wrapper.text()).toEqual(value);
    });

    it('displays empty value if nothing passed to params', () => {
        const wrapper = shallow(<Square />);
        expect(wrapper.text()).toEqual('');
    });

});

describe('Testing functionality of the Square', () => {
    it('calls the onClick function when the button is clicked', () => {
        const onClick = jest.fn();
        const wrapper = shallow(<Square value={null} onClick={onClick} />);
        wrapper.find('button').simulate('click');
        expect(onClick).toHaveBeenCalled();
    });
})
