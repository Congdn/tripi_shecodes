import userReducer from './reducers/UserReducer';
import searchReducer from './reducers/SearchReducer';
import { createStore,combineReducers } from 'redux';

const rootReducer = combineReducers({userReducer,searchReducer});
const store = createStore(rootReducer);
export default store;