import { useMutation, useQueryClient } from 'react-query';
import { deleteCommentAPI } from 'state/API';
import { useSetRecoilState } from 'recoil';
import { commentEditState, toggleIsOpenedModalState } from 'state';
import { FaRegEdit } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';
import Spinner from 'components/Spinner';
import IconButton from 'components/IconButton';
import styles from './CommentItem.module.css';

const CommentItem = function ({ _id, name, comment }) {
  const queryClient = useQueryClient();
  const { mutateAsync, isLoading } = useMutation(deleteCommentAPI);

  const toggleModal = useSetRecoilState(toggleIsOpenedModalState);
  const setCommentEditInfo = useSetRecoilState(commentEditState);

  const openEditModal = () => {
    toggleModal();
    const commentInfo = { _id, name, comment };
    setCommentEditInfo(commentInfo);
  };

  const deleteCommentById = async () => {
    await mutateAsync(_id);
    queryClient.invalidateQueries('CommentsData');
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
