<template>
    <div
        :class="{
            'chess-board-square': true,
            'left-edge': getFile(props.squareIndex) === 'a',
            'right-edge': getFile(props.squareIndex) === 'h',
            'top-edge': getRank(props.squareIndex) === 8,
            'bottom-edge': getRank(props.squareIndex) === 1,
        }"
        :data-file="getFile(props.squareIndex)"
        :data-rank="getRank(props.squareIndex)"
    >
        <p class="chess-board-square__name">
            {{ getFile(squareIndex) }}{{ getRank(squareIndex) }}
        </p>
    </div>
</template>

<script lang="ts" setup>
import { getRank, getFile } from '@/helpers';

const props = defineProps<{
    squareIndex: number;
}>();
</script>

<style lang="scss" scoped>
.chess-board-square {
    @import '@/global.scss';

    display: grid;
    place-items: center;

    width: 100%;
    height: 100%;

    cursor: pointer;
    transition: border-color 250ms, background-color 150ms;

    &__name {
        margin: unset;

        font-size: 0.75rem;
        font-weight: 700;
        color: var(--rank-and-file-color);

        transition: opacity 250ms;
        opacity: 0;

        user-select: none;
        
        @media (max-width: $small-mobile-breakpoint) {
            font-size: 0.5rem;
        }
    }

    &:hover {
        .chess-board-square__name {
            opacity: 1;
        }
    }

    // A chess board is a repeated pattern every 16 squares.
    // Use that fact, and build the 16-square pattern.
    &:nth-child(16n + 0),
    &:nth-child(16n + 1),
    &:nth-child(16n + 3),
    &:nth-child(16n + 5),
    &:nth-child(16n + 7),
    &:nth-child(16n + 10),
    &:nth-child(16n + 12),
    &:nth-child(16n + 14) {

        // Borders here are used to create a transition effects
        // if the user changes themes or clicks the squares.
        background-color: var(--light-square-color);
        border: 10px solid var(--light-square-color);

        &.selected {
            background-color: var(--light-square-highlight-color);
            border: 10px solid var(--light-square-highlight-color);
        }
    }

    &:nth-child(16n + 2),
    &:nth-child(16n + 4),
    &:nth-child(16n + 6),
    &:nth-child(16n + 8),
    &:nth-child(16n + 9),
    &:nth-child(16n + 11),
    &:nth-child(16n + 13),
    &:nth-child(16n + 15) {

        // Borders here are used to create a transition effects
        // if the user changes themes or clicks the squares.
        background-color: var(--dark-square-color);
        border: 10px solid var(--dark-square-color);

        &.selected {
            background-color: var(--dark-square-highlight-color);
            border: 10px solid var(--dark-square-highlight-color);
        }
    }

    &.left-edge {
        position: relative;

        &::before {
            content: attr(data-rank);
            position: absolute;
            top: 50%;
            left: -30px;
            transform: translateY(-50%);

            color: var(--rank-and-file-color);
            font-weight: 700;
        }
    }


    &.bottom-edge {
        position: relative;

        &::after {
            content: attr(data-file);
            position: absolute;
            bottom: -40px;
            left: 50%;
            transform: translateX(-50%);

            color: var(--rank-and-file-color);
            font-weight: 700;
        }
    }

    &.left-edge.top-edge {
        border-top-left-radius: 10px;
    }

    &.right-edge.top-edge {
        border-top-right-radius: 10px;
    }

    &.left-edge.bottom-edge {
        border-bottom-left-radius: 10px;
    }

    &.right-edge.bottom-edge {
        border-bottom-right-radius: 10px;
    }
}
</style>