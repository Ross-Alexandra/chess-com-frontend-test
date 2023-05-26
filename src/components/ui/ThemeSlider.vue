<template>
    <div
        :class="{
            'theme-slider': true,
            [props.theme]: true,
        }"
        role="switch"
        :aria-checked="props.theme === 'light' ? 'true' : 'false'"
        @click="props.toggleTheme"
    >
        <div class="theme-slider__thumb">
            <SunIcon v-if="props.theme === 'light'" color="black" />
            <MoonIcon v-if="props.theme === 'dark'" color="black" />
        </div>
    </div>
</template>

<script lang="ts" setup>
import {MoonIcon, SunIcon} from '@/components/icons';

const props = defineProps<{
    toggleTheme: () => void;
    theme: string;
}>();
</script>

<style lang="scss" scoped>
.theme-slider {
    position: relative;
    width: 55px;
    height: 30px;
    padding: 5px;
    border-radius: 100px;

    display: flex;
    align-items: center;
    background-color: var(--theme-color);

    cursor: pointer;

    &__thumb {
        display: grid;
        place-items: center;

        background-color: #ccc;
        aspect-ratio: 1;
        border-radius: 50%;

        svg {
            width: 70%;
            height: 70%;
        }
    }

    &.light {
        justify-content: start;
    }

    &.dark {
        justify-content: end;
    }
}
</style>
