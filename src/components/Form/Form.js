import { useSetRecoilState, useRecoilState } from 'recoil';
import {
  toggleIsOpenedModalState,
  commentsState,
  commentEditState,
} from 'state';
import { postCommentAPI, patchCommentAPI } from 'state/API';
import { useEffect, useState } from 'react';
import { Button, TextField } from '@material-ui/core';
import { useForm } from 'react-hook-form';
import styles from './Form.module.css';

export default function Form() {
  const toggleModal = useSetRecoilState(toggleIsOpenedModalState);
  const setComments = useSetRecoilState(commentsState);
  const [editCommentInfo, setEditCommentInfo] = useRecoilState(
    commentEditState,
  );
  const { handleSubmit, reset } = useForm();

  const [name, setName] = useState('');
  const [comment, setComment] = useState('');

  useEffect(() => {
    if (editCommentInfo) {
      setName(editCommentInfo.name);
      setComment(editCommentInfo.comment);
      return () => {
        setEditCommentInfo(null);
      };
    }
    const nameLS = localStorage.getItem('name');
    nameLS && setName(nameLS);
  }, [editCommentInfo, setEditCommentInfo]);

  const formSubmit = async () => {
    try {
      localStorage.setItem('name', name);
      if (editCommentInfo) {
        const data = await patchCommentAPI({
          _id: editCommentInfo._id,
          name,
          comment,
        });
        setComments(state =>
          state.map(comment => (comment._id === data._id ? data : comment)),
        );
      } else {
        const data = await postCommentAPI({ name, comment });
        setComments(state => state.concat(data));
      }
      toggleModal();
      reset();
    } catch (error) {
      console.log(error.toJSON());
    }
  };

  const handleNameChange = ({ target }) => {
    setName(target.value);
  };

  const handleCommentChange = ({ target }) => {
    setComment(target.value);
  };

  return (
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
  );
}
