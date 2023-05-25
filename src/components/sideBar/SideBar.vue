<template>
    <div class="side-bar">
        <div class="side-bar__header">
            <h1 class="side-bar__title">Chess Squares</h1>

            <div v-if="selectedTilesCount === 0">
                <h2>Tiles that you select on the board will be displayed here</h2>
            </div>

            <div class="controls">
                <ThemeSlider 
                    :theme="props.theme"
                    :toggleTheme="props.toggleTheme"
                />
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { selectedTiles } from '@/stores/selectedTiles';
import { computed } from 'vue';
import ThemeSlider from '../ui/ThemeSlider.vue';

const selectedTilesCount = computed(() => selectedTiles.tiles.length);
const props = defineProps<{
    theme: string;
    toggleTheme: () => void;
}>();
</script>

<style lang="scss" scoped>
.side-bar {
    width: 300px;
    height: 100%;

    border-left: 1px solid var(--sidebar-border-color);
    background-color: var(--sidebar-background-color);
    color: var(--sidebar-text-color);
}
</style>