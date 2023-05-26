<template>
    <div id="chess-board-wrapper">
        <div class="chess-board">
            <ChessSquare 
                v-for="squareIndex in 64"
                :key="squareIndex"
                :class="{
                    selected: selectedSquares.includes(squareIndex),
                }"
                :squareIndex="squareIndex - 1 /* 0-indexed */"
                draggable="true"
                @click="toggleSquare(squareIndex)"
                @dragstart="(e: DragEvent) => handleDragStart(e, squareIndex)"
                @dragenter="toggleSquare(squareIndex, true)"
            />
        </div>
    </div>
</template>

<script lang="ts" setup>
import {
    computed,
    onMounted,
    onUnmounted,
    ref
} from 'vue';
import { useStore } from 'vuex';

import ChessSquare from './ChessSquare.vue';

const boardSize = ref('0px');
const dragSquareState = ref<'selecting' | 'unselecting'>('selecting');

const store = useStore();
const selectedSquares = computed(() => store.state.squares);

function handleDragStart(e: DragEvent, squareIndex: number): void {
    e.dataTransfer?.setDragImage(new Image(), 0, 0);
    toggleSquare(squareIndex);
}

function toggleSquare(squareIndex: number, obeyDragState=false): void {
    if (selectedSquares.value.includes(squareIndex) && (dragSquareState.value === 'unselecting' || !obeyDragState)) {
        store.commit('removeSquare', squareIndex);
        dragSquareState.value = 'unselecting';

    } else if ((dragSquareState.value === 'selecting' || !obeyDragState)){
        store.commit('addSquare', squareIndex);
        dragSquareState.value = 'selecting';
    }
}

// Trying to get a perfect square board using purely CSS
// grid is both messy and likely supported by all browsers.
// Instead, we'll use JS to set the board size to the smallest
// of the board's width, height, and the screen's width and height.
// This will ensure the board is always a perfect square, and ensure
// that the board is always fully visible on the screen.
function setBoardSize(): void {
    const chessBoardWrapper = document.getElementById('chess-board-wrapper');
    if (chessBoardWrapper) {
        const {width: boardWidth, height: boardHeight} = chessBoardWrapper.getBoundingClientRect();
        const screenWidth = window.innerWidth;
        const screenHeight = window.innerHeight;

        boardSize.value = `${Math.min(boardWidth, boardHeight, screenWidth, screenHeight)}px`;
    }
}

window.addEventListener('resize', setBoardSize);
window.addEventListener('load', setBoardSize);

onMounted(setBoardSize);
onUnmounted(() => {
    window.removeEventListener('resize', setBoardSize);
    window.removeEventListener('load', setBoardSize);
});
</script>

<style lang="scss" scoped>

#chess-board-wrapper {
    @import '@/global.scss';

    width: 100%;
    height: 100%;

    display: grid;
    place-items: center;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    
    --_padding-top: 45px;
    --_padding-bottom: 45px;
    --_padding-left: 45px;
    --_padding-right: 45px;
    
    @media (max-width: $tablet-breakpoint) {
        --_padding-top: 10px;
        --_padding-bottom: 30px;
        --_padding-left: 30px;
        --_padding-right: 10px;
    }

    padding: 
        var(--_padding-top)
        var(--_padding-right)
        var(--_padding-bottom)
        var(--_padding-left);

}
.chess-board {
    display: grid;
    grid-template-columns: repeat(8, minmax(0, 1fr));
    grid-template-rows: repeat(8, minmax(0, 1fr));

    height: calc(v-bind('boardSize') - var(--_padding-top) - var(--_padding-bottom));
    width: calc(v-bind('boardSize') - var(--_padding-left) - var(--_padding-right));
    
    border: 1px solid var(--board-border-color);
    border-radius: 10px;
}
</style>
