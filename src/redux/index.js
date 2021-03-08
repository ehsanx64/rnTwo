import { createStore, combineReducers } from 'redux';

import { HttpCatReducer } from './HttpCat'

const reducers = combineReducers({
    httpCat: HttpCatReducer
});

const store = createStore(reducers);

export default store;