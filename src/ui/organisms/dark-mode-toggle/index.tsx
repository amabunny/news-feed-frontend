import { Button } from '@headlessui/react';
import { SunIcon } from '@heroicons/react/16/solid';
import clsx from 'clsx';
import { useEffect, useRef, useState } from 'react';

export const DarkModeToggle = () => {
  const [_, setEnabled] = useState(false);
  const bodyRef = useRef(window.document.body);

  const handleButtonClick = () => {
    setEnabled((prev) => !prev);
    bodyRef.current?.classList.toggle('dark');
  };

  useEffect(() => {
    setEnabled(bodyRef.current?.classList.contains('dark'));
  }, []);

  return (
    <Button
      onClick={handleButtonClick}
      className={clsx(
        'size-4',
        'rounded-md',
        'flex',
        'bg-white/5',
        'hover:bg-white/20'
      )}
    >
      <SunIcon className={clsx('size-4')} />
    </Button>
  );
};
