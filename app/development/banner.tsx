import React from "react";
import "@/styles/banner.css";

type Props = {};

const Banner = (props: Props) => {
  return (
    <section id="banner" className="banner">
      <div className="banner__body">
        <h1 className="banner__title">
          Think.
          <br />
          <span className="text-neutral-200 font-normal">
            Create.
            <br />
          </span>
          Solution.
        </h1>
      </div>
      <div className="banner__content">
        <div className="flex flex-col gap-8">
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
        <button className="btn btn--primary">View on Designer</button>
      </div>
    </section>
  );
};

export default Banner;
