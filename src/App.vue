<template>
    <div class="content" :data-theme="theme">
        <ChessBoard />
        <SideBar
            :theme="theme"
            :toggleTheme="toggleTheme"
        />
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

import ChessBoard from './components/chessBoard/ChessBoard.vue';
import SideBar from './components/sideBar/SideBar.vue';

const theme = ref(localStorage.getItem('theme') || 'dark');
function toggleTheme() {
    theme.value = theme.value === 'light' ? 'dark' : 'light';
    localStorage.setItem('theme', theme.value);
}

const mobileBreakpoint = 950;

export default defineComponent({
    name: 'App',
    components: {
        ChessBoard,
        SideBar,
    },
    setup() {
        return {
            theme,
            mobileBreakpoint,
        };
    },
    methods: {
        toggleTheme,
    },
});
</script>

<style lang="scss">
* {
    box-sizing: border-box;
}

body {
    margin: unset;
}

.content {
    @import '@/global.scss';

    display: grid;
    grid-template-columns: minmax(0px, 1fr) 300px;
    grid-template-rows: minmax(0px, 1fr);
    place-items: center;

    width: 100vw;

    // Hack to use svh on mobile devices with
    // browsers that support vh but not svh.
    height: 100vh;
    height: 100svh;

    @media (max-width: $tablet-breakpoint) {
        grid-template-columns: 1fr;
        grid-template-rows: minmax(0px, 1fr) 20vh;
    }

    @media (max-width: $mobile-breakpoint) {
        grid-template-rows: minmax(0px, 1fr) 30vh;
    }

    @media (max-width: $small-mobile-breakpoint) {
        grid-template-rows: minmax(0px, 1fr) 40vh;
    }

    &[data-theme="light"] {
        // Theme variables for the app.
        --background-color: #fff;
        --layer-color: rgba(0, 15, 20, 0.1);
        --layer-border-color: #2F4F4F;
        --sidebar-text-color: #020A19;

        // Theme variables for the chess board.
        --dark-square-color: #5F9EA0;
        --light-square-color: #F8F8FF;
        --board-border-color: #2F4F4F;
        --rank-and-file-color: #686868;

        --light-square-highlight-color: #10c200;
        --dark-square-highlight-color: #005c0c;
        --theme-color: #00ad17;

        --button-background-color: var(--dark-square-color);
        --button-text-color: var(--sidebar-text-color);
        --button-border-color: var(--layer-border-color);
    }

    &[data-theme="dark"] {
        // Theme variables for the app.
        --background-color: #36454F;
        --layer-color: rgba(240, 250, 255, 0.1);
        --layer-border-color: #2A3439;
        --sidebar-text-color: #FDF5E6;

        // Theme variables for the chess board.
        --dark-square-color: #09094e;
        --light-square-color:  #5d5df2;
        --board-border-color: #2a3439;
        --rank-and-file-color: #D3D3D3;

        --light-square-highlight-color: #4682B4;
        --dark-square-highlight-color: #2e6a9b;
        --theme-color: #012a06;

        --button-background-color: var(--dark-square-color);
        --button-text-color: var(--sidebar-text-color);
        --button-border-color: var(--layer-border-color);
    }

    background-color: var(--background-color);

}

#app {
    font-family: 'Poppins', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    --mobile-breakpoint: 950px;
}
</style>
