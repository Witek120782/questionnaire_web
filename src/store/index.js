import {createStore} from 'vuex';
import answersModule from './answers/index.js';
import authenticationsModule from './authentication/index.js';
import formsModule from './forms/index.js';
import photosModule from './photos/index.js';

const store = createStore({
	modules:{
		answers: answersModule,
		auth: authenticationsModule,
		forms: formsModule,
		photos: photosModule
	}

});

export default store;