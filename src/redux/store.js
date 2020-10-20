import {createStore, combineReducers, compose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import { drinkReducer } from './drinkDucks';
import { cartReducer } from './cartDucks';

// Add all reducers and combine in only one
const rootReducer = combineReducers({
    drink: drinkReducer,
    cart: cartReducer
})

// Verify if Redux devtools is enable in navigator
const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const generateStore = () => {
    // Create store with rootReducer and verify if Redux devtools, or any additional middleware is active
    const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
    return store;
}

export default generateStore;