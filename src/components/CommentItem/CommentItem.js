import {useContext, useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Context from 'components/Context';
import { FaRegEdit } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';
import {deleteComment} from 'redux/comments/comments-operations';
import {editComment} from 'redux/comments/comments-actions';
import {getLoading, getComments} from 'redux/comments/comments-selectors';
import Spinner from 'components/Spinner';
import IconButton from 'components/IconButton';
import styles from './CommentItem.module.css'

const CommentItem = function ({ _id, name, comment }) {
    const [isEdit, setIsEdit] = useState(false);
    const dispatch = useDispatch();
    const { toggleModal } = useContext(Context);
    const loading = useSelector(getLoading);
    const comments = useSelector(getComments);

    useEffect(() => {
        setIsEdit(false);
    }, [comments])

    const openEditModal = () => {
        toggleModal();
        const commentInfo = { _id, name, comment };
        dispatch(editComment(commentInfo));
        setIsEdit(true);
    }

    const deleteCommentById = () => {
        dispatch(deleteComment(_id));
        setIsEdit(true);
    };


    return (
        <li className={styles.commentBlock} >
            <p className={styles.name} >{name}:</p>
            <p className={styles.comment} >{comment}</p>
            <span className={styles.positionOfBtns}>
                {loading && isEdit ?
                    <IconButton aria-label="Loading" classNames={styles.colorBtn}>
                        <Spinner classNames={styles.spinner} />
                    </IconButton>
                : <>
                    <IconButton onClick={openEditModal} aria-label="Edit Contact" classNames={styles.colorBtn}>
                        <FaRegEdit />
                    </IconButton>
                    <IconButton onClick={deleteCommentById} aria-label="Delete Contact" classNames={styles.colorBtn}>
                        <MdDelete />
                    </IconButton>
                </>}
            </span>
        </li>
    )
}

export default CommentItem;