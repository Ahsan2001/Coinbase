import React from 'react';

interface TitleProps {
  title: string;
}

export const PageTitle: React.FC<TitleProps> = (props) => {
  document.title = props.title;
  return null;
};

export const REACT_APP_INTERNAL_API_PATH = 'http://localhost:4000';