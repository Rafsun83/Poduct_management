import clsx from 'clsx';
import { PropsWithChildren } from 'react';

interface Props {
  className?: string;
  onClick?: () => void;
}
const DropdownItem = ({
  className = '',
  children,
  onClick,
}: PropsWithChildren<Props>) => {
  const classNames = clsx(
    'text-sm w-full flex items-center gap-2 px-2 py-0.5 hover:text-green',
    className
  );
  return (
    <button onClick={onClick} className={classNames}>
      {children}
    </button>
  );
};

export default DropdownItem;