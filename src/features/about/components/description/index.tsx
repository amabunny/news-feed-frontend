import clsx from 'clsx';

interface Props {
  className?: string;
}

export const Description = ({ className }: Props) => {
  return (
    <div className={clsx(className, 'bg-zinc-800', 'p-5', 'md:rounded-md')}>
      <img
        src={'/me/photo.jpg'}
        alt={'Sergei Antipin'}
        className={clsx(
          'size-28',
          'rounded-full',
          'float-left',
          'block',
          'mr-5',
          'mb-5',
          'md:mb-0'
        )}
      />

      <h2 className={clsx('text-2xl', 'mb-2')}>
        Тестовый проект «Лента новостей»
      </h2>

      <p className={clsx('mb-2', 'text-sm')}>
        Этот проект был создан в качестве тестового задания. Доступен просмотр,
        создание, редактирование и удаление новостей, а так же редактирование
        текста новости в формате WYSIWYG с помощью редактора Quill.js
      </p>

      <p className={clsx('mb-2', 'text-sm')}>
        Ниже указаны библиотеки, которые были использованы для создания проекта.
      </p>

      <div className={clsx('clear-left')} />
    </div>
  );
};
