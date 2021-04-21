import { useQueryClient } from 'react-query';
import cache from 'cacheUtils/types';
import { useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';
import styles from './Modal.module.css';

function Modal({ children }) {
  const queryClient = useQueryClient();
  const onEscCloseModal = useCallback(
    ({ code }) => {
      code === 'Escape' && queryClient.setQueryData(cache.isModalOpen, false);
    },
    [queryClient],
  );

  useEffect(() => {
    window.addEventListener('keydown', onEscCloseModal);
    return () => window.removeEventListener('keydown', onEscCloseModal);
  }, [onEscCloseModal]);

  const onBackDropCloseModal = ({ target, currentTarget }) => {
    target === currentTarget &&
      queryClient.setQueryData(cache.isModalOpen, false);
  };

  return createPortal(
    <div className={styles.backdrop} onClick={onBackDropCloseModal}>
      <div className={styles.content}>{children}</div>
    </div>,
    document.querySelector('#modal-root'),
  );
}

export default Modal;
