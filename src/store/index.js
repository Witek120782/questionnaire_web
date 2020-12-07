import {createStore} from 'vuex';
import authenticationsModule from './authentication/index.js';
import formsModule from './forms/index.js';
import photosModule from './photos/index.js';

const store = createStore({
	modules:{
		auth: authenticationsModule,
		forms: formsModule,
		photos: photosModule
	}

});

export default store;