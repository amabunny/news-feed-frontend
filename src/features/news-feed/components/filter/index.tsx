import { CheckIcon, XCircleIcon } from '@heroicons/react/16/solid';
import { zodResolver } from '@hookform/resolvers/zod';
import clsx from 'clsx';
import { useForm } from 'react-hook-form';

import { useAppDispatch } from '@/lib/hooks';
import { Button, Card, Input } from '@/ui';

import { FilterSchema, filterSchema, getAllNewsThunk } from '../../model';

interface Props {
  className?: string;
}

export const Filter = ({ className }: Props) => {
  const dispatch = useAppDispatch();

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

  const onSubmit = (data: FilterSchema) => {
    void dispatch(getAllNewsThunk(data));
  };

  const onClear = () => {
    void dispatch(getAllNewsThunk({}));
    setValue('content', '');
    setValue('author', '');
    setValue('title', '');
    setValue('createdStart', '');
    setValue('createdEnd', '');
  };

  return (
    <form className={className} onSubmit={handleSubmit(onSubmit)}>
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

          <Button fullWidth icon={<XCircleIcon />} onClick={onClear}>
            Очистить
          </Button>
        </div>
      </div>
    </form>
  );
};
