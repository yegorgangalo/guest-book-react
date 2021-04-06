import { useEffect, useState } from 'react';
import { Button, TextField } from '@material-ui/core';
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from 'react-redux';
import { getEdit } from 'redux/comments/comments-selectors';
import { addComment, patchComment } from 'redux/comments/comments-operations';
import {editComment} from 'redux/comments/comments-actions';
import styles from './Form.module.css';

export default function Form({ toggleModal }) {
    const dispatch = useDispatch();
    const editCommentInfo = useSelector(getEdit);
    const { handleSubmit, reset } = useForm();

    const [name, setName] = useState('');
    const [comment, setComment] = useState('');

    useEffect(() => {
        if (editCommentInfo) {
            setName(editCommentInfo.name);
            setComment(editCommentInfo.comment);
            return () => {
                dispatch(editComment(null));
            }
        }
        const nameLS = localStorage.getItem('name');
        nameLS && setName(nameLS);
    }, [editCommentInfo, dispatch])

    const formSubmit = () => {
        localStorage.setItem('name', name)
        if (editCommentInfo) {
            const formData = { _id: editCommentInfo._id, name, comment };
            dispatch(patchComment(formData));
            toggleModal();
            reset();
            return;
        }
        const formData = {name, comment};
        dispatch(addComment(formData));
        toggleModal();
        reset();
    }

    const handleNameChange = ({target}) => {
        setName(target.value);
    }

    const handleCommentChange = ({target}) => {
        setComment(target.value);
    }

    return (
        <form className={styles.blockForm} autoComplete="on" onSubmit={handleSubmit(formSubmit)}>
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
            <Button type="submit" color="primary" variant="contained" className={styles.submitBtn} >Add</Button>
        </form>
    )
}