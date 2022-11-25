import React from 'react';
import '@/styles/banner.css';

type Props = {
  data: Object;
};

const Banner = (props: Props) => {
  return (
    <section id="banner" className="banner">
      <div className="banner__body">
        <h1 className="banner__title">our</h1>
        <span>work</span>
        <h1>function</h1>
      </div>
      <div className="banner__content">
        <div className="flex flex-col gap-8"> </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Necessitatibus quo repudiandae odio dolores dignissimos velit labore
          vitae aliquid. Nam, minima?
        </p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero
          facilis beatae ipsum iusto delectus consectetur quaerat explicabo
          dolor distinctio ratione.
        </p>
        <button className="btn btn--primary">view on Designer</button>
      </div>
    </section>
  );
};

export default Banner;
