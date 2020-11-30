import { createApp } from 'vue';

import App from './App.vue';
import router from './router.js';

import BaseButton from './components/baseComponents/BaseButton.vue';
import BaseDialog from './components/baseComponents/BaseDialog.vue';

const app = createApp(App);

app.use(router);

app.component('base-button', BaseButton);
app.component('base-dialog', BaseDialog);

app.mount('#app');
