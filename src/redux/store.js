import { configureStore } from '@reduxjs/toolkit';
import commentsReducer from './comments/comments-reducer';

export const store = configureStore({
  reducer: {
    comments: commentsReducer,
  },
  devTools: process.env.NODE_ENV === 'development',
});