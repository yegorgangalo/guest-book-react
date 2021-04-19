import { useRecoilValue } from 'recoil';
import { commentsState } from 'state/commentsState';
import CommentItem from 'components/CommentItem';
import styles from './CommentList.module.css';

const CommentList = function () {
  const comments = useRecoilValue(commentsState);
  return (
    <ul className={styles.commentList}>
      {comments.length > 0 ? (
        comments.map(({ _id, name, comment }) => (
          <CommentItem key={_id} _id={_id} name={name} comment={comment} />
        ))
      ) : (
        <li className={styles.noComments}>No Comments</li>
      )}
    </ul>
  );
};

export default CommentList;
