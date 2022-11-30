import React from 'react';
import '@/styles/Banner.css';

type Props = {};

const Banner = (props: Props) => {
  return (
    <section className="banner">
      <div className="banner__body">
        <h1>our</h1>
        <span className="text-neutral-200 sm:text-8xl md:text-8xl lg:text-8xl ">
          News
        </span>
      </div>
      <div className="banner__page">
        <p>We share our thoughts on design. We design awesome things.</p>
        <button className="btn btn--primary">Work With Us</button>
      </div>
    </section>
  );
};

export default Banner;
