import { createStore, combineReducers, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import authReducer from '../Reducer/Reducer';

const persistConfig = {
    key: 'root',
    storage: storage,
};

const rootReducer = combineReducers({
    auth: persistReducer(persistConfig, authReducer),
});

const middleware = applyMiddleware(thunk, logger);

const store = createStore(rootReducer, middleware);

const persistor = persistStore(store);

export { persistor, store };