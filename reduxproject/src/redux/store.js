import { createStore } from 'redux';
import generateReducer from './reducer';


const store = createStore(generateReducer);

export default store;