import { shallowMount } from '@vue/test-utils';
import ChessSquare from '@/components/chessBoard/ChessSquare.vue';

describe('ChessSquare.vue', () => {
    it('Should render the correct rank and file in its data attributes', () => {
        const wrapper = shallowMount(ChessSquare, {
            props: {
                squareIndex: 0
            }
        });

        expect(wrapper.attributes('data-rank')).toBe('8');
        expect(wrapper.attributes('data-file')).toBe('a');
    });

    it('Should have the correct rank and file text', () => {
        const wrapper = shallowMount(ChessSquare, {
            props: {
                squareIndex: 1
            }
        });

        expect(wrapper.text()).toBe('b8');
    });
});