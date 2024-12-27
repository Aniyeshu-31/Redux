import { legacy_createStore , applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import {Allreducers} from './reducer';
export const store = legacy_createStore(Allreducers,{},applyMiddleware(thunk));