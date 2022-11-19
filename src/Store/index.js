import { configureStore } from "@reduxjs/toolkit";
import ProductReducer from './Reducers/ProductSlice'


const store = configureStore({
    reducer: {
        product: ProductReducer
    }
})

export default store;