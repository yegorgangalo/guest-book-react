import { atom, selector } from 'recoil';
import { getAllCommentsAPI } from './API';

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

// export const commentDelete = selectorFamily({
//   key: 'commentDelete',
//   set: (id) => async ({ set, get }) => {
//     try {
//       await axios.delete(`/api/comments/${id}`);
//       const commentsPrevState = get(commentsState);
//       const newCommentsState = commentsPrevState.filter(comment => comment._id !== id);
//       set(commentsState, newCommentsState)
//     } catch (err) {
//         console.log(err.toJSON())
//     }
//   }
// })
