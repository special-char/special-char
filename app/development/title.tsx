import React from 'react';
import '@/styles/title.css';

export default function Title({ data }) {
  return (
    <section id="title" className="title">
      <h1 className="title__title">
        {data.title} <br />
        <span className="font-light text-secondary1">
          {data.title1}
          <br />
        </span>
        {data.title2}
      </h1>

      <div className="title__content">
        <p className="title__desc">
          {data.description}
          <br />
          {data.description1}
        </p>
        <button className="btn btn--primary">{data.btn}</button>
      </div>
    </section>
  );
}
