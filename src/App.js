import { useRecoilValue, useSetRecoilState } from 'recoil';
import { isOpenedModalState, toggleIsOpenedModalState } from 'state';
import { IoClose } from 'react-icons/io5';
import { Button } from '@material-ui/core';
// import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CommentList from 'components/CommentList';
import Modal from 'components/Modal';
import Form from 'components/Form';
import IconButton from 'components/IconButton';
// import Spinner from 'components/Spinner';
import styles from './App.module.css';

function App() {
  const modal = useRecoilValue(isOpenedModalState);
  const toggleModal = useSetRecoilState(toggleIsOpenedModalState);

  // const toggleModal = () => {
  //   error && dispatch(resetCommentsError());
  //   setModal(!modal);
  // };

  // const notify = val => {
  //   toast(val);
  // };

  return (
    <div className={styles.mainContainer}>
      <h1>Our visitor's comments</h1>
      <CommentList />
      {/* {loading && <Spinner />}
      {error && notify(error)} */}
      <Button
        type="button"
        color="primary"
        variant="contained"
        onClick={toggleModal}
      >
        Leave Comment
      </Button>
      {modal && (
        <Modal>
          <Form />
          <IconButton
            onClick={toggleModal}
            aria-label="Close Modal"
            classNames={styles.iconButtonCloseModal}
          >
            <IoClose />
          </IconButton>
        </Modal>
      )}
      {/* <ToastContainer autoClose={3000} /> */}
    </div>
  );
}

export default App;
