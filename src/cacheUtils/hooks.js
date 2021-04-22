import { useMutation, useQueryClient } from 'react-query';
import {
  deleteCommentAPI,
  postCommentAPI,
  patchCommentAPI,
} from 'cacheUtils/API';
import {
  commentsDataRemove,
  commentsDataAdd,
  commentsDataUpdate,
} from 'cacheUtils/handlers';
import cache from 'cacheUtils/types';

export const useDeleteComment = () => {
  const queryClient = useQueryClient();
  return useMutation(deleteCommentAPI, {
    onSuccess: data =>
      queryClient.setQueryData(cache.CommentsData, commentsDataRemove(data)),
  });
};

export const usePostComment = () => {
  const queryClient = useQueryClient();
  return useMutation(postCommentAPI, {
    onSuccess: data =>
      queryClient.setQueryData(cache.CommentsData, commentsDataAdd(data)),
  });
};

export const usePatchComment = () => {
  const queryClient = useQueryClient();
  return useMutation(patchCommentAPI, {
    onSuccess: data =>
      queryClient.setQueryData(cache.CommentsData, commentsDataUpdate(data)),
  });
};
