import userReducer from './reducers/UserReducer';
import { createStore } from 'redux';

const store = createStore(userReducer);
export default store;