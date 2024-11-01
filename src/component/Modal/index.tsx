import clsx from 'clsx';
import { MouseEvent, MutableRefObject, PropsWithChildren, useRef } from 'react';
import ModalBody from './ModalBody';
import ModalCloseIcon from './ModalClose';

// import ModalBody from './ModalBody';
// import ModalCloseIcon from './ModalCloseIcon';
// import ModalFooter from './ModalFooter';
import ModalHeader from './ModalHeader';

interface Props {
  className?: string;
  /**
   * Defines if the modal is open
   */
  isOpen: boolean;
  /**
   * Defines the modal will not be hidden if turns true
   */
  disableOutsideClick?: boolean;
  /**
   * Defines the modal animation
   */
  animation?: 'fade' | 'zoom' | 'top' | 'bottom';
  /**
   * Function executed when the closed button is clicked
   */
  onClose?: () => void;
}

const Modal = ({
  disableOutsideClick = false,
  isOpen = false,
  children,
  animation = 'zoom',
  className = 'w-full',
  onClose,
}: PropsWithChildren<Props>) => {
  const classNames = clsx('modal', isOpen ? 'modal-visible' : 'modal-hidden');

  const refModal = useRef<HTMLDivElement | null>(
    null
  ) as MutableRefObject<HTMLDivElement>;

  const handleModalClick = (event: MouseEvent<HTMLDivElement>) => {
    if (!isOpen || disableOutsideClick) return;

    if (refModal?.current.contains(event.target as Node)) {
      return;
    }

    onClose?.();
  };

  return (
    <div className={classNames} onClick={handleModalClick}>
      <div
        ref={refModal}
        className={`modal-content modal-animate-${animation} ${className}`}
      >
        {children}
      </div>
    </div>
  );
};

Modal.Header = ModalHeader;
Modal.Body = ModalBody;
// Modal.Footer = ModalFooter;
Modal.CloseIcon = ModalCloseIcon;

export default Modal;
