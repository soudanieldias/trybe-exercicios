import { combineReducers } from 'redux';
import todos from './todos';
import counter from './counter';

// Arquivo index.js do reducer combinado

const reducerCombinado = combineReducers({
todos,
counter});

export default reducerCombinado;