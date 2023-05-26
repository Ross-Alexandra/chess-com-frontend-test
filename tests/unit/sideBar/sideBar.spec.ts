import SideBar from '@/components/sideBar/SideBar.vue';
import { fireEvent, render, screen } from '@testing-library/vue';
import '@testing-library/jest-dom';
import { selectedSquares } from '@/stores/selectedSquares';

describe('SideBar.vue', () => {
    beforeEach(() => {
        selectedSquares.squares = [];
    });

    it('Should call the toggleTheme function when the theme button is clicked', async () => {
        const toggleTheme = jest.fn();

        const { container } = render(SideBar, {
            props: {
                theme: 'dark',
                toggleTheme: toggleTheme,
            },
        });

        const themeButton = container.querySelector('.theme-slider') as HTMLButtonElement;
        await fireEvent.click(themeButton);

        expect(themeButton).not.toBeNull();
        expect(themeButton).toBeInTheDocument();
        expect(toggleTheme).toHaveBeenCalled();
    });

    it("Should have it's clear button disabled when there are no selected squares", () => {
        const { container } = render(SideBar, {
            props: {
                theme: 'dark',
                toggleTheme: () => {/* noop */},
            },
        });
        const clearButton = container.querySelector('button') as HTMLButtonElement;

        expect(clearButton).not.toBeNull();
        expect(clearButton).toBeInTheDocument();
        expect(clearButton).toBeDisabled();
    });

    it('Should clear all selected squares when the clear button is clicked', async () => {
        selectedSquares.squares = [1, 2, 3, 4, 5, 6, 7, 8];

        const { container } = render(SideBar, {
            props: {
                theme: 'dark',
                toggleTheme: () => {/* noop */},
            },
        });
        
        const clearButton = container.querySelector('button') as HTMLButtonElement;

        expect(clearButton).not.toBeNull();
        expect(clearButton).toBeInTheDocument();
        expect(clearButton).not.toBeDisabled();

        await fireEvent.click(clearButton);
        expect(selectedSquares.squares.length).toBe(0);
    });

    it('Should display an ordered list of selected squares', async () => {
        selectedSquares.squares = [1, 8, 2, 7, 3, 6, 4, 5];

        const { container } = render(SideBar, {
            props: {
                theme: 'dark',
                toggleTheme: () => {/* noop */},
            },
        });
        
        const squareTags = container.querySelectorAll('.square-tag') as NodeListOf<HTMLDivElement>;

        expect(squareTags.length).toBe(8);
        expect(screen.getByText('1. a8')).toBeInTheDocument();
        expect(screen.getByText('2. h8')).toBeInTheDocument();
        expect(screen.getByText('3. b8')).toBeInTheDocument();
        expect(screen.getByText('4. g8')).toBeInTheDocument();
        expect(screen.getByText('5. c8')).toBeInTheDocument();
        expect(screen.getByText('6. f8')).toBeInTheDocument();
        expect(screen.getByText('7. d8')).toBeInTheDocument();
        expect(screen.getByText('8. e8')).toBeInTheDocument();
    });

    it('Should display a message when there are no selected squares', () => {
        const { container } = render(SideBar, {
            props: {
                theme: 'dark',
                toggleTheme: () => {/* noop */},
            },
        });

        expect(container.querySelector('.no-squares-message')).toBeInTheDocument();
    });
});