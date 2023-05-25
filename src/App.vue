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

export default defineComponent({
    name: 'App',
    components: {
        ChessBoard,
        SideBar,
    },
    setup() {
        return {
            theme,
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
    display: grid;
    grid-template-columns: minmax(0px, 1fr) 300px;
    grid-template-rows: minmax(0px, 1fr);
    place-items: center;

    width: 100vw;

    // Hack to use svh on mobile devices with
    // browsers that support vh but not svh.
    height: 100vh;
    height: 100svh;

    &[data-theme="light"] {
        // Theme variables for the app.
        --background-color: #fff;
        --sidebar-background-color: rgba(0, 15, 20, 0.1);
        --sidebar-border-color: #2F4F4F;
        --sidebar-text-color: #020A19;

        // Theme variables for the chess board.
        --dark-square-color: #5F9EA0;
        --light-square-color: #F8F8FF;
        --board-border-color: #2F4F4F;
        --rank-and-file-color: #686868;

        --light-square-highlight-color: #10c200;
        --dark-square-highlight-color: #005c0c;
        --theme-color: #00ad17;
    }

    &[data-theme="dark"] {
        // Theme variables for the app.
        --background-color: #36454F;
        --sidebar-background-color: rgba(240, 250, 255, 0.1);
        --sidebar-border-color: #2A3439;
        --sidebar-text-color: #FDF5E6;

        // Theme variables for the chess board.
        --dark-square-color: #09094e;
        --light-square-color:  #5d5df2;
        --board-border-color: #2a3439;
        --rank-and-file-color: #D3D3D3;

        --light-square-highlight-color: #4682B4;
        --dark-square-highlight-color: #2e6a9b;
        --theme-color: #012a06;

    }

    background-color: var(--background-color);

}

#app {
    font-family: 'Poppins', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
</style>
