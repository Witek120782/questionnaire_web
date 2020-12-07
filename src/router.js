import { createRouter, createWebHistory } from 'vue-router';

import MainPage from './pages/MainPage.vue';
import AuthPage from './pages/AuthPage.vue';
import Questionnaire from './pages/questionnaires/QMainPage.vue';
import QuestionnaireAdd from './pages/questionnaires/QAddPage.vue';

const router = createRouter({
	history: createWebHistory(),
	routes:[
		{path: '/', redirect: '/home' },
		{path: '/home', component: MainPage},
		{path: '/auth', component: AuthPage},
		{path: '/questionnaire', component: Questionnaire},
		{path: '/questionnaire/add', component: QuestionnaireAdd}
	]

});

export default router;