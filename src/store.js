import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunk from 'redux-thunk'
import hotelStoreConfig from './reducers/hotels';
import filterStoreConfig from './reducers/filters';

const createReducer = (initialState, handlers) => {
    return (state = initialState, action) => {
        return (handlers[action.type] && handlers[action.type](state, action)) || state;
    };
};

const hotelReducers = createReducer(hotelStoreConfig.initialState, hotelStoreConfig.actions)
const filterReducers = createReducer(filterStoreConfig.initialState, filterStoreConfig.actions)

const rootReducer = combineReducers({
    hotels: hotelReducers,
    filters: filterReducers,
});

export default createStore(rootReducer, {}, applyMiddleware(thunk));