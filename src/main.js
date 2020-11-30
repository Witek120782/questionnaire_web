import { createApp } from 'vue';
import './firebase.js';

import App from './App.vue';
import router from './router.js';
import store from './store/index.js'

import BaseButton from './components/baseComponents/BaseButton.vue';
import BaseDialog from './components/baseComponents/BaseDialog.vue';

const app = createApp(App);

app.use(router);
app.use(store);

app.component('base-button', BaseButton);
app.component('base-dialog', BaseDialog);

app.mount('#app');
