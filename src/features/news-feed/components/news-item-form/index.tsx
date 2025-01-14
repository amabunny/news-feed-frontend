import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';

import { useAppDispatch } from '@/lib/hooks';
import { RoutesService } from '@/services/routes';
import { NewsFeedItem, newsFeedItemSchema } from '@/types/news-feed';
import { Button, Checkbox, Editor, Input } from '@/ui';

import { createOrUpdateNewsItemThunk, getNewsItemThunk } from '../../model';

interface Props {
  id?: string;
}

export const NewsItemForm = ({ id }: Props) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    setValue,
  } = useForm<NewsFeedItem>({
    resolver: zodResolver(newsFeedItemSchema),
    values: {
      title: '',
      content: '',
      author: '',
    },
  });

  const onSubmit = async (data: NewsFeedItem) => {
    await dispatch(createOrUpdateNewsItemThunk(data))
      .then(() => {
        const message = id ? 'Новость сохранена' : 'Новость создана';
        toast.success(message, {
          theme: 'dark',
        });
      })
      .catch(() => {
        toast.error('При сохранении новости произошла ошибка');
      });

    await navigate(RoutesService.getIndex());
  };

  useEffect(() => {
    if (id) {
      void dispatch(getNewsItemThunk(id))
        .unwrap()
        .then((payload) => {
          setValue('id', payload.id);
          setValue('author', payload.author);
          setValue('content', payload.content);
          setValue('title', payload.title);
          setValue('isHot', payload.isHot);
        });
    }
  }, [dispatch, id, setValue]);

  return (
    <div className={'bg-zinc-800 p-7 md:p-10 sm:rounded-md'}>
      {/* eslint-disable-next-line @typescript-eslint/no-misused-promises */}
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2 className={'mb-7 text-3xl'}>
          {id ? 'Редактирование новости' : 'Публикация новости'}
        </h2>

        <div className={'max-w-md mb-5'}>
          <Input
            label={'Заголовок'}
            description={errors.title?.message}
            {...register('title')}
          />
        </div>

        <div className={'max-w-md mb-5'}>
          <Input
            label={'Автор'}
            description={errors.author?.message}
            {...register('author')}
          />
        </div>

        <div className={'mb-5'}>
          <Controller
            control={control}
            render={({ field: { onChange, value } }) => (
              <Checkbox
                checked={value ?? false}
                onChange={onChange}
                label={'Пометить горячей'}
              />
            )}
            name={'isHot'}
          />
        </div>

        <div>
          <div className={'mb-5'}>
            <div>
              <Controller
                control={control}
                render={({ field: { onChange, value } }) => (
                  <Editor
                    label={'Введите текст новости'}
                    onChange={onChange}
                    value={value}
                    description={errors.content?.message}
                    editorClassName={'h-[70vh]'}
                  />
                )}
                name={'content'}
              />
            </div>
          </div>
        </div>

        <div>
          <div>
            <Button type={'submit'}>
              {id ? 'Сохранить' : 'Опубликовать новость'}
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};
