import React from 'react';
import { shallow } from 'enzyme';
import Board from '../Components/Board';
import { screen, render } from '@testing-library/react';


describe('Testing Rendering of Board', () => {
    it('renders without crashing', () => {
        const wrapper = shallow(<Board squares={Array(9).fill(null)} onClick={() => { }} />);
        expect(wrapper).toMatchSnapshot();
    });

    it('renders 9 squares', () => {
        const squares = Array(9).fill(null);
        const wrapper = shallow(<Board squares={squares} onClick={() => { }} />);
        expect(wrapper.find('Square')).toHaveLength(9);
    });

});

describe('Testing functionality of Board', () => {

    it('displays the correct status when there is a winner', () => {
        const squares = ['X', 'O', 'X', 'O', 'X', 'O', 'X', null, null];
        render(<Board squares={squares} xIsNext={false} onPlay={() => { }} />);

        expect(screen.getByTestId("status")).toHaveTextContent('Winner is : X');
    });

    it('displays the correct status when the game is a draw', () => {
        const squares = ['X', 'O', 'X', 'O', 'X', 'O', 'O', 'X', 'O'];
        render(<Board squares={squares} xIsNext={false} onPlay={() => { }} />);
        expect(screen.getByTestId("status")).toHaveTextContent('Draw');

    });

    it('displays the correct status for the next player', () => {
        const squares = Array(9).fill(null);
        render(<Board squares={squares} xIsNext={true} onPlay={() => { }} />);
        expect(screen.getByTestId("status")).toHaveTextContent('Next player is: X');

    });

    it('handles square clicks and calls onPlay', () => {
        const squares = Array(9).fill(null);
        const onPlay = jest.fn();
        const wrapper = shallow(<Board squares={squares} xIsNext={true} onPlay={onPlay} />);
        wrapper.find('Square').at(0).simulate('click');
        expect(onPlay).toHaveBeenCalled();

    });
})

