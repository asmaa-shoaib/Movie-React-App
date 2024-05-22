import {createStore} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import CompineReducer from '../reducer/CompineReducer';

const Store =  createStore(CompineReducer,composeWithDevTools());
export default Store;