import { useEffect, useState } from 'react';
import { Button, TextField } from '@material-ui/core';
import { useForm, Controller } from "react-hook-form";
import { useDispatch } from 'react-redux';
import { addComment } from 'redux/comments/comments-operations';
import styles from './Form.module.css';

export default function Form({ toggleModal }) {
    const dispatch = useDispatch();
    const dispatchAsyncComment = (value) => dispatch(addComment(value));
    const { handleSubmit, reset, control } = useForm();

    const [name, setName] = useState('');

    useEffect(() => {
        const nameLS = localStorage.getItem('name');
        nameLS && setName(nameLS);
    }, [])

    const formSubmit = (data) => {
        localStorage.setItem('name', name)
        const formData = { ...data, name };
        dispatchAsyncComment(formData);
        toggleModal();
        reset();
    }

    const handleChange = ({target}) => {
        setName(target.value);
    };

    return (
        <form className={styles.blockForm} autoComplete="on" onSubmit={handleSubmit(formSubmit)}>
            <Controller
                name="name"
                control={control}
                defaultValue=""
                render={({field}) =>
                    <TextField
                        {...field}
                        value={name}
                        onChange={handleChange}
                        rowsMax={1}
                        label="Your Name"
                        placeholder="Antonio"
                        multiline
                        variant="outlined"
                        className={styles.name}
                        autoFocus
                    />}
            />
            <Controller
                name="comment"
                control={control}
                defaultValue=""
                render={({field}) =>
                    <TextField
                        {...field}
                        rows={5}
                        rowsMax={10}
                        label="Your comment"
                        placeholder="I like your service very much!"
                        multiline
                        variant="outlined"
                        className={styles.comment}
                    />}
            />
            <Button type="submit" color="primary" variant="contained" className={styles.submitBtn} >Add</Button>
        </form>
    )
}