import { configureStore, applyMiddleware, compose } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import StockReducer from './Reducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const combineReducer = {
  stocks: StockReducer,
};
const store = configureStore({
  reducer: combineReducer,

});
composeEnhancers(applyMiddleware(thunk));
export default store;
