import { createApp } from 'vue'
import { createStore } from 'vuex';

import App from './App.vue'
import { selectedSquaresStore } from './stores/selectedSquares'

const app = createApp(App)
app.use(createStore(selectedSquaresStore));

app.mount('#app');
