import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

// axios.defaults.baseURL = 'https://guest-book-server.herokuapp.com';
axios.defaults.baseURL = 'http://localhost:3003';

export const fetchComments = createAsyncThunk(
    'comments/fetch',
  async (_, { rejectWithValue }) => {
    try {
      const {data} = await axios.get('/api/comments');
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
      const {data} = await axios.post('/api/comments', comment);
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
      await axios.delete(`/api/comments/${id}`);
      return id;
    } catch (error) {
      return rejectWithValue(error.response)
    }
  }
)

export const patchComment = createAsyncThunk(
    'comments/patch',
  async ({_id, name, comment}, { rejectWithValue }) => {
    try {
      const {data} = await axios.patch(`/api/comments/${_id}`, { name, comment });
      return data;
    } catch (error) {
      return rejectWithValue(error.response)
    }
  }
)