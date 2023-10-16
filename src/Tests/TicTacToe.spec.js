import Game from "../Components/TicTacToe";
import React from 'react';
import { shallow } from 'enzyme';
import { render, screen, fireEvent } from "@testing-library/react";

describe(
    "Testing Basic rendering of the Game", () => {
        it('renders without crashing', () => {
            const wrapper = shallow(<Game />);
            expect(wrapper).toMatchSnapshot();
        });

        it('initially displays the first move description', () => {
            const wrapper = shallow(<Game />);
            expect(wrapper.find('li button').text()).toContain('Go to game start');
        });

    }
)

describe(
    "Testing functionality of the Game", () => {
        const makeMove = (squareIndex) => {
            const square = screen.getAllByTestId("Square")[squareIndex];
            fireEvent.click(square);
        };

        it('Should allows jumping to a different move and start from there', () => {
            const wrapper = render(<Game />);
            makeMove(0);
            makeMove(1);
            makeMove(2);
            makeMove(3);
            makeMove(4);
            const goToMoveButton = screen.getByText("Go to move 1");
            fireEvent.click(goToMoveButton);
            makeMove(2);
            expect(screen.queryByText('Go to move 3')).toBeNull();
        });

        it("Should Allow Making Moves and Update Status", () => {
            render(<Game />);
            const status = screen.getByText("Next player is: X");

            makeMove(0);
            expect(status).toHaveTextContent("Next player is: O");

            makeMove(1);
            expect(status).toHaveTextContent("Next player is: X");
        });

    }
)