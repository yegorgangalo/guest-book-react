import { atom, selector } from 'recoil';

// export const commentEditState = atom({
//   key: 'commentEditState',
//   default: null,
// });

export const isOpenedModalState = atom({
  key: 'isOpenedModalState',
  default: false,
});

export const toggleIsOpenedModalState = selector({
  key: 'toggleIsOpenedModalState',
  set: ({ set, get }) => {
    const currentModalState = get(isOpenedModalState);
    set(isOpenedModalState, !currentModalState);
  },
});
