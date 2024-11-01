import clsx from 'clsx';
import { PropsWithChildren } from 'react';

interface Props {
  /**
   * Additional className for the modal header
   */
  className?: string;
  /**
   * Defines the close button's positio
   */
  closeButtonPosition?: 'right' | 'left';
}

const ModalHeader = ({
  className = '',
  closeButtonPosition = 'right',
  children,
}: PropsWithChildren<Props>) => {
  const classNames = clsx('modal-header', className, {
    left: closeButtonPosition === 'left',
  });

  return <div className={classNames}>{children}</div>;
};

export default ModalHeader;
