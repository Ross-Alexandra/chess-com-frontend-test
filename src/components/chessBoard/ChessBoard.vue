<template>
    <div id="chess-board-wrapper">
        <div class="chess-board">
            <ChessSquare 
                v-for="squareIndex in 64"
                :key="squareIndex"
                @click="toggleSquare(squareIndex)"
                :class="{
                    selected: selectedSquares.squares.includes(squareIndex),
                }"
                :squareIndex="squareIndex - 1 /* 0-indexed */"
            />
        </div>
    </div>
</template>

<script lang="ts" setup>
import { selectedSquares } from '@/stores/selectedSquares';
import ChessSquare from './ChessSquare.vue';
import { onMounted, onUnmounted, ref } from 'vue';

function toggleSquare(squareIndex: number): void {
    if (selectedSquares.squares.includes(squareIndex)) {
        selectedSquares.squares = selectedSquares.squares.filter((tile) => tile !== squareIndex);
    } else {
        selectedSquares.squares.push(squareIndex);
    }
}

const boardSize = ref('0px');
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
    
    @media (max-width: 950px) {
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