import React from 'react';
import '@/styles/banner.css';
import RoketSvg from '@/public/icons/roket.svg';
import Link from 'next/link';

type Props = {};

const Banner = (props: Props) => {
  return (
    <section id="banner" className="banner">
      <div className="banner__body">
        <h1 className="banner__title">
          Think.
          <br />
          <span className="font-normal text-neutral-200">
            Create.
            <br />
          </span>
          Solution.
        </h1>
      </div>
      <div className="banner__content">
        <div className="banner__desc">
          <p>
            "We are an award-winning branding and web agency committed to
            excellence since forever."
          </p>
          <p>
            "We set the standard of exceptional design creatively, technically,
            sustainably, and ethically so that you can make the extraordinary
            impact impact that you seek."
          </p>
        </div>
        <div className="banner__button">
          <Link href="/" className="btn btn--primary">
            View on Designer
          </Link>
          <RoketSvg className="banner__svg" />
        </div>
      </div>
    </section>
  );
};

export default Banner;
