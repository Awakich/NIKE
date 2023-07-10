import { configureStore } from '@reduxjs/toolkit'
import filterReducer from './slices/filterSlice'
import inputReducer from './slices/inputSlice'
import favouriteReducer from './slices/favouriteSlice'
import cartReducer from './slices/cartSlice'

const store = configureStore({
    reducer: {
        filter: filterReducer,
        input: inputReducer,
        favourite: favouriteReducer,
        cart: cartReducer,
        
    }
})
export default store

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch