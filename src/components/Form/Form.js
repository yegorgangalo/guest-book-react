import { usePostComment, usePatchComment } from 'cache/react-query';
import { useQueryClient } from 'react-query';
import { cache } from 'cache/react-query';
import { useEffect, useState } from 'react';
import { Button, TextField } from '@material-ui/core';
import { useForm } from 'react-hook-form';
import Spinner from 'components/Spinner';
import styles from './Form.module.css';

export default function Form() {
  const queryClient = useQueryClient();
  const {
    mutateAsync: mutateAsyncPost,
    isLoading: isLoadingPost,
  } = usePostComment();
  const {
    mutateAsync: mutateAsyncPatch,
    isLoading: isLoadingPatch,
  } = usePatchComment();

  const editCommentInfo = queryClient.getQueryData(cache.updateCommentInfo);
  const { handleSubmit, reset } = useForm();

  const [name, setName] = useState('');
  const [comment, setComment] = useState('');

  useEffect(() => {
    if (editCommentInfo) {
      setName(editCommentInfo.name);
      setComment(editCommentInfo.comment);
      return () => {
        queryClient.setQueryData(cache.updateCommentInfo, null);
      };
    }
    const nameLS = localStorage.getItem('name');
    nameLS && setName(nameLS);
  }, [editCommentInfo, queryClient]);

  const formSubmit = async () => {
    localStorage.setItem('name', name);
    editCommentInfo
      ? await mutateAsyncPatch({ _id: editCommentInfo._id, name, comment })
      : await mutateAsyncPost({ name, comment });
    queryClient.setQueryData(cache.isModalOpen, false);
    reset();
  };

  const handleNameChange = ({ target }) => {
    setName(target.value);
  };

  const handleCommentChange = ({ target }) => {
    setComment(target.value);
  };

  return (
    <>
      {(isLoadingPost || isLoadingPatch) && <Spinner />}
      <form
        className={styles.blockForm}
        autoComplete="on"
        onSubmit={handleSubmit(formSubmit)}
      >
        <TextField
          value={name}
          onChange={handleNameChange}
          rowsMax={1}
          label="Your Name"
          placeholder="Antonio"
          multiline
          variant="outlined"
          className={styles.name}
          autoFocus
        />
        <TextField
          value={comment}
          onChange={handleCommentChange}
          rows={5}
          rowsMax={10}
          label="Your comment"
          placeholder="I like your service very much!"
          multiline
          variant="outlined"
          className={styles.comment}
        />
        <Button
          type="submit"
          color="primary"
          variant="contained"
          className={styles.submitBtn}
        >
          Add
        </Button>
      </form>
    </>
  );
}
