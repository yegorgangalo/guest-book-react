import axios from 'axios';
axios.defaults.baseURL = 'https://guest-book-server.herokuapp.com';

export async function getAllCommentsAPI() {
  const { data } = await axios.get('/api/comments1');
  return data;
}

export async function postCommentAPI({ name, comment }) {
  const { data } = await axios.post('/api/comments', { name, comment });
  return data;
}

export async function patchCommentAPI({ _id, name, comment }) {
  const { data } = await axios.patch(`/api/comments/${_id}`, { name, comment });
  return data;
}

export async function deleteCommentAPI(_id) {
  await axios.delete(`/api/comments/${_id}`);
  return _id;
}
