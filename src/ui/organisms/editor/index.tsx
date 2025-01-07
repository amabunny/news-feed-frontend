import 'quill/dist/quill.core.css';
import 'quill/dist/quill.snow.css';
import './style.css';

import { Description, Field } from '@headlessui/react';
import clsx from 'clsx';
import Quill from 'quill';
import { ReactNode, useEffect, useRef } from 'react';

import { Label } from '@/ui';

interface Props {
  label?: ReactNode;
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  className?: string;
  editorClassName?: string;
  description?: string;
  readOnly?: boolean;
}

export const Editor = ({
  placeholder = '',
  className,
  description,
  readOnly,
  onChange,
  value,
  label,
  editorClassName,
}: Props) => {
  const quillContainerRef = useRef<HTMLDivElement | null>(null);
  const quillInstanceRef = useRef<Quill | null>(null);
  const initializedRef = useRef<boolean>(false);

  useEffect(() => {
    if (quillContainerRef.current && !initializedRef.current) {
      quillInstanceRef.current = new Quill(quillContainerRef.current, {
        readOnly,
        theme: 'snow',
        placeholder,
        modules: {
          toolbar: [
            [{ header: 3 }, { header: 4 }],

            ['bold', 'italic', 'underline', 'strike'],
            ['blockquote', 'code-block'],
            ['link', 'image', 'video'],

            [{ list: 'ordered' }, { list: 'bullet' }],
            [{ script: 'sub' }, { script: 'super' }],
            [{ indent: '-1' }, { indent: '+1' }],

            [{ color: [] }, { background: [] }],
            [{ align: [] }],

            ['clean'],
          ],
        },
      });

      initializedRef.current = true;
    }
  }, [placeholder, readOnly]);

  useEffect(() => {
    if (quillInstanceRef.current) {
      const handleTextChange = () => {
        onChange?.(quillInstanceRef.current?.root?.innerHTML ?? '');
      };

      quillInstanceRef.current.on('text-change', handleTextChange);

      return () => {
        quillInstanceRef.current?.off('text-change', handleTextChange);
      };
    }
  }, [onChange]);

  useEffect(() => {
    if (
      value &&
      quillInstanceRef.current &&
      value !== quillInstanceRef.current.root.innerHTML
    ) {
      quillInstanceRef.current.root.innerHTML = value;
    }
  }, [value]);

  return (
    <Field className={clsx(className, 'flex', 'flex-col')}>
      {label && <Label className={clsx('flex-shrink')}>{label}</Label>}

      {description && (
        <Description className={clsx('text-sm/6', 'text-white/50')}>
          {description}
        </Description>
      )}

      <div className={clsx('flex', 'flex-col', 'flex-grow')}>
        <div
          ref={quillContainerRef}
          className={clsx(editorClassName, 'bg-white/5', 'rounded-lg')}
        />
      </div>
    </Field>
  );
};
