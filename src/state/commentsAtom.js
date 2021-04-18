import { atom, selector } from 'recoil';
import { push, removeObj, updateObj, useRecoilTask } from 'recoil-toolkit';
import {
  getAllCommentsAPI,
  deleteCommentAPI,
  postCommentAPI,
  patchCommentAPI,
} from './API';

//atoms
export const commentsState = atom({
  key: 'commentsState',
  default: selector({
    key: 'commentsState/default',
    get: async () => {
      try {
        const data = await getAllCommentsAPI();
        return data;
      } catch (err) {
        console.log(err.toJSON());
      }
    },
  }),
});

export const commentEditState = atom({
  key: 'commentEditState',
  default: null,
});

//tasks
const commentDelete = ({ set }) => async _id => {
  await deleteCommentAPI(_id);
  set(commentsState, removeObj({ _id }));
};

const commentPost = ({ set }) => async comment => {
  const newComment = await postCommentAPI(comment);
  set(commentsState, push(newComment));
};

const commentPatch = ({ set }) => async comment => {
  const updatedComment = await patchCommentAPI(comment);
  set(commentsState, updateObj(updatedComment, { _id: updatedComment._id }));
};

//hooks
export const useRemoveComment = () => useRecoilTask(commentDelete, []);
export const useAddComment = () => useRecoilTask(commentPost, []);
export const usePatchComment = () => useRecoilTask(commentPatch, []);
