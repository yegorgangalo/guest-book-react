import { useGetAllComments } from 'cache/react-query';
import CommentItem from 'components/CommentItem';
import Spinner from 'components/Spinner';
import { toast } from 'react-toastify';
import styles from './CommentList.module.css';

const CommentList = function () {
  const { data: comments, error, isLoading } = useGetAllComments();

  const notify = val => {
    toast(val);
  };

  if (isLoading)
    return (
      <>
        <div>Loading...</div>
        <Spinner />
      </>
    );

  return (
    <ul className={styles.commentList}>
      {comments?.length > 0 ? (
        comments.map(({ _id, name, comment }) => (
          <CommentItem key={_id} _id={_id} name={name} comment={comment} />
        ))
      ) : (
        <li className={styles.noComments}>No Comments</li>
      )}
      {error && notify(error.message)}
    </ul>
  );
};

export default CommentList;
