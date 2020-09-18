import userReducer from './reducers/UserReducer';
import searchReducer from './reducers/SearchReducer';
import homeReducer from './reducers/HomeReducer';
import { createStore,combineReducers } from 'redux';

const rootReducer = combineReducers({userReducer,searchReducer,homeReducer});
const store = createStore(rootReducer);
export default store;