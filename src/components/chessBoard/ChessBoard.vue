<template>
    <div class="chess-board-wrapper">
        <div class="chess-board">
            <ChessSquare 
                v-for="squareIndex in 64"
                :key="squareIndex"
                @click="toggleSquare(squareIndex)"
                :class="{
                    selected: selectedTiles.tiles.includes(squareIndex),
                }"
                :squareIndex="squareIndex - 1 /* 0-indexed */"
            />
        </div>
    </div>
</template>

<script lang="ts" setup>
import { selectedTiles } from '@/stores/selectedTiles';
import ChessSquare from './ChessSquare.vue';

function toggleSquare(squareIndex: number): void {
    if (selectedTiles.tiles.includes(squareIndex)) {
        selectedTiles.tiles = selectedTiles.tiles.filter((tile) => tile !== squareIndex);
    } else {
        selectedTiles.tiles.push(squareIndex);
    }
}
</script>

<style lang="scss" scoped>

.chess-board-wrapper {
    width: 100%;
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;
    padding: 45px;
}
.chess-board {
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    grid-template-rows: repeat(8, 1fr);

    max-height: 100%;
    max-width: 100%;
    height: 100%;
    aspect-ratio: 1;

    border: 1px solid var(--board-border-color);
    border-radius: 10px;
}
</style>