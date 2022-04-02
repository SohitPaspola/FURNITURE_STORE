import { combineReducers, configureStore } from "@reduxjs/toolkit";
import addressReducer from "./reducer/address-reducer";
import alertReducer from "./reducer/alert-reducer";
import  authReducer  from "./reducer/auth-Reducer";
import cartReducer from "./reducer/cart-reducer";
import ProductReducer from "./reducer/ProductReducer";
import searchReducer from "./reducer/searchReducer";
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";
import { FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE } from "redux-persist";


const reducers = combineReducers({auth: authReducer, product: ProductReducer, search: searchReducer, cart: cartReducer, address: addressReducer, alert: alertReducer})


const persistConfig = {
    key: 'root',
    storage,
}

const rootReducers = (state, action) => {
    if(action.type === 'auth/logout'){
        state = undefined
    }
    return reducers(state, action);
}


const persistedReducer = persistReducer(persistConfig, rootReducers);

const Store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
        }
      }),
    
});
console.log(Store.getState());

const persistor = persistStore(Store)
export {persistor}
export default Store;