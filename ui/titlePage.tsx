import React from 'react';
import clsx from 'clsx';
import '@/styles/titlePage.css';

type Props = {
  className: any;
  title: string;
  desc: string;
};

const TitlePage = ({ className, title, desc }: Props) => {
  return (
    <div
      className={clsx('title__body', {
        [className]: !!className,
      })}
    >
      <h2 className="text-neutral-700">{title}</h2>
      <span className="title__h4">{desc}</span>
    </div>
  );
};

export default TitlePage;
