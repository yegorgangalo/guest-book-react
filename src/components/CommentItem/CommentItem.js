import { useSetRecoilState, useRecoilValue } from 'recoil';
import { useRemoveComment } from 'state';
import {
  commentsState,
  commentEditState,
  isOpenedModalState,
  toggleIsOpenedModalState,
} from 'state';
import { useState, useEffect } from 'react';
import { FaRegEdit } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';
import Spinner from 'components/Spinner';
import IconButton from 'components/IconButton';
import styles from './CommentItem.module.css';

const CommentItem = function ({ _id, name, comment }) {
  const removeComment = useRemoveComment();
  const modal = useRecoilValue(isOpenedModalState);
  const toggleModal = useSetRecoilState(toggleIsOpenedModalState);
  const setCommentEditInfo = useSetRecoilState(commentEditState);
  const comments = useRecoilValue(commentsState);
  const [isEdit, setIsEdit] = useState(false);

  useEffect(() => {
    setIsEdit(false);
  }, [comments]);

  useEffect(() => {
    !modal && setIsEdit(false);
  }, [modal]);

  const openEditModal = () => {
    toggleModal();
    const commentInfo = { _id, name, comment };
    setCommentEditInfo(commentInfo);
    setIsEdit(true);
  };

  const deleteCommentById = () => {
    setIsEdit(true);
    removeComment(_id);
  };

  return (
    <li className={styles.commentBlock}>
      <p className={styles.name}>{name}:</p>
      <p className={styles.comment}>{comment}</p>
      <span className={styles.positionOfBtns}>
        {isEdit ? (
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
