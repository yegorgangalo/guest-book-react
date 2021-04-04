import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://guest-book-server.herokuapp.com';

export const fetchComments = createAsyncThunk(
    'comments/fetch',
  async (_, { rejectWithValue }) => {
    try {
      const {data} = await axios.get('/comments');
        return data;
    } catch (error) {
      return rejectWithValue(error.response)
    }
  }
)

export const addComment = createAsyncThunk(
    'comments/add',
  async (comment, { rejectWithValue }) => {
    try {
      const {data} = await axios.post('/comments', comment);
        return data;
    } catch (error) {
      return rejectWithValue(error.response)
    }
  }
)

export const deleteComment = createAsyncThunk(
    'comments/delete',
  async (id, { rejectWithValue }) => {
    try {
      await axios.delete(`/comments/${id}`);
        return id;
    } catch (error) {
      return rejectWithValue(error.response)
    }
  }
)

export const patchComment = createAsyncThunk(
    'comments/patch',
  async (comment, { rejectWithValue }) => {
    try {
      await axios.patch(`/comments/${comment._id}`, comment);
      return comment;
    } catch (error) {
      return rejectWithValue(error.response)
    }
  }
)