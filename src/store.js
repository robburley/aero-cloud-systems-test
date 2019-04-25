import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunk from 'redux-thunk'

const createReducer = (initialState, handlers) => {
    return (state = initialState, action) => {
        return (handlers[action.type] && handlers[action.type](state, action)) || state;
    };
};

const hotelReducers = createReducer(hotelStoreConfig.initialState, hotelStoreConfig.actions)

const rootReducer = combineReducers({
    hotels: hotelReducers,
});

export default createStore(rootReducer, {}, applyMiddleware(thunk));