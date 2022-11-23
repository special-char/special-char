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
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Exercitationem sit, soluta numquam non eum officiis minima! Quis
            eaque aspernatur officiis!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
            reiciendis odit quo inventore, ad quae impedit recusandae
            voluptatibus totam repellat.
          </p>
        </div>
        <button className="btn btn--primary">view on Designer</button>
      </div>
    </section>
  );
};

export default Banner;
