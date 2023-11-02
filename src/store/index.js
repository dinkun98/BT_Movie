import { createStore } from 'redux'
import { rootReducer } from './rootReducer'
import { configureStore } from '@reduxjs/toolkit'

// export const store = createStore(
//     rootReducer,
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// )

// store nay duoc tao tu ham configurestore cua redux toolkit
export const store = configureStore({
    reducer: rootReducer,
    // devTools: false,
})