import { fireEvent, render } from '@testing-library/vue';
import { createStore } from 'vuex';

import ChessBoard from '@/components/chessBoard/ChessBoard.vue';
import { selectedSquaresStore } from '@/stores/selectedSquares';

import '@testing-library/jest-dom';


describe('ChessBoard.vue', () => {
    let store: typeof selectedSquaresStore;
    
    beforeEach(() => {
        store = {
            ...selectedSquaresStore,
            state: {
                squares: [] as number[],
            },
        };
    });

    it('Should render the correct number of squares', () => {
        const { container } = render(ChessBoard, {global: {
            plugins: [createStore(store)],
        }});

        expect(container.getElementsByClassName('chess-board-square').length).toBe(64);
    });

    it('Should set a square as selected if it is clicked', async () => {
        const { container } = render(ChessBoard, {global: {
            plugins: [createStore(store)],
        }});

        const square = container.querySelector('[data-rank="8"][data-file="a"]');
        if (!square) {
            throw new Error('Could not find square');
        }

        await fireEvent.click(square);
        expect(square.classList).toContain('selected');
    });

    it('Should set a square as selected and then unselected if it is clicked twice', async () => {
        const { container } = render(ChessBoard, {global: {
            plugins: [createStore(store)],
        }});

        const square = container.querySelector('[data-rank="8"][data-file="a"]') as HTMLDivElement;

        expect(square).not.toBeNull();
        expect(square).toBeInTheDocument();

        await fireEvent.click(square);
        expect(square.classList).toContain('selected');

        await fireEvent.click(square);
        expect(square.classList.contains('selected')).toBe(false);
    });

    it('Should set all squares dragged over as selected when the drag starts on an unselected square', async () => {
        const { container } = render(ChessBoard, {global: {
            plugins: [createStore(store)],
        }});

        const startSquare = container.querySelector('[data-rank="8"][data-file="a"]') as HTMLDivElement;
        const dragSquares = container.querySelectorAll('[data-rank="8"]') as NodeListOf<HTMLDivElement>;

        expect(startSquare).not.toBeNull();
        expect(startSquare).toBeInTheDocument();

        await fireEvent.dragStart(startSquare);
        for (const square of dragSquares) {
            expect(square).not.toBeNull();
            expect(square).toBeInTheDocument();
            await fireEvent.dragEnter(square);
        }

        expect(startSquare.classList).toContain('selected');
        for (const square of dragSquares) {
            expect(square.classList).toContain('selected');
        }
    });

    it('Should deselect all squares when the drag starts on a selected square', async () => {
        store.state = {squares: [1, 2, 3, 4, 5, 6, 7, 8]};
        const { container } = render(ChessBoard, {global: {
            plugins: [createStore(store)],
        }});

        const startSquare = container.querySelector('[data-rank="8"][data-file="a"]') as HTMLDivElement;
        const dragSquares = container.querySelectorAll('[data-rank="8"]') as NodeListOf<HTMLDivElement>;

        expect(startSquare).not.toBeNull();
        expect(startSquare).toBeInTheDocument();

        await fireEvent.dragStart(startSquare);
        for (const square of dragSquares) {
            expect(square).not.toBeNull();
            expect(square).toBeInTheDocument();
            await fireEvent.dragEnter(square);
        }

        expect(startSquare.classList.contains('selected')).toBe(false);
        for (const square of dragSquares) {
            expect(square.classList.contains('selected')).toBe(false);
        }
    });

    it('Should select all unselected squares when the drag starts on an unselected square, but leave selected squares alone', async () => {
        store.state = {squares: [2, 4, 6, 8]};
        const { container } = render(ChessBoard, {global: {
            plugins: [createStore(store)],
        }});

        const startSquare = container.querySelector('[data-rank="8"][data-file="a"]') as HTMLDivElement;
        const dragSquares = container.querySelectorAll('[data-rank="8"]') as NodeListOf<HTMLDivElement>;

        expect(startSquare).not.toBeNull();
        expect(startSquare).toBeInTheDocument();

        await fireEvent.dragStart(startSquare);
        for (const square of dragSquares) {
            expect(square).not.toBeNull();
            expect(square).toBeInTheDocument();
            await fireEvent.dragEnter(square);
        }

        expect(startSquare.classList).toContain('selected')
        for (const square of dragSquares) {
            expect(square.classList).toContain('selected')
        }
    });

    it('Should deselect all selected squares when the drag starts on a selected square, but leave unselected squares alone', async () => {
        store.state = {squares: [1, 3, 5, 7]};
        const { container } = render(ChessBoard, {global: {
            plugins: [createStore(store)],
        }});

        const startSquare = container.querySelector('[data-rank="8"][data-file="a"]') as HTMLDivElement;
        const dragSquares = container.querySelectorAll('[data-rank="8"]') as NodeListOf<HTMLDivElement>;

        expect(startSquare).not.toBeNull();
        expect(startSquare).toBeInTheDocument();

        await fireEvent.dragStart(startSquare);
        for (const square of dragSquares) {
            expect(square).not.toBeNull();
            expect(square).toBeInTheDocument();
            await fireEvent.dragEnter(square);
        }

        expect(startSquare.classList.contains('selected')).toBe(false);
        for (const square of dragSquares) {
            expect(square.classList.contains('selected')).toBe(false);
        }
    });
});
