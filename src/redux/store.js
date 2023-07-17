import  DataReducer  from "./reducers/productsReducers";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { combineReducers } from "redux";
const rootReducer = combineReducers({ products: DataReducer });
const store = createStore(rootReducer, applyMiddleware(thunk));
export default store;
