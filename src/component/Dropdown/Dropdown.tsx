
import clsx from 'clsx';
import { PropsWithChildren, useRef, useState } from 'react';
import useClickOutside from '../../utils/common';
import DropdownItem from './DropdownItem';

interface ActionDropdownProps {
  isLast?: boolean;
  className: string;
}

const Dropdown = ({
  isLast,
  children,
  className = 'w-full px-2 py-2',
}: PropsWithChildren<ActionDropdownProps>) => {
  const classNames = clsx(
    'dropDown right-3 ',
    className,
    `${'bg-white px-2 py-2'} ${isLast ? '-top-[3rem]' : ''}`
  );
  const [open, setOpen] = useState<boolean>(false);

  const toggle = () => {
    setOpen((prev) => !prev);
  };
  const handler = () => {
    setOpen(false);
  };

  const ref = useRef(null);
//   useClickOutside(ref, handler);

  return (
    <div id="menu" ref={ref} className="relative inline-block text-left">
          <button onClick={toggle}>
              click me
        {/* <button className="2xl:ml-2 xl:ml-2 lg:ml-2 ml-0 -mr-1 h-5 w-5 text-violet-200 hover:text-violet-100" /> */}
      </button>
      {open ? (
        <div onClick={handler} className={classNames}>
          {children}
        </div>
      ) : null}
    </div>
  );
};

Dropdown.listItem = DropdownItem;

export default Dropdown;
