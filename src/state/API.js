import axios from 'axios';
axios.defaults.baseURL = 'https://guest-book-server.herokuapp.com';

export async function getAllCommentsAPI() {
  const { data } = await axios.get('/api/comments');
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

//cache reducers
export const commentsDataAdd = result => oldData => oldData.concat(result);

export const commentsDataUpdate = result => oldData =>
  oldData.map(item => (item._id === result._id ? result : item));

export const commentsDataRemove = result => oldData =>
  oldData.filter(({ _id }) => _id !== result);
