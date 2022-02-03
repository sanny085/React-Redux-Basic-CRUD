import { configureStore } from '@reduxjs/toolkit'
import noteSlice from './redux/noteSlice'

export const store = configureStore({
  reducer: {
    notes: noteSlice,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch


// import { createStore, combineReducers, applyMiddleware } from "redux";
// import thunk, { ThunkMiddleware } from "redux-thunk"; 
// export const rootReducer = combineReducers({
//   expenses: expenseReducer
// });

// export type AppState = ReturnType<typeof rootReducer>;

// export const store = createStore(
//   rootReducer,
//   applyMiddleware(thunk as ThunkMiddleware<AppState, AppActions>)
// );
