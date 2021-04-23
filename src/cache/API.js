import axios from 'axios';
axios.defaults.baseURL = 'https://guest-book-server.herokuapp.com';

async function getAllComments() {
  const { data } = await axios.get('/api/comments');
  return data;
}

async function postComment({ name, comment }) {
  const { data } = await axios.post('/api/comments', { name, comment });
  return data;
}

async function patchComment({ _id, name, comment }) {
  const { data } = await axios.patch(`/api/comments/${_id}`, { name, comment });
  return data;
}

async function deleteComment(_id) {
  await axios.delete(`/api/comments/${_id}`);
  return _id;
}

const API = { getAllComments, postComment, patchComment, deleteComment };
export default API;
