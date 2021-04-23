import { useQuery, useMutation, useQueryClient } from 'react-query';
import API from 'cache/API';

//cache-types
export const cache = {
  isModalOpen: 'isModalOpen',
  updateCommentInfo: 'updateCommentInfo',
  allComments: 'allComments',
};

//cache handlers
const commentAddToCache = result => oldData => oldData.concat(result);
const commentUpdateInCache = result => oldData =>
  oldData.map(item => (item._id === result._id ? result : item));
const commentDeleteFromCache = result => oldData =>
  oldData.filter(({ _id }) => _id !== result);

//hooks
const mutationQueryTemplate = (
  handleAPI,
  onSuccessHandleCache,
  typeCache = cache.allComments,
) => () => {
  const queryClient = useQueryClient();
  return useMutation(handleAPI, {
    onSuccess: data =>
      queryClient.setQueryData(typeCache, onSuccessHandleCache(data)),
  });
};

export const useDeleteComment = mutationQueryTemplate(
  API.deleteComment,
  commentDeleteFromCache,
);
export const usePostComment = mutationQueryTemplate(
  API.postComment,
  commentAddToCache,
);
export const usePatchComment = mutationQueryTemplate(
  API.patchComment,
  commentUpdateInCache,
);
export const useGetAllComments = () =>
  useQuery(cache.allComments, API.getAllComments);

// export const useDeleteComment = () => {
//   const queryClient = useQueryClient();
//   return useMutation(API.deleteComment, {
//     onSuccess: data =>
//       queryClient.setQueryData(cache.allComments, commentDeleteFromCache(data)),
//   });
// };

// export const usePostComment = () => {
//   const queryClient = useQueryClient();
//   return useMutation(API.postComment, {
//     onSuccess: data =>
//       queryClient.setQueryData(cache.allComments, commentAddToCache(data)),
//   });
// };

// export const usePatchComment = () => {
//   const queryClient = useQueryClient();
//   return useMutation(API.patchComment, {
//     onSuccess: data =>
//       queryClient.setQueryData(cache.allComments, commentUpdateInCache(data)),
//   });
// };
