<template>
    <ChessBoard />
    <SideBar />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ChessBoard from './components/chessBoard/ChessBoard.vue';
import SideBar from './components/sideBar/SideBar.vue';

export default defineComponent({
    name: 'App',
    components: {
        ChessBoard,
        SideBar,
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

#app {
    font-family: 'Poppins', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;

    display: grid;
    grid-template-columns: minmax(0px, 1fr) 300px;
    grid-template-rows: minmax(0px, 1fr);
    place-items: center;

    width: 100vw;

    // Hack to use svh on mobile devices with
    // browsers that support vh but not svh.
    height: 100vh;
    height: 100svh;

    // Theme variables for the app.
    --background-color__light: #fff;
    --sidebar-background-color__light: rgba(0, 15, 20, 0.1);
    --sidebar-border-color__light: #2F4F4F;
    --sidebar-text-color__light: #020A19;

    --background-color__dark: #36454F;
    --sidebar-background-color__dark: rgba(240, 250, 255, 0.1);
    --sidebar-border-color__dark: #2A3429;
    --sidebar-text-color__dark: #FDF5E6;

    // Theme variables for the chess board.
    --dark-square-color__light: #5F9EA0;
    --light-square-color__light: #F8F8FF;
    --board-border-color__light: #2F4F4F;
    --rank-and-file-color__light: #686868;

    --dark-square-color__dark: #000;
    --light-square-color__dark: #191970;
    --board-border-color__dark: #

    --light-square-highlight-color__light: #10c200;
    --dark-square-highlight-color__light: #005c0c;
    --light-square-highlight-color__dark: var(--light-square-color__light);
    --dark-square-highlight-color__dark: var(--dark-square-color__light);

    background-color: var(--background-color__light);
}
</style>
