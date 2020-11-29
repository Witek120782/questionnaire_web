import { createRouter, createWebHistory } from 'vue-router';

import MainPage from './pages/MainPage.vue';
import AuthPage from './pages/AuthPage.vue';

const router = createRouter({
	history: createWebHistory(),
	routes:[
		{path: '/', component: MainPage},
		{path: '/auth', component: AuthPage},
	]

});

export default router;