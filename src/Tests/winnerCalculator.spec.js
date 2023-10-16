import WinnerCalculator from "../Util/winnerCalculator";


describe('WinnerCalculator', () => {
    it('calculates a winner with X', () => {
        const squares = ['X', 'O', 'X', 'O', 'X', 'O', 'X', null, null];
        const winner = WinnerCalculator.calculateWinner(squares);
        expect(winner).toEqual('X');
    });

    it('returns null for no winner', () => {
        const squares = ['X', 'O', 'X', 'O', 'X', 'O', null, null, null];
        const winner = WinnerCalculator.calculateWinner(squares);
        expect(winner).toBeNull();
    });

    it('calculates a winner with O', () => {
        const squares = ['O', 'O', 'O', 'X', 'X', 'O', 'X', null, null];
        const winner = WinnerCalculator.calculateWinner(squares);
        expect(winner).toEqual('O');
    });

});
