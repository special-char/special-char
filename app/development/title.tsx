import React from "react";
import "@/styles/title.css";

type Props = {};

const Title = (props: Props) => {
  return (
    <section id="title" className="title">
      <div>
        <h1 className="title__title">
          Our
          <br />
          <span className="text-neutral-200 font-normal">
            News
            <br />
          </span>
        </h1>
      </div>
      <div className="title__content">
        <p>
          "We are an award-winning branding and web agency committed to
          excellence since forever."
        </p>
        <button className="btn btn--primary">work with us</button>
      </div>
    </section>
  );
};

export default Title;
