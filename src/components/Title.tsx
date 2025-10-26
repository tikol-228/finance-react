import React, { type JSX } from 'react';

interface TitleProps {
  type?: 1 | 2 | 3 | 4 | 5 | 6; // Уровень заголовка
  children: React.ReactNode; // Содержимое заголовка
  className?: string; // Дополнительные классы для стилизации
}

const Title: React.FC<TitleProps> = ({ type = 1, children, className }) => {
  // Определяем тег заголовка
  const Tag = `h${type}` as keyof JSX.IntrinsicElements; 

  return <Tag className={className}>{children}</Tag>;
};

export default Title;
