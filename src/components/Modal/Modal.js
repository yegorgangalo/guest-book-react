import { useSetRecoilState } from 'recoil';
import { toggleIsOpenedModalState } from 'state';
import { useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';
import styles from './Modal.module.css';

function Modal({ children }) {
  const toggleModal = useSetRecoilState(toggleIsOpenedModalState);

  const onEscCloseModal = useCallback(
    ({ code }) => {
      code === 'Escape' && toggleModal();
    },
    [toggleModal],
  );

  useEffect(() => {
    window.addEventListener('keydown', onEscCloseModal);
    return () => window.removeEventListener('keydown', onEscCloseModal);
  }, [onEscCloseModal]);

  const onBackDropCloseModal = ({ target, currentTarget }) => {
    target === currentTarget && toggleModal();
  };

  return createPortal(
    <div className={styles.backdrop} onClick={onBackDropCloseModal}>
      <div className={styles.content}>{children}</div>
    </div>,
    document.querySelector('#modal-root'),
  );
}

export default Modal;
