import { createReducer, combineReducers} from '@reduxjs/toolkit';
import * as operations from './comments-operations';

const { fetchComments, addComment } = operations;

/* ---------------FULLFILLED_REDUCER---------------------- */
const comments = createReducer([], {
    [addComment.fulfilled]: (state, { payload }) => [...state, payload],
    [fetchComments.fulfilled]: (_, { payload }) => payload,
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
});