<template>
    <button class="app-button">
        <slot />
    </button>
</template>

<style lang="scss" scoped>
.app-button {
    background-color: var(--button-background-color);
    color: var(--button-text-color);
    border: 1px solid var(--button-border-color);

    border-radius: 10px;
    padding: 10px 15px;
    font-size: .9rem;
    font-weight: 600;

    cursor: pointer;
    transition: all 0.2s ease-in-out;

    &:hover {
        filter: brightness(1.3);
    }

    &:active {
        filter: brightness(0.7);
    }

    &:disabled {
        filter: grayscale(1);
        cursor: not-allowed;
    }
}
</style>