import { atom, selector, useRecoilCallback } from 'recoil';
import {
  getAllCommentsAPI,
  deleteCommentAPI,
  postCommentAPI,
  patchCommentAPI,
} from './API';

export const commentsState = atom({
  key: 'commentsState',
  default: selector({
    key: 'commentsState/default',
    get: async () => {
      try {
        const data = await getAllCommentsAPI();
        return data;
      } catch (err) {
        console.log(err);
      }
    },
  }),
});

export const commentEditState = atom({
  key: 'commentEditState',
  default: null,
});

//tasks
const commentDelete = ({ snapshot, set }) => async _id => {
  await deleteCommentAPI(_id);
  const oldState = snapshot.getLoadable(commentsState).contents;
  const newState = oldState.filter(item => item._id !== _id);
  set(commentsState, newState);
};

const commentPost = ({ snapshot, set }) => async comment => {
  const newComment = await postCommentAPI(comment);
  const oldState = snapshot.getLoadable(commentsState).contents;
  const newState = oldState.concat(newComment);
  set(commentsState, newState);
};

const commentPatch = ({ snapshot, set }) => async comment => {
  const updatedComment = await patchCommentAPI(comment);
  const oldState = snapshot.getLoadable(commentsState).contents;
  const newState = oldState.map(item =>
    item._id === updatedComment._id ? updatedComment : item,
  );
  set(commentsState, newState);
};

//hooks
export const useRemoveComment = () => useRecoilCallback(commentDelete);
export const useAddComment = () => useRecoilCallback(commentPost);
export const useUpdateComment = () => useRecoilCallback(commentPatch);
