import { createAction } from '@reduxjs/toolkit';

export const editComment = createAction('comment/edit');
export const resetCommentsError = createAction('comments/resetError');