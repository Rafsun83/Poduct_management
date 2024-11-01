import clsx from 'clsx';
import { PropsWithChildren } from 'react';

interface Props {
  className?: string;
}

const ModalBody = ({ className = '', children }: PropsWithChildren<Props>) => {
  const classNames = clsx('modal-body', className);

  return <div className={classNames}>{children}</div>;
};

export default ModalBody;
