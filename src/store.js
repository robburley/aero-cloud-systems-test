import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunk from 'redux-thunk'

const createReducer = (initialState, handlers) => {
    return (state = initialState, action) => {
        return (handlers[action.type] && handlers[action.type](state, action)) || state;
    };
};

const rootReducer = combineReducers({});

export default createStore(rootReducer, {}, applyMiddleware(thunk));