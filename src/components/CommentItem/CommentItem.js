import { useQueryClient } from 'react-query';
import { useDeleteComment } from 'cacheUtils/hooks';
// import { useMutation, useQueryClient } from 'react-query';
// import { deleteCommentAPI } from 'cacheUtils/API';
// import { commentsDataRemove } from 'cacheUtils/handlers';
import cache from 'cacheUtils/types';
import { FaRegEdit } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';
import Spinner from 'components/Spinner';
import IconButton from 'components/IconButton';
import styles from './CommentItem.module.css';

const CommentItem = function ({ _id, name, comment }) {
  const queryClient = useQueryClient();
  // const { mutateAsync, isLoading } = useMutation(deleteCommentAPI, {
  //   onSuccess: data =>
  //     queryClient.setQueryData(cache.CommentsData, commentsDataRemove(data)),
  // });
  const { mutateAsync, isLoading } = useDeleteComment();

  const openEditModal = () => {
    const commentInfo = { _id, name, comment };
    queryClient.setQueryData(cache.updateCommentInfo, commentInfo);
    queryClient.setQueryData(cache.isModalOpen, true);
  };

  const deleteCommentById = async () => {
    await mutateAsync(_id);
  };

  return (
    <li className={styles.commentBlock}>
      <p className={styles.name}>{name}:</p>
      <p className={styles.comment}>{comment}</p>
      <span className={styles.positionOfBtns}>
        {isLoading ? (
          <IconButton aria-label="Loading" classNames={styles.colorBtn}>
            <Spinner classNames={styles.spinner} />
          </IconButton>
        ) : (
          <>
            <IconButton
              onClick={openEditModal}
              aria-label="Edit Contact"
              classNames={styles.colorBtn}
            >
              <FaRegEdit />
            </IconButton>
            <IconButton
              onClick={deleteCommentById}
              aria-label="Delete Contact"
              classNames={styles.colorBtn}
            >
              <MdDelete />
            </IconButton>
          </>
        )}
      </span>
    </li>
  );
};

export default CommentItem;
