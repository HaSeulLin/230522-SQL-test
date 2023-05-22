import { configureStore } from '@reduxjs/toolkit'

import userSlice from './slices/userSlice';

import { getDefaultMiddleware } from '@reduxjs/toolkit';

export default configureStore({
    reducer : {
        user : userSlice
    },
    middleware : (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false,
    })
})