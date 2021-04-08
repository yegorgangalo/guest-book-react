import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchComments } from 'redux/comments/comments-operations';
import { resetCommentsError } from 'redux/comments/comments-actions';
import { getLoading, getError } from 'redux/comments/comments-selectors';
import { Button } from '@material-ui/core';
import { IoClose } from 'react-icons/io5';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Context from 'components/Context';
import CommentList from 'components/CommentList';
import Modal from 'components/Modal';
import Form from 'components/Form';
import IconButton from 'components/IconButton';
import Spinner from 'components/Spinner';
import styles from './App.module.css';


function App() {
  const [modal, setModal] = useState(false);
  const dispatch = useDispatch();
  const loading = useSelector(getLoading);
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchComments());
  }, [dispatch])

  const toggleModal = () => {
    error && dispatch(resetCommentsError())
    setModal(!modal);
  }

  const notify = (val) => {
    toast(val);
  };

  return (
    <div className={styles.mainContainer} >
      <h1>Our visitor's comments</h1>
      <Context.Provider value={{toggleModal}}>
        <CommentList />
      </Context.Provider>
      {loading && <Spinner />}
      {error && notify(error)}
      <Button type="button" color="primary" variant="contained" onClick={toggleModal}>Leave Comment</Button>
      {modal &&
        <Modal toggleModal={toggleModal}>
        <Form toggleModal={toggleModal}/>
          <IconButton onClick={toggleModal} aria-label="Close Modal" classNames={styles.iconButtonCloseModal}>
            <IoClose/>
          </IconButton>
        </Modal>}
      <ToastContainer autoClose={3000}/>
    </div>
  )
}

export default App;
