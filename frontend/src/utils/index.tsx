import React from 'react';

interface TitleProps {
  title: string;
}

export const PageTitle: React.FC<TitleProps> = (props) => {
  document.title = props.title;
  return null;
};
