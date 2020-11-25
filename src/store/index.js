import {createStore} from 'vuex';
import authenticationsModule from './authentication/index.js';
import formsModule from './forms/index.js';

const store = createStore({
	modules:{
		auth: authenticationsModule,
		forms: formsModule
	}

});

export default store;