<template>
    <div class="square-tag" role="button">
        <slot />
    </div>
</template>

<style lang="scss" scoped>
.square-tag {
    position: relative;
    display: grid;
    place-items: center;

    padding: 5px;
    border: 1px solid var(--layer-border-color);
    border-radius: 10px;

    background-color: var(--layer-color);
    font-weight: 700;

    cursor: pointer;
    user-select: none;

    &::after {
        content: 'x';
        color: var(--layer-border-color);

        position: absolute;
        top: 50%;
        right: 5px;
        transform: translateY(-50%);
    }

    transition: filter 250ms ease-in-out;
    &:hover {
        filter: brightness(1.3);
    }

    &:active {
        filter: brightness(0.7);
    }
}
</style>
