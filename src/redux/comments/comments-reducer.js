import { createReducer, combineReducers} from '@reduxjs/toolkit';
import * as operations from './comments-operations';
import {editComment} from './comments-actions';

const { fetchComments, addComment, deleteComment, patchComment } = operations;

/* ---------------EDITCOMMENT_REDUCER---------------------- */
const edit = createReducer(null, {
    [editComment]: (_, { payload }) => payload,
    [patchComment.fulfilled]: () => null,
})

/* ---------------FULLFILLED_REDUCER---------------------- */
const comments = createReducer([], {
    [addComment.fulfilled]: (state, { payload }) => [...state, payload],
    [fetchComments.fulfilled]: (_, { payload }) => payload,
    [deleteComment.fulfilled]: (state, { payload }) => state.filter(({ _id }) => _id !== payload),
    [patchComment.fulfilled]: (state, { payload }) => state.map(comment => comment._id === payload._id ? payload : comment),
});

/* ---------------LOAD_REDUCER---------------------- */
const toggleLoading = (state) => !state;
const reducerLoadingObj = Object.values(operations)
    .reduce((accObj, operation) =>
        ({
            ...accObj,
            [operation.fulfilled]: toggleLoading,
            [operation.rejected]: toggleLoading,
            [operation.pending]: toggleLoading
        }), {});
const loading = createReducer(false, reducerLoadingObj);

/* ---------------ERROR_REDUCER---------------------- */
const setError = (_, { payload }) => {
    const { status,config,request,statusText} = payload;
    return `Error ${status}. Can't ${config.method} by ${request.responseURL}. ${statusText}`;
};
const resetError = () => null;
const reducerErrorObj = Object.values(operations)
    .reduce((accObj, operation) =>
        ({
            ...accObj,
            [operation.rejected]: setError,
            [operation.pending]: resetError
        }), {});
const error = createReducer(null, reducerErrorObj);

/* ---------------------------------------------------- */

export default combineReducers({
    comments,
    loading,
    error,
    edit
});