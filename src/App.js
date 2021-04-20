import { useQuery, useQueryClient } from 'react-query';
import { IoClose } from 'react-icons/io5';
import { Button } from '@material-ui/core';
import { ToastContainer } from 'react-toastify';
import CommentList from 'components/CommentList';
import Modal from 'components/Modal';
import Form from 'components/Form';
import IconButton from 'components/IconButton';
import 'react-toastify/dist/ReactToastify.css';
import styles from './App.module.css';

function App() {
  const queryClient = useQueryClient();
  const { data: isModalOpen } = useQuery('isModalOpen', () => false);

  const toggleModal = () => {
    queryClient.setQueryData('isModalOpen', !isModalOpen);
  };

  return (
    <div className={styles.mainContainer}>
      <h1>Our visitor's comments</h1>
      <CommentList />
      <Button
        type="button"
        color="primary"
        variant="contained"
        onClick={toggleModal}
      >
        Leave Comment
      </Button>
      {isModalOpen && (
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
      <ToastContainer autoClose={3000} />
    </div>
  );
}

export default App;
