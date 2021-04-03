import { useSelector } from 'react-redux';
import styles from './CommentList.module.css';
import CommentItem from 'components/CommentItem';
import { getComments } from 'redux/comments/comments-selectors';

const CommentList = function () {
    const comments = useSelector(getComments);
    return (
        <ul className={styles.commentList} >
            {comments.length>0
                ? comments.map(({ _id, name, comment }) => (
                <CommentItem key={_id} name={name} comment={comment} />
                ))
                : <li className={styles.noComments}>No Comments</li>
            }
        </ul>
    )
}

export default CommentList;