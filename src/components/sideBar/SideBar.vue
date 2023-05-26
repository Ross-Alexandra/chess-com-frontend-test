<template>
    <div class="side-bar">
        <div class="side-bar__content">
            <div v-if="selectedSquaresCount === 0">
                <h2 class="side-bar__content__title no-squares-message">Squares that you select on the board will be displayed here</h2>
            </div>

            <div class="side-bar__content" v-else>
                <h2 class="side-bar__content__title">Selected Squares</h2>
                <SquareTag 
                    v-for="selectedSquare, index in selectedSquares.squares"
                    :key="selectedSquare"
                    @click="removeSquare(selectedSquare)"
                >
                    {{ index + 1 }}. {{ getFile(selectedSquare - 1) }}{{ getRank(selectedSquare - 1) }}
                </SquareTag>
            </div>
        </div>

        <div class="side-bar__controls">
            <div class="side-bar__controls__control">
                <h4>Theme</h4>
                <ThemeSlider 
                    :theme="props.theme"
                    :toggleTheme="props.toggleTheme"
                />
            </div>

            <div class="side-bar__controls__control">
                <AppButton 
                    @click="clearSquares"
                    :disabled="selectedSquaresCount === 0"
                >
                    Clear
                </AppButton>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import AppButton from '@/components/ui/AppButton.vue';
import { selectedSquares } from '@/stores/selectedSquares';
import { computed } from 'vue';
import { getRank, getFile } from '@/helpers';
import ThemeSlider from '@/components/ui/ThemeSlider.vue';
import SquareTag from './SquareTag.vue';

const selectedSquaresCount = computed(() => selectedSquares.squares.length);
const props = defineProps<{
    theme: string;
    toggleTheme: () => void;
}>();

function removeSquare(squareIndex: number): void {
    selectedSquares.squares = selectedSquares.squares.filter((tile) => tile !== squareIndex);
}

function clearSquares(): void {
    selectedSquares.squares = [];
}
</script>

<style lang="scss" scoped>
.side-bar {
    @import '@/global.scss';

    width: 300px;
    height: 100%;

    display: flex;
    flex-direction: column;
    padding: 10px;

    border-left: 1px solid var(--layer-border-color);
    background-color: var(--layer-color);
    color: var(--sidebar-text-color);

    @media (max-width: $tablet-breakpoint) {
        width: 100%;
        height: 100%;
    }

    &__content {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(75px, 1fr));
        gap: 5px;

        overflow: auto;

        &__title {
            font-size: 1.2rem;
            font-weight: 400;
            text-align: center;

            grid-column: 1 / -1;
        }
    }

    &__controls {
        margin-top: auto;
        width: 100%;

        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-evenly;

        &__control {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            gap: 5px;
        }
    }
}
</style>