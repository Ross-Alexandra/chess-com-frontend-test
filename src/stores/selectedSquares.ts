import type {StoreOptions} from 'vuex';

export const selectedSquaresStore: StoreOptions<{
    squares: number[];
}> = {
    state: {
        squares: [] as number[],
    },
    mutations: {
        addSquare(state, square: number) {
            if (!state.squares.includes(square)) {
                state.squares = [
                    ...state.squares,
                    square
                ]
            }
        },
        removeSquare(state, square: number) {
            state.squares = [
                ...state.squares.filter((s) => s !== square)
            ];
        },
        clearSquares(state) {
            state.squares = [];
        },
    },
};
