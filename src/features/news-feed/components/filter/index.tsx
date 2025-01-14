import { CheckIcon, XCircleIcon } from '@heroicons/react/16/solid';
import { zodResolver } from '@hookform/resolvers/zod';
import clsx from 'clsx';
import { useForm } from 'react-hook-form';

import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { Button, Card, Input } from '@/ui';

import {
  FilterSchema,
  filterSchema,
  getAllNewsThunk,
  isAnyFilterAppliedSelector,
} from '../../model';

interface Props {
  className?: string;
  onSubmit?: () => void;
  onClear?: () => void;
}

export const Filter = ({
  className,
  onSubmit: propsOnSubmit,
  onClear: propsOnClear,
}: Props) => {
  const dispatch = useAppDispatch();
  const isAnyFiltersApplied = useAppSelector(isAnyFilterAppliedSelector);

  const { register, handleSubmit, setValue } = useForm({
    resolver: zodResolver(filterSchema),
    values: {
      author: '',
      title: '',
      createdStart: '',
      createdEnd: '',
      content: '',
    },
  });

  const handleFormSubmit = (data: FilterSchema) => {
    void dispatch(getAllNewsThunk(data));
    propsOnSubmit?.();
  };

  const handleClear = () => {
    void dispatch(getAllNewsThunk({}));
    setValue('content', '');
    setValue('author', '');
    setValue('title', '');
    setValue('createdStart', '');
    setValue('createdEnd', '');
    propsOnClear?.();
  };

  return (
    <form className={className} onSubmit={handleSubmit(handleFormSubmit)}>
      <Card indents>
        <div
          className={clsx(
            'grid',
            'grid-flow-row',
            'grid-cols-1',
            'gap-6',
            'items-end',

            'md:grid-cols-2',
            'lg:grid-cols-3',
            'xl:grid-cols-none',
            'xl:grid-flow-col'
          )}
        >
          <Input label={'Автор'} {...register('author')} />
          <Input label={'Заголовок'} {...register('title')} />
          <Input
            label={'Дата создания (c)'}
            type={'date'}
            {...register('createdStart')}
          />
          <Input
            label={'Дата создания (по)'}
            type={'date'}
            {...register('createdEnd')}
          />
          <Input label={'Текст содержит'} {...register('content')} />
        </div>
      </Card>

      <div className={clsx('mt-5')}>
        <div
          className={clsx('grid', 'gap-2', 'grid-flow-col', 'justify-center')}
        >
          <Button fullWidth type={'submit'} icon={<CheckIcon />}>
            Применить
          </Button>

          {isAnyFiltersApplied && (
            <Button fullWidth icon={<XCircleIcon />} onClick={handleClear}>
              Очистить
            </Button>
          )}
        </div>
      </div>
    </form>
  );
};
